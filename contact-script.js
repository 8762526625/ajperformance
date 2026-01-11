function copyToClipboard(elementId, button) {
    const element = document.getElementById(elementId);
    const text = element.textContent;

    // Create a temporary textarea to copy text
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        // Try to copy using execCommand (works on most browsers)
        document.execCommand('copy');

        // Update button to show success
        const buttonText = button.querySelector('.button-text');
        const originalText = buttonText.textContent;

        button.classList.add('copied');
        buttonText.textContent = 'Copied!';

        // Reset button after 2 seconds
        setTimeout(() => {
            button.classList.remove('copied');
            buttonText.textContent = originalText;
        }, 2000);

    } catch (err) {
        console.error('Failed to copy:', err);
        alert('Failed to copy. Please copy manually: ' + text);
    } finally {
        document.body.removeChild(textarea);
    }
}

// Add smooth entrance animations
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.contact-card');

    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
