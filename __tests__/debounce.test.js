/**
 * @jest-environment jsdom
 */

// Import testing utilities
require('@testing-library/jest-dom');

describe('Debounce Function', () => {
  // Setup before each test
  beforeEach(() => {
    // Reset timers
    jest.useFakeTimers();
    
    // Define the debounce function
    window.debounce = function(func, wait) {
      let timeout;
      return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
      };
    };
  });
  
  afterEach(() => {
    // Restore timers
    jest.useRealTimers();
  });
  
  test('should only call the function once after multiple rapid calls', () => {
    // Create a mock function
    const mockFunction = jest.fn();
    
    // Create a debounced version of the function
    const debouncedFunction = window.debounce(mockFunction, 100);
    
    // Call the debounced function multiple times
    debouncedFunction();
    debouncedFunction();
    debouncedFunction();
    
    // Check that the function has not been called yet
    expect(mockFunction).not.toHaveBeenCalled();
    
    // Fast-forward time
    jest.advanceTimersByTime(100);
    
    // Check that the function has been called exactly once
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
  
  test('should call the function with the correct arguments', () => {
    // Create a mock function
    const mockFunction = jest.fn();
    
    // Create a debounced version of the function
    const debouncedFunction = window.debounce(mockFunction, 100);
    
    // Call the debounced function with arguments
    debouncedFunction('test', 123);
    
    // Fast-forward time
    jest.advanceTimersByTime(100);
    
    // Check that the function has been called with the correct arguments
    expect(mockFunction).toHaveBeenCalledWith('test', 123);
  });
  
  test('should reset the timer on subsequent calls', () => {
    // Create a mock function
    const mockFunction = jest.fn();
    
    // Create a debounced version of the function
    const debouncedFunction = window.debounce(mockFunction, 100);
    
    // Call the debounced function
    debouncedFunction();
    
    // Fast-forward time partially
    jest.advanceTimersByTime(50);
    
    // Call the debounced function again
    debouncedFunction();
    
    // Fast-forward time partially again
    jest.advanceTimersByTime(50);
    
    // Check that the function has not been called yet
    expect(mockFunction).not.toHaveBeenCalled();
    
    // Fast-forward time to complete the second timer
    jest.advanceTimersByTime(50);
    
    // Check that the function has been called exactly once
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
}); 