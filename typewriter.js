/**
 * Terminal-style text effect for a hacker aesthetic
 * A minimal implementation - just like code should be
 */
document.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.querySelector('.typewriter');
  if (!nameElement) return;
  
  const originalText = nameElement.textContent;
  nameElement.textContent = '';
  
  // Start with a blank screen with cursor blinking
  setTimeout(() => {
    // Then type out each character
    let i = 0;
    const typeNextChar = () => {
      if (i < originalText.length) {
        nameElement.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeNextChar, Math.random() * 100 + 50); // Random timing for more realistic effect
      }
    };
    
    typeNextChar();
  }, 1000);
});
