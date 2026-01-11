// Add smooth animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Animate link buttons on scroll into view
    const linkButtons = document.querySelectorAll('.link-button');

    linkButtons.forEach((button, index) => {
        setTimeout(() => {
            button.style.animation = `slideIn 0.5s ease-out forwards`;
        }, index * 100);
    });

    // Handle logo click - could add a fun interaction
    const logo = document.getElementById('logo');
    logo.addEventListener('click', function() {
        this.style.animation = 'spin 0.6s ease-in-out';
        setTimeout(() => {
            this.style.animation = '';
        }, 600);
    });

    // Add ripple effect on button click
    linkButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }

    .link-button {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);
