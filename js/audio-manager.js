// 音频管理器 - 深海探索音效系统
class AudioManager {
    constructor() {
        this.mainBGM = null;
        this.currentSFX = new Map(); // 当前播放的音效
        this.isAudioEnabled = false;
        this.currentScene = null;
        this.isInitialized = false;
        this.observer = null;
        
        // 场景音效配置 - 根据您的文件结构调整
        this.sceneAudioConfig = {
            scene1: {
                sfx: [
                    { file: 'img/sound/1_wave.seagull.mp3', volume: 0.6, loop: true }
                ],
                bgmVolume: 0.8
            },
            scene2: {
                sfx: [
                    { file: 'img/sound/2_bubble.mp3', volume: 0.7, loop: true },
                    { file: 'img/sound/2_x.fishswim.mp3', volume: 0.4, loop: true }
                ],
                bgmVolume: 0.7
            },
            scene3: {
                sfx: [
                    { file: 'img/sound/3_bubble_d.mp3', volume: 0.5, loop: true },
                    { file: 'img/sound/3_fishswim.mp3', volume: 0.3, loop: true }
                ],
                bgmVolume: 0.6
            },
            scene4: {
                sfx: [
                    { file: 'img/sound/4-5_deepsea.mp3', volume: 0.8, loop: true }
                ],
                bgmVolume: 0.5
            },
            scene5: {
                sfx: [
                    { file: 'img/sound/4-5_deepsea.mp3', volume: 0.9, loop: true }
                ],
                bgmVolume: 0.4
            },
            scene6: {
                sfx: [
                    { file: 'img/sound/6_deepsea_d.mp3', volume: 1.0, loop: true }
                ],
                bgmVolume: 0.3
            },
            scene7: {
                sfx: [
                    { file: 'img/sound/7_low.voice.mp3', volume: 0.6, loop: true }
                ],
                bgmVolume: 0.2
            },
            scene8: {
                sfx: [
                    { file: 'img/sound/8_monster.mp3', volume: 0.7, loop: true }
                ],
                bgmVolume: 0.3
            },
            scene9: {
                sfx: [
                    { file: 'img/sound/9_boil.mp3', volume: 0.8, loop: true }
                ],
                bgmVolume: 0.5
            },
            scene10: {
                sfx: [],
                bgmVolume: 0.2, // 场景10保持低音量而不是完全关闭
                isFading: false
            },
            ending: {
                sfx: [],
                bgmVolume: 0.3
            }
        };

        this.init();
    }

    // 初始化音频系统
    async init() {
        try {
            // 预加载主BGM
            await this.loadMainBGM();
            this.isInitialized = true;
            console.log('🎵 音频系统初始化完成');
        } catch (error) {
            console.warn('音频初始化失败:', error);
        }
    }

    // 加载主BGM
    async loadMainBGM() {
        return new Promise((resolve, reject) => {
            this.mainBGM = new Audio('img/sound/Abyssal Journey.mp3');
            this.mainBGM.loop = true;
            this.mainBGM.volume = 0;
            this.mainBGM.preload = 'auto';
            
            this.mainBGM.addEventListener('canplaythrough', () => {
                console.log('主BGM加载完成');
                resolve();
            });
            
            this.mainBGM.addEventListener('error', (e) => {
                console.error('主BGM加载失败:', e);
                reject(new Error('主BGM加载失败'));
            });
        });
    }

    // 开始播放（需要用户交互触发）
    async startAudio() {
        if (this.isAudioEnabled) {
            console.log('音频系统已在运行');
            return;
        }
        
        if (!this.isInitialized) {
            console.warn('音频系统未初始化');
            return;
        }
        
        try {
            // 播放主BGM
            if (this.mainBGM) {
                await this.mainBGM.play();
                // 初始音量设为0，等待场景切换时调整
                this.mainBGM.volume = 0;
            }
            
            this.isAudioEnabled = true;
            console.log('🎵 音频系统启动');
            
            // 设置场景监听
            this.setupSceneObserver();
            
        } catch (error) {
            console.warn('音频播放被阻止:', error);
        }
    }

    // 重启音频系统（用于重新浏览）
    async restartAudio() {
        console.log('🔄 重启音频系统...');
        
        // 停止当前所有音效
        this.stopAll();
        
        // 重置主BGM
        if (this.mainBGM) {
            this.mainBGM.currentTime = 0;
            this.mainBGM.volume = 0;
        }
        
        this.isAudioEnabled = true;
        this.currentScene = null;
        
        try {
            if (this.mainBGM) {
                await this.mainBGM.play();
            }
            console.log('🎵 音频系统已重启');
        } catch (error) {
            console.warn('音频重启失败:', error);
        }
    }

    // 设置场景观察器
    setupSceneObserver() {
        // 如果已有观察器，先断开
        if (this.observer) {
            this.observer.disconnect();
        }
        
        const scenes = document.querySelectorAll('.scene, .ending-section');
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && this.isAudioEnabled) {
                    const sceneId = entry.target.id;
                    console.log(`进入场景: ${sceneId}`);
                    
                    // 检查是否是从结尾返回浏览
                    this.handleSceneTransition(sceneId);
                }
            });
        }, {
            threshold: 0.4,
            rootMargin: '0px'
        });

        // 观察所有场景
        scenes.forEach(scene => {
            this.observer.observe(scene);
        });
    }

    // 处理场景过渡
    handleSceneTransition(sceneId) {
        // 如果当前在scene10或ending，然后返回到前面的场景，需要重启音频
        if ((this.currentScene === 'scene10' || this.currentScene === 'ending') && 
            sceneId !== 'scene10' && sceneId !== 'ending') {
            console.log('🔄 检测到从结尾返回，重启音频...');
            this.restartAudio();
        }
        
        // 特殊处理场景10
        if (sceneId === 'scene10') {
            this.handleScene10();
        } else if (sceneId === 'ending') {
            this.switchToScene('ending');
        } else {
            this.switchToScene(sceneId);
        }
    }

    // 处理场景10的特殊逻辑
    handleScene10() {
        const config = this.sceneAudioConfig.scene10;
        
        // 如果已经在淡出过程中，不再重复处理
        if (config.isFading) return;
        
        config.isFading = true;
        
        // 场景10保持低音量而不是完全关闭
        this.switchToScene('scene10');
        
        // 延迟淡出，给用户时间体验场景10
        setTimeout(() => {
            this.gradualFadeOut();
        }, 3000);
    }

    // 渐进式淡出（用于场景10）
    async gradualFadeOut() {
        console.log('开始渐进淡出音频...');
        
        // 淡出所有音效
        await this.fadeOutCurrentSFX();
        
        // 主BGM保持很低音量而不是完全关闭
        if (this.mainBGM) {
            await this.fadeAudio(this.mainBGM, this.mainBGM.volume, 0.1, 3000);
        }
        
        this.currentScene = 'scene10';
        console.log('音频已渐进淡出（保持最低音量）');
    }

    // 切换到指定场景的音效
    async switchToScene(sceneId) {
        if (!this.isAudioEnabled || this.currentScene === sceneId) return;
        
        console.log(`切换到场景音效: ${sceneId}`);
        
        // 重置场景10的淡出标志
        if (sceneId !== 'scene10') {
            this.sceneAudioConfig.scene10.isFading = false;
        }
        
        // 淡出当前场景音效
        await this.fadeOutCurrentSFX();
        
        // 更新当前场景
        this.currentScene = sceneId;
        
        // 调整主BGM音量
        this.adjustBGMVolume(sceneId);
        
        // 淡入新场景音效
        await this.fadeInSceneSFX(sceneId);
    }

    // 淡出当前音效
    async fadeOutCurrentSFX() {
        if (this.currentSFX.size === 0) return;
        
        const fadePromises = [];
        
        this.currentSFX.forEach((audio, key) => {
            const promise = this.fadeAudio(audio, audio.volume, 0, 800);
            fadePromises.push(promise);
        });
        
        await Promise.all(fadePromises);
        
        // 停止并清理所有音效
        this.currentSFX.forEach((audio) => {
            audio.pause();
            audio.currentTime = 0;
        });
        this.currentSFX.clear();
    }

    // 淡入场景音效
    async fadeInSceneSFX(sceneId) {
        const config = this.sceneAudioConfig[sceneId];
        if (!config || !config.sfx || config.sfx.length === 0) return;
        
        const fadePromises = [];
        
        for (const sfxConfig of config.sfx) {
            try {
                const audio = await this.loadSFX(sfxConfig.file);
                audio.volume = 0;
                audio.loop = sfxConfig.loop || false;
                
                // 播放音效
                await audio.play();
                
                // 淡入音量
                const fadePromise = this.fadeAudio(audio, 0, sfxConfig.volume, 1200);
                fadePromises.push(fadePromise);
                
                // 存储引用
                this.currentSFX.set(sfxConfig.file, audio);
                
            } catch (error) {
                console.warn(`音效加载失败: ${sfxConfig.file}`, error);
            }
        }
        
        await Promise.all(fadePromises);
    }

    // 加载音效文件
    loadSFX(filePath) {
        return new Promise((resolve, reject) => {
            const audio = new Audio(filePath);
            audio.preload = 'auto';
            
            const timeout = setTimeout(() => {
                console.warn(`音效加载超时: ${filePath}`);
                resolve(audio);
            }, 3000);
            
            audio.addEventListener('canplaythrough', () => {
                clearTimeout(timeout);
                resolve(audio);
            });
            
            audio.addEventListener('error', (e) => {
                clearTimeout(timeout);
                console.error(`音效加载错误: ${filePath}`, e);
                reject(new Error(`音效加载失败: ${filePath}`));
            });
        });
    }

    // 调整主BGM音量
    adjustBGMVolume(sceneId) {
        if (!this.mainBGM) return;
        
        const config = this.sceneAudioConfig[sceneId];
        const targetVolume = config ? config.bgmVolume : 0.5;
        
        this.fadeAudio(this.mainBGM, this.mainBGM.volume, targetVolume, 1500);
    }

    // 音频淡入淡出效果
    fadeAudio(audio, startVolume, endVolume, duration) {
        return new Promise((resolve) => {
            const startTime = Date.now();
            const initialVolume = audio.volume;
            
            const updateVolume = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                const easeProgress = this.easeInOutCubic(progress);
                audio.volume = initialVolume + (endVolume - initialVolume) * easeProgress;
                
                if (progress < 1) {
                    requestAnimationFrame(updateVolume);
                } else {
                    resolve();
                }
            };
            
            updateVolume();
        });
    }

    // 缓动函数
    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    // 全局音量控制
    setMasterVolume(volume) {
        const safeVolume = Math.max(0, Math.min(1, volume));
        
        if (this.mainBGM) {
            this.mainBGM.volume = safeVolume;
        }
        
        this.currentSFX.forEach((audio) => {
            audio.volume = safeVolume;
        });
    }

    // 停止所有音频（但保持系统可用）
    stopAll() {
        if (this.mainBGM) {
            this.mainBGM.pause();
            this.mainBGM.currentTime = 0;
        }
        
        this.currentSFX.forEach((audio) => {
            audio.pause();
            audio.currentTime = 0;
        });
        this.currentSFX.clear();
        
        this.currentScene = null;
    }

    // 完全重置音频系统（用于调试）
    hardReset() {
        this.stopAll();
        this.isAudioEnabled = false;
        this.currentScene = null;
        this.sceneAudioConfig.scene10.isFading = false;
        
        if (this.mainBGM) {
            this.mainBGM.currentTime = 0;
            this.mainBGM.volume = 0;
        }
        
        console.log('🔄 音频系统硬重置完成');
    }
}

// 创建全局音频管理器实例
const audioManager = new AudioManager();

// 用户交互后启动音频
function setupAudioStarter() {
    let isStarted = false;
    
    const startAudio = () => {
        if (isStarted) return;
        isStarted = true;
        
        audioManager.startAudio();
        
        // 移除事件监听器
        document.removeEventListener('click', startAudio);
        document.removeEventListener('touchstart', startAudio);
        document.removeEventListener('keydown', startAudio);
    };
    
    // 在用户第一次交互时启动音频
    document.addEventListener('click', startAudio, { once: true });
    document.addEventListener('touchstart', startAudio, { once: true });
    document.addEventListener('keydown', startAudio, { once: true });
    
    // 给开始探索按钮添加音频启动
    const startButton = document.getElementById('startExplore');
    if (startButton) {
        startButton.addEventListener('click', startAudio);
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(setupAudioStarter, 1000);
});

// 全局控制函数（增强调试功能）
window.audioControl = {
    playScene: (sceneId) => audioManager.switchToScene(sceneId),
    setVolume: (volume) => audioManager.setMasterVolume(volume),
    stopAll: () => audioManager.stopAll(),
    enableAudio: () => audioManager.startAudio(),
    restartAudio: () => audioManager.restartAudio(),
    hardReset: () => audioManager.hardReset(),
    getStatus: () => ({
        enabled: audioManager.isAudioEnabled,
        currentScene: audioManager.currentScene,
        bgmVolume: audioManager.mainBGM ? audioManager.mainBGM.volume : 0,
        activeSFX: Array.from(audioManager.currentSFX.keys())
    })
};