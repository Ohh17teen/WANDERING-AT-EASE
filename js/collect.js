// collect.js - 收集图鉴功能
class CollectSystem {
    constructor() {
        this.collectedItems = new Set();
        this.isInitialized = false;
        this.initializeCollectSystem();
        // 注释掉加载保存的数据，每次重新开始
        // this.loadCollection();
    }

    // 生物数据配置
    creatures = {
        // Scene 2 生物
        'fwy': { name: '凤尾鱼', image: 'img/Collect/fwy_tj.png', silhouette: 'img/Collect_jy/fwy_tjjy.png' },
        'sdy': { name: '沙丁鱼', image: 'img/Collect/sdy_tj.png', silhouette: 'img/Collect_jy/sdy_tjjy.png' },
        
        // Scene 3 生物
        'qy': { name: '鲭鱼群', image: 'img/Collect/qy_tj.png', silhouette: 'img/Collect_jy/qy_tjjy.png' },
        'hysm': { name: '海月水母', image: 'img/Collect/hysm_tj.png', silhouette: 'img/Collect_jy/hysm_tjjy.png' },
        'dy': { name: '带鱼', image: 'img/Collect/dy_tj.png', silhouette: 'img/Collect_jy/dy_tjjy.png' },
        
        // Scene 4 生物
        'cly': { name: '刺鳞鱼', image: 'img/Collect/cly_tj.png', silhouette: 'img/Collect_jy/cly_tjjy.png' },
        'dx': { name: '对虾', image: 'img/Collect/dx_tj.png', silhouette: 'img/Collect_jy/dx_tjjy.png' },
        
        // Scene 5 生物
        'dly': { name: '灯笼鱼', image: 'img/Collect/dly_tj.png', silhouette: 'img/Collect_jy/dly_tjjy.png' },
        'xxwz': { name: '小型乌贼', image: 'img/Collect/xxwz_tj.png', silhouette: 'img/Collect_jy/xxwz_tjjy.png' },
        'gsm': { name: '管水母', image: 'img/Collect/gsm_tj.png', silhouette: 'img/Collect_jy/gsm_tjjy.png' },
        
        // Scene 6 生物
        'cws': { name: '长尾鲨', image: 'img/Collect/cws_tj.png', silhouette: 'img/Collect_jy/cws_tjjy.png' },
        'dwwz': { name: '巨枪乌贼', image: 'img/Collect/dwwz_tj.png', silhouette: 'img/Collect_jy/dwwz_tjjy.png' },
        
        // Scene 7 生物
        'mx': { name: '盲虾', image: 'img/Collect/mx_tj.png', silhouette: 'img/Collect_jy/mx_tjjy.png' },
        'shsq': { name: '深海蛇鲭', image: 'img/Collect/shsq_tj.png', silhouette: 'img/Collect_jy/shsq_tjjy.png' },
        'shhs': { name: '深海海参', image: 'img/Collect/shhs_tj.png', silhouette: 'img/Collect_jy/shhs_tjjy.png' },
        
        // Scene 8 生物
        'tsm': { name: '吞噬鳗', image: 'img/Collect/tsm_tj.png', silhouette: 'img/Collect_jy/tsm_tjjy.png' },
        'shaky': { name: '深海𩽾𩾌鱼', image: 'img/Collect/shaky_tj.png', silhouette: 'img/Collect_jy/shaky_tjjy.png' },
        
        // Scene 9 生物
        'xrx': { name: '雪人蟹', image: 'img/Collect/xrx_tj.png', silhouette: 'img/Collect_jy/xrx_tjjy.png' },
        'shhd': { name: '深海海胆', image: 'img/Collect/shhd_tj.png', silhouette: 'img/Collect_jy/shhd_tjjy.png' },
        'shhx': { name: '深海海星', image: 'img/Collect/shhx_tj.png', silhouette: 'img/Collect_jy/shhx_tjjy.png' },
        'jxgc': { name: '巨型管虫', image: 'img/Collect/jxgc_tj.png', silhouette: 'img/Collect_jy/jxgc_tjjy.png' }
    };

    initializeCollectSystem() {
        if (this.isInitialized) return;
        
        console.log('🚀 初始化收集系统...');
        console.log('📝 每次重新开始收集进度');
        
        // 清除之前保存的数据
        this.clearSavedData();
        
        // 创建收集模态框
        this.createCollectModal();
        
        // 绑定Collect按钮事件
        this.bindCollectButton();
        
        // 绑定生物点击事件
        this.bindCreatureClicks();
        
        this.isInitialized = true;
        console.log('✅ 收集系统初始化完成 - 当前收集进度: 0/' + Object.keys(this.creatures).length);
    }

    clearSavedData() {
        // 清除localStorage中的保存数据
        localStorage.removeItem('deepSeaCollection');
        console.log('🗑️ 已清除保存的收集数据');
    }

    bindCollectButton() {
        const collectBtn = document.getElementById('collectBtn');
        if (collectBtn) {
            console.log('✅ Collect按钮绑定成功');
            collectBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('🎯 Collect按钮被点击');
                this.showCollectModal();
            });
        } else {
            console.error('❌ 未找到Collect按钮');
        }
    }

    bindCreatureClicks() {
        console.log('🔗 绑定生物点击事件...');
        
        const hitboxes = document.querySelectorAll('.fish-hitbox, .bio-hotspot');
        console.log(`🎯 找到 ${hitboxes.length} 个生物点击区域`);
        
        hitboxes.forEach(hitbox => {
            hitbox.style.cursor = 'pointer';
            const creatureId = hitbox.dataset.fish || hitbox.dataset.bio;
            
            if (creatureId && this.creatures[creatureId]) {
                hitbox.addEventListener('click', (e) => {
                    e.stopPropagation();
                    console.log(`🐠 点击生物: ${creatureId} - ${this.creatures[creatureId].name}`);
                    this.collectCreature(creatureId);
                });
            }
        });

        // 绑定到实际的鱼类图片上
        const fishImages = document.querySelectorAll('.fish, .bio-silhouette');
        fishImages.forEach(img => {
            const creatureId = img.dataset.fish || img.dataset.bio;
            if (creatureId && this.creatures[creatureId]) {
                img.style.cursor = 'pointer';
                img.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.collectCreature(creatureId);
                });
            }
        });
    }

    collectCreature(creatureId) {
        if (!this.collectedItems.has(creatureId)) {
            this.collectedItems.add(creatureId);
            // 注释掉保存到localStorage，这样就不会持久化
            // this.saveCollection();
            
            console.log(`🎉 已收集: ${this.creatures[creatureId].name}`);
            this.showCollectionFeedback(creatureId);
            
            // 如果图鉴是打开的，立即更新显示
            if (document.querySelector('.collect-modal.active')) {
                this.renderCollection();
            }
        }
    }

    showCollectionFeedback(creatureId) {
        // 移除可能存在的旧提示
        const oldFeedback = document.querySelector('.collect-feedback');
        if (oldFeedback) {
            oldFeedback.remove();
        }

        // 创建新的收集提示
        const feedback = document.createElement('div');
        feedback.className = 'collect-feedback';
        feedback.innerHTML = `
            <div class="feedback-content">
                <span class="feedback-icon">🎉</span>
                <span class="feedback-text">已收集: ${this.creatures[creatureId].name}</span>
            </div>
        `;
        
        document.body.appendChild(feedback);
        
        // 3秒后移除提示
        setTimeout(() => {
            if (feedback.parentNode) {
                feedback.parentNode.removeChild(feedback);
            }
        }, 3000);
    }

    createCollectModal() {
        // 如果模态框已存在，先移除
        const existingModal = document.querySelector('.collect-modal');
        if (existingModal) {
            existingModal.remove();
        }

        const modalHTML = `
            <div class="collect-modal">
                <div class="collect-container">
                    <button class="collect-close">&times;</button>
                    <div class="collect-header">
                        <h1 class="collect-title">深海生物图鉴</h1>
                        <p class="collect-subtitle">探索深海的神秘居民</p>
                    </div>
                    <div class="collect-grid" id="collectGrid">
                        <!-- 图鉴项目将通过JS动态生成 -->
                    </div>
                    <div class="collect-progress" id="collectProgress">
                        <!-- 进度信息将通过JS动态生成 -->
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // 绑定关闭事件
        const closeBtn = document.querySelector('.collect-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.hideCollectModal();
            });
        }
        
        // 点击模态框背景关闭
        const modal = document.querySelector('.collect-modal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.hideCollectModal();
                }
            });
        }
        
        // ESC键关闭
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                this.hideCollectModal();
            }
        });
        
        console.log('📦 收集模态框创建完成');
    }

    showCollectModal() {
        const modal = document.querySelector('.collect-modal');
        if (!modal) {
            console.error('❌ 收集模态框未找到');
            return;
        }
        
        modal.classList.add('active');
        this.renderCollection();
        
        // 禁止背景滚动
        document.body.style.overflow = 'hidden';
        
        console.log('📖 打开收集图鉴');
    }

    hideCollectModal() {
        const modal = document.querySelector('.collect-modal');
        if (modal) {
            modal.classList.remove('active');
        }
        
        // 恢复背景滚动
        document.body.style.overflow = '';
        
        console.log('📕 关闭收集图鉴');
    }

    renderCollection() {
        const grid = document.getElementById('collectGrid');
        const progress = document.getElementById('collectProgress');
        
        if (!grid || !progress) {
            console.error('❌ 找不到收集图鉴的DOM元素');
            return;
        }
        
        // 清空现有内容
        grid.innerHTML = '';
        
        // 计算收集进度
        const total = Object.keys(this.creatures).length;
        const collected = this.collectedItems.size;
        const percentage = Math.round((collected / total) * 100);
        
        // 更新进度信息
        progress.textContent = `已收集 ${collected} / ${total} (${percentage}%)`;
        
        // 生成图鉴项目
        Object.entries(this.creatures).forEach(([id, creature]) => {
            const isUnlocked = this.collectedItems.has(id);
            const item = document.createElement('div');
            item.className = `collect-item ${isUnlocked ? 'unlocked' : ''}`;
            item.innerHTML = `
                <div class="collect-icon">
                    <img src="${isUnlocked ? creature.image : creature.silhouette}" 
                         alt="${creature.name}"
                         onerror="this.style.display='none'">
                    ${!isUnlocked ? '<div class="collect-lock">🔒</div>' : ''}
                </div>
                <div class="collect-name">${creature.name}</div>
                <div class="collect-status">${isUnlocked ? '已解锁' : '未发现'}</div>
            `;
            
            grid.appendChild(item);
        });
        
        console.log(`🖼️ 渲染了 ${Object.keys(this.creatures).length} 个生物图鉴，已解锁 ${collected} 个`);
    }

    // 注释掉保存功能
    saveCollection() {
        // 不再保存到localStorage
        // try {
        //     localStorage.setItem('deepSeaCollection', JSON.stringify(Array.from(this.collectedItems)));
        //     console.log('💾 保存收集进度');
        // } catch (e) {
        //     console.error('保存收集数据失败:', e);
        // }
    }

    // 注释掉加载功能
    loadCollection() {
        // 不再从localStorage加载
        // try {
        //     const saved = localStorage.getItem('deepSeaCollection');
        //     if (saved) {
        //         const items = JSON.parse(saved);
        //         this.collectedItems = new Set(items);
        //         console.log(`📥 加载了 ${this.collectedItems.size} 个已收集项目`);
        //     }
        // } catch (e) {
        //     console.error('加载收集数据失败:', e);
        //     this.collectedItems = new Set();
        // }
    }

    // 调试方法 - 重置收集进度
    resetCollection() {
        this.collectedItems.clear();
        console.log('🔄 收集进度已重置');
        this.renderCollection();
    }

    // 调试方法 - 解锁所有生物
    unlockAll() {
        Object.keys(this.creatures).forEach(id => {
            this.collectedItems.add(id);
        });
        console.log('🔓 已解锁所有生物');
        this.renderCollection();
    }
}

// 初始化收集系统
let collectSystem;

// 在DOM加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        collectSystem = new CollectSystem();
        window.collectSystem = collectSystem; // 暴露到全局用于调试
    });
} else {
    collectSystem = new CollectSystem();
    window.collectSystem = collectSystem; // 暴露到全局用于调试
}

// 添加页面刷新时的清理（可选）
window.addEventListener('beforeunload', () => {
    console.log('🔄 页面即将刷新，收集进度将重置');
});