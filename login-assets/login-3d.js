/**
 * 3D Login Enhancement Script
 * Project: Dept Money - 3D Animated Login
 * Features: Particle System, Scale Effects, Exit Animation
 * Mobile: Touch events + Performance optimizations
 */

(function () {
    'use strict';

    // ============================================
    // 1. PARTICLE SYSTEM (Canvas 2D)
    // ============================================

    class Particle {
        constructor(canvas) {
            this.canvas = canvas;
            this.reset();
        }

        reset() {
            this.x = Math.random() * this.canvas.width;
            this.y = Math.random() * this.canvas.height;
            this.size = Math.random() * 3 + 1.5; // 1.5-4.5px
            this.speedX = (Math.random() - 0.5) * 0.4; // Slower movement
            this.speedY = (Math.random() - 0.5) * 0.4;
            this.opacity = Math.random() * 0.25 + 0.1; // 0.1-0.35
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Wrap around screen
            if (this.x < 0) this.x = this.canvas.width;
            if (this.x > this.canvas.width) this.x = 0;
            if (this.y < 0) this.y = this.canvas.height;
            if (this.y > this.canvas.height) this.y = 0;
        }

        draw(ctx) {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    class ParticleSystem {
        constructor(canvasId, particleCount = 30) {
            this.canvas = document.getElementById(canvasId);
            if (!this.canvas) {
                console.warn('Particle canvas not found');
                return;
            }

            this.ctx = this.canvas.getContext('2d');
            this.particles = [];
            this.particleCount = particleCount;
            this.animationId = null;

            this.init();
        }

        init() {
            this.resize();
            window.addEventListener('resize', () => this.resize());

            // Create particles
            for (let i = 0; i < this.particleCount; i++) {
                this.particles.push(new Particle(this.canvas));
            }

            this.animate();
        }

        resize() {
            this.canvas.width = this.canvas.offsetWidth;
            this.canvas.height = this.canvas.offsetHeight;
        }

        animate() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.particles.forEach(particle => {
                particle.update();
                particle.draw(this.ctx);
            });

            this.animationId = requestAnimationFrame(() => this.animate());
        }

        destroy() {
            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
            }
        }
    }

    // ============================================
    // 2. TOUCH SCALE EFFECT (Mobile)
    // ============================================

    function initTouchScale() {
        const loginCard = document.querySelector('#login-screen > div:nth-child(2)');
        if (!loginCard) return;

        // Only for touch devices
        if ('ontouchstart' in window) {
            loginCard.addEventListener('touchstart', function () {
                this.classList.add('login-card-touching');
            }, { passive: true });

            loginCard.addEventListener('touchend', function () {
                this.classList.remove('login-card-touching');
            }, { passive: true });

            loginCard.addEventListener('touchcancel', function () {
                this.classList.remove('login-card-touching');
            }, { passive: true });
        }
    }

    // ============================================
    // 3. LOGIN SUCCESS EXIT ANIMATION
    // ============================================

    function playLoginSuccessAnimation(callback) {
        const loginCard = document.querySelector('#login-screen > div:nth-child(2)');
        const loginScreen = document.getElementById('login-screen');

        if (!loginCard || !loginScreen) {
            console.warn('Login elements not found for animation');
            if (callback) callback();
            return;
        }

        // Add animation classes
        loginCard.classList.add('login-success-animation');
        loginScreen.classList.add('login-success-bg');

        // After animation completes, hide login screen
        setTimeout(() => {
            loginScreen.classList.add('hidden');

            // Clean up animation classes
            loginCard.classList.remove('login-success-animation');
            loginScreen.classList.remove('login-success-bg');

            // Call original callback (to show dashboard)
            if (callback) callback();
        }, 600); // Match animation duration
    }

    // ============================================
    // 4. HOOK INTO APP LOGIN FUNCTION
    // ============================================

    function hookLoginAnimation() {
        // Wait for app object to be available
        const checkApp = setInterval(() => {
            if (window.app && typeof window.app.completeLogin === 'function') {
                clearInterval(checkApp);

                // Store original function
                const originalCompleteLogin = window.app.completeLogin;

                // Override with animated version
                window.app.completeLogin = function (role, name) {
                    console.log('🎬 Playing login success animation...');

                    // Play animation, then call original function
                    playLoginSuccessAnimation(() => {
                        originalCompleteLogin.call(window.app, role, name);
                    });
                };

                console.log('✅ Login animation hook installed');
            }
        }, 100);

        // Safety timeout: stop checking after 5 seconds
        setTimeout(() => clearInterval(checkApp), 5000);
    }

    // ============================================
    // 5. INITIALIZATION
    // ============================================

    function init() {
        console.log('🚀 Initializing 3D Login enhancements...');

        // Check if login screen exists
        const loginScreen = document.getElementById('login-screen');
        if (!loginScreen) {
            console.warn('Login screen not found, skipping 3D enhancements');
            return;
        }

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            console.log('⚠️ Reduced motion preferred, skipping animations');
            return;
        }

        // Initialize particle system
        const particleSystem = new ParticleSystem('login-particles', 30);

        // Initialize touch scale
        initTouchScale();

        // Hook login animation
        hookLoginAnimation();

        console.log('✨ 3D Login ready!');

        // Cleanup when login screen is hidden
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.target.classList.contains('hidden')) {
                    particleSystem.destroy();
                    observer.disconnect();
                }
            });
        });

        observer.observe(loginScreen, {
            attributes: true,
            attributeFilter: ['class']
        });
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
