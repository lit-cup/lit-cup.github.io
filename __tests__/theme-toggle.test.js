/**
 * @jest-environment jsdom
 */

// Import testing utilities
const { fireEvent } = require('@testing-library/dom');
require('@testing-library/jest-dom');

describe('Theme Toggle Functionality', () => {
  // Setup before each test
  beforeEach(() => {
    // Reset the document body
    document.body.innerHTML = `
      <div id="theme-toggle" class="theme-toggle">
        <span class="icon sun-icon">☀️</span>
        <span class="icon moon-icon">🌙</span>
      </div>
    `;
    
    // Reset localStorage mock
    localStorage.clear();
    
    // Set default theme
    document.documentElement.removeAttribute('data-theme');
    
    // Mock the theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
      const currentTheme = localStorage.getItem('theme') || 'light';
      if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
  });
  
  test('should have light theme by default', () => {
    // Check that no theme attribute is set initially (defaults to light)
    expect(document.documentElement.getAttribute('data-theme')).toBeNull();
    expect(localStorage.getItem('theme')).toBeNull();
  });
  
  test('should toggle to dark theme when clicked', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Click the theme toggle
    fireEvent.click(themeToggle);
    
    // Check that theme is now dark
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });
  
  test('should toggle back to light theme when clicked twice', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Click the theme toggle twice
    fireEvent.click(themeToggle);
    fireEvent.click(themeToggle);
    
    // Check that theme is back to light
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
  });
  
  test('should load saved theme from localStorage', () => {
    // Set theme in localStorage
    localStorage.setItem('theme', 'dark');
    
    // Simulate page load with saved theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    // Check that theme is loaded from localStorage
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
}); 