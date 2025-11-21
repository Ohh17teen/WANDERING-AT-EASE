// 结束语部分交互效果
document.addEventListener('DOMContentLoaded', function() {
  const endingSection = document.querySelector('.ending-section');
  
  if (!endingSection) return;
  
  // 观察器用于触发微交互
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        endingSection.classList.add('in-view');
        
        // 添加文字逐字效果
        typewriterEffect();
        
        // 添加统计卡片悬停效果
        addStatsHoverEffect();
      }
    });
  }, {
    threshold: 0.2
  });

  observer.observe(endingSection);

  // 添加极简的粒子效果
  createMinimalParticles();
});

// 创建极简粒子效果
function createMinimalParticles() {
  const endingSection = document.querySelector('.ending-section');
  if (!endingSection) return;

  const particleCount = 12;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'ending-particle';
    
    const size = Math.random() * 1.5 + 0.5;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 8;
    const duration = Math.random() * 15 + 15;
    const opacity = Math.random() * 0.08 + 0.02;
    
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(102, 208, 255, ${opacity});
      border-radius: 50%;
      left: ${posX}%;
      top: ${posY}%;
      animation: particleFloat ${duration}s linear ${delay}s infinite;
      pointer-events: none;
      z-index: 1;
    `;
    
    endingSection.appendChild(particle);
  }
}

// 打字机效果
function typewriterEffect() {
  const texts = document.querySelectorAll('.ending-text');
  
  texts.forEach((text, index) => {
    const originalText = text.textContent.trim();
    text.textContent = '';
    text.style.visibility = 'visible';
    
    let i = 0;
    const speed = 60 + (index * 20);
    
    const timer = setInterval(() => {
      if (i < originalText.length) {
        text.textContent += originalText.charAt(i);
        i++;
      } else {
        clearInterval(timer);
        text.classList.add('typed');
      }
    }, speed);
  });
}

// 添加统计卡片悬停效果
function addStatsHoverEffect() {
  const statItems = document.querySelectorAll('.stat-item');
  
  statItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.borderColor = 'rgba(102, 208, 255, 0.4)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.borderColor = 'rgba(102, 208, 255, 0.2)';
    });
  });
}

// 添加粒子动画到样式
const particleStyle = document.createElement('style');
particleStyle.textContent = `
  @keyframes particleFloat {
    0% {
      transform: translateY(100vh) translateX(0);
      opacity: 0;
    }
    10% {
      opacity: 0.3;
    }
    90% {
      opacity: 0.1;
    }
    100% {
      transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
      opacity: 0;
    }
  }
  
  .ending-particle {
    will-change: transform, opacity;
  }
  
  /* 确保打字机效果正常工作 */
  .ending-text {
    visibility: hidden;
  }
  
  .ending-text.typed {
    visibility: visible;
  }
  
  /* 统计卡片发光效果 */
  .stat-item {
    transition: all 0.3s ease;
  }
  
  .stat-item:hover {
    box-shadow: 0 8px 25px rgba(102, 208, 255, 0.15);
  }
`;
document.head.appendChild(particleStyle);