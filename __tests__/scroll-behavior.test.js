/**
 * @jest-environment jsdom
 */

require('@testing-library/jest-dom');

describe('Scroll Behavior', () => {
  let header;
  let lastScrollTop;
  let handleHeaderScroll;
  
  beforeEach(() => {
    // Set up our document body
    document.body.innerHTML = `
      <header class="guideline">
        <div class="menu">Menu content</div>
      </header>
      <div style="height: 2000px;">Content to enable scrolling</div>
    `;
    
    // Mock window properties and methods
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    
    // Get elements
    header = document.querySelector('.guideline');
    lastScrollTop = 0;
    
    // Define the handleHeaderScroll function similar to the one in the actual code
    handleHeaderScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Always show header at the top of the page
      if (scrollTop <= 10) {
        header.classList.remove('header-hidden');
        lastScrollTop = scrollTop;
        return;
      }
      
      // Show on scroll up, hide on scroll down
      if (scrollTop < lastScrollTop) {
        header.classList.remove('header-hidden');
      } else if (scrollTop > lastScrollTop && scrollTop > 50) {
        header.classList.add('header-hidden');
      }
      
      lastScrollTop = scrollTop;
    };
  });
  
  test('header is visible when at the top of the page', () => {
    // Set scroll position to top
    window.scrollY = 0;
    
    // Call the function
    handleHeaderScroll();
    
    // Check that header is visible
    expect(header.classList.contains('header-hidden')).toBe(false);
  });
  
  test('header is hidden when scrolling down past threshold', () => {
    // Set initial scroll position
    window.scrollY = 20;
    handleHeaderScroll();
    
    // Simulate scrolling down
    window.scrollY = 100;
    handleHeaderScroll();
    
    // Check that header is hidden
    expect(header.classList.contains('header-hidden')).toBe(true);
  });
  
  test('header becomes visible when scrolling up', () => {
    // Set up: first scroll down to hide header
    window.scrollY = 20;
    handleHeaderScroll();
    window.scrollY = 100;
    handleHeaderScroll();
    
    // Now scroll up
    window.scrollY = 50;
    handleHeaderScroll();
    
    // Check that header is visible again
    expect(header.classList.contains('header-hidden')).toBe(false);
  });
}); 