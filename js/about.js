// about.js - About页面交互效果
document.addEventListener('DOMContentLoaded', function() {
  // 滚动动画效果
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        
        // 为数字添加计数动画
        if (entry.target.querySelector('.fact-number')) {
          animateNumbers(entry.target);
        }
      }
    });
  }, observerOptions);

  // 为需要动画的元素添加观察
  const animatedElements = document.querySelectorAll(
    '.concept-item, .mission-point, .fact-card, .main-concept'
  );
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // 数字计数动画
  function animateNumbers(container) {
    const numberElements = container.querySelectorAll('.fact-number');
    
    numberElements.forEach(element => {
      const targetNumber = parseInt(element.textContent);
      const duration = 2000; // 2秒
      const steps = 60;
      const stepValue = targetNumber / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= targetNumber) {
          element.textContent = targetNumber + (element.textContent.includes('%') ? '%' : '');
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current) + (element.textContent.includes('%') ? '%' : '');
        }
      }, duration / steps);
    });
  }

  // 深度图层交互
  const depthLayers = document.querySelectorAll('.depth-layer');
  depthLayers.forEach(layer => {
    layer.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    layer.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // 导航栏激活状态
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('header ul li a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  console.log('About页面加载完成 - 探索深海的奥秘');
});