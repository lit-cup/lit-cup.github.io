/**
 * @jest-environment jsdom
 */

// Import testing utilities
const { fireEvent } = require('@testing-library/dom');
require('@testing-library/jest-dom');

describe('Project Filtering Functionality', () => {
  // Setup before each test
  beforeEach(() => {
    // Reset the document body
    document.body.innerHTML = `
      <div class="project-filter">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="web">Web</button>
        <button class="filter-btn" data-filter="mobile">Mobile</button>
        <button class="filter-btn" data-filter="design">Design</button>
      </div>
      <div class="project-container">
        <article class="project-item" data-category="web">Web Project</article>
        <article class="project-item" data-category="mobile">Mobile Project</article>
        <article class="project-item" data-category="design">Design Project</article>
        <article class="project-item" data-category="web">Another Web Project</article>
      </div>
    `;
    
    // Mock the project filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter projects
        projectItems.forEach(item => {
          const category = item.getAttribute('data-category');
          
          if (filterValue === 'all' || filterValue === category) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  });
  
  test('should show all projects by default', () => {
    const projectItems = document.querySelectorAll('.project-item');
    const allButton = document.querySelector('[data-filter="all"]');
    
    // Check that all button is active
    expect(allButton.classList.contains('active')).toBe(true);
    
    // Check that all projects are visible
    projectItems.forEach(item => {
      expect(item.classList.contains('hidden')).toBe(false);
    });
  });
  
  test('should filter projects when a filter button is clicked', () => {
    const webButton = document.querySelector('[data-filter="web"]');
    const webProjects = document.querySelectorAll('[data-category="web"]');
    const nonWebProjects = document.querySelectorAll('[data-category]:not([data-category="web"])');
    
    // Click web filter button
    fireEvent.click(webButton);
    
    // Check that web button is active
    expect(webButton.classList.contains('active')).toBe(true);
    
    // Check that web projects are visible
    webProjects.forEach(item => {
      expect(item.classList.contains('hidden')).toBe(false);
    });
    
    // Check that non-web projects are hidden
    nonWebProjects.forEach(item => {
      expect(item.classList.contains('hidden')).toBe(true);
    });
  });
  
  test('should show all projects when "All" button is clicked', () => {
    const webButton = document.querySelector('[data-filter="web"]');
    const allButton = document.querySelector('[data-filter="all"]');
    const projectItems = document.querySelectorAll('.project-item');
    
    // First click web filter
    fireEvent.click(webButton);
    
    // Then click all filter
    fireEvent.click(allButton);
    
    // Check that all button is active
    expect(allButton.classList.contains('active')).toBe(true);
    
    // Check that all projects are visible
    projectItems.forEach(item => {
      expect(item.classList.contains('hidden')).toBe(false);
    });
  });
  
  test('should only have one active filter at a time', () => {
    const webButton = document.querySelector('[data-filter="web"]');
    const mobileButton = document.querySelector('[data-filter="mobile"]');
    
    // Click web filter
    fireEvent.click(webButton);
    expect(webButton.classList.contains('active')).toBe(true);
    
    // Click mobile filter
    fireEvent.click(mobileButton);
    
    // Check that web button is no longer active
    expect(webButton.classList.contains('active')).toBe(false);
    
    // Check that mobile button is active
    expect(mobileButton.classList.contains('active')).toBe(true);
  });
}); 