/**
 * @jest-environment jsdom
 */

// Import testing utilities
const { fireEvent } = require('@testing-library/dom');
require('@testing-library/jest-dom');

describe('Language Selector Functionality', () => {
  // Setup before each test
  beforeEach(() => {
    // Reset the document body
    document.body.innerHTML = `
      <div class="language-select">
        <div class="language-option">
          <img src="./images/EN.svg" alt="English" loading="lazy">
        </div>
        <div class="languageOption-items">
          <div data-lang="en">
            <img src="./images/EN.svg" alt="English" loading="lazy">
          </div>
          <div data-lang="zh">
            <img src="./images/TW.svg" alt="Chinese" loading="lazy">
          </div>
          <div data-lang="jp">
            <img src="./images/JP.svg" alt="Japanese" loading="lazy">
          </div>
        </div>
      </div>
      <div data-lang="greeting">Hello</div>
    `;
    
    // Reset localStorage mock
    localStorage.clear();
    
    // Mock fetch for language.json
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          en: {
            greeting: 'Hello'
          },
          zh: {
            greeting: '你好'
          },
          jp: {
            greeting: 'こんにちは'
          }
        })
      })
    );
    
    // Mock the language selector functionality
    const selected = document.querySelector('.language-option');
    const languageSelect = document.querySelector('.language-select');
    const languageOptionItems = document.querySelector('.languageOption-items');
    
    // Toggle language dropdown
    selected.addEventListener('click', () => {
      languageSelect.classList.toggle('open');
    });
    
    // Select language
    languageOptionItems.addEventListener('click', async (e) => {
      if (e.target.closest('div')) {
        const selectedItem = e.target.closest('div');
        const imgSrc = selectedItem.querySelector('img').src;
        const lang = selectedItem.getAttribute('data-lang');
        
        // Update selected language icon
        selected.innerHTML = `<img src="${imgSrc}" alt="icon" loading="lazy">`;
        
        // Close dropdown
        languageSelect.classList.remove('open');
        
        // Load translations
        await loadTranslations(lang);
      }
    });
    
    // Load translations function
    async function loadTranslations(lang) {
      try {
        const response = await fetch('./js/language.json');
        const translations = await response.json();
        
        document.querySelectorAll('[data-lang]').forEach((element) => {
          const key = element.getAttribute('data-lang');
          if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
          }
        });
        
        localStorage.setItem('language', lang);
      } catch (error) {
        console.error('Error loading translations', error);
      }
    }
  });
  
  test('should toggle language dropdown when clicked', () => {
    const selected = document.querySelector('.language-option');
    const languageSelect = document.querySelector('.language-select');
    
    // Initially closed
    expect(languageSelect.classList.contains('open')).toBe(false);
    
    // Click to open
    fireEvent.click(selected);
    expect(languageSelect.classList.contains('open')).toBe(true);
    
    // Click to close
    fireEvent.click(selected);
    expect(languageSelect.classList.contains('open')).toBe(false);
  });
  
  test('should change language when a language option is selected', async () => {
    const zhOption = document.querySelector('[data-lang="zh"]');
    const greetingElement = document.querySelector('[data-lang="greeting"]');
    
    // Click Chinese option
    fireEvent.click(zhOption);
    
    // Wait for async operations
    await new Promise(resolve => setTimeout(resolve, 0));
    
    // Check that language is changed
    expect(localStorage.getItem('language')).toBe('zh');
    expect(greetingElement.innerHTML).toBe('你好');
  });
  
  test('should close dropdown after selecting a language', async () => {
    const selected = document.querySelector('.language-option');
    const languageSelect = document.querySelector('.language-select');
    const zhOption = document.querySelector('[data-lang="zh"]');
    
    // Open dropdown
    fireEvent.click(selected);
    expect(languageSelect.classList.contains('open')).toBe(true);
    
    // Select language
    fireEvent.click(zhOption);
    
    // Wait for async operations
    await new Promise(resolve => setTimeout(resolve, 0));
    
    // Check that dropdown is closed
    expect(languageSelect.classList.contains('open')).toBe(false);
  });
}); 