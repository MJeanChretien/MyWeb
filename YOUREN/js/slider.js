class ModernSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.slides img');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.querySelector('.prev');
        this.nextBtn = document.querySelector('.next');
        
        if (!this.slides.length) return;
        
        this.setup();
        this.autoPlay();
    }
    
    setup() {
        // Hide all slides except first
        this.slides.forEach((slide, index) => {
            if (index !== 0) slide.style.display = 'none';
        });
        
        // Add event listeners
        this.prevBtn?.addEventListener('click', () => this.changeSlide(-1));
        this.nextBtn?.addEventListener('click', () => this.changeSlide(1));
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
    }
    
    changeSlide(direction) {
        this.slides[this.currentSlide].style.display = 'none';
        this.dots[this.currentSlide].classList.remove('active');
        
        this.currentSlide = (this.currentSlide + direction + this.slides.length) % this.slides.length;
        
        this.slides[this.currentSlide].style.display = 'block';
        this.dots[this.currentSlide].classList.add('active');
    }
    
    goToSlide(index) {
        if (index === this.currentSlide) return;
        
        this.slides[this.currentSlide].style.display = 'none';
        this.dots[this.currentSlide].classList.remove('active');
        
        this.currentSlide = index;
        
        this.slides[this.currentSlide].style.display = 'block';
        this.dots[this.currentSlide].classList.add('active');
    }
    
    autoPlay() {
        setInterval(() => this.changeSlide(1), 5000); // Change slide every 5 seconds
    }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ModernSlider();
}); 