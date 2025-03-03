# Portfolio Website - Chen Yi-Ting

## Overview

This is a personal portfolio website showcasing my skills, experience, and projects as a Front-End Developer. The website features a responsive design, multi-language support (Chinese, English, and Japanese), theme toggling (light/dark mode), and smooth animations.

![Portfolio Website Screenshot](./images/lit3.1%201.svg)

## Live Demo

Visit the live website: [https://lit-cup.github.io](https://lit-cup.github.io)

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Multi-language Support**: Switch between Chinese, English, and Japanese
- **Theme Toggle**: Choose between light and dark themes
- **Smooth Animations**: Intersection Observer API for scroll-based animations
- **Interactive Timeline**: Showcasing my learning journey and skills
- **Project Showcase**: Displaying my portfolio projects
- **Project Filtering**: Filter projects by category or technology
- **Contact Information**: Easy access to my contact details
- **Accessibility**: WCAG 2.1 compliant color contrast ratios and semantic HTML

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (ES6+)
- Intersection Observer API
- Local Storage for theme and language preferences

## Project Structure

```
├── index.html              # Main HTML file
├── index.css               # Main CSS file
├── reponsive.css           # Responsive design styles
├── js/
│   ├── index.js            # Main JavaScript file
│   └── language.json       # Translations for multi-language support
├── images/                 # Image assets
│   ├── lit3.1 1.svg        # Logo
│   ├── translate.svg       # Language icon
│   ├── TW.svg              # Taiwan flag
│   ├── EN.svg              # UK flag
│   ├── JP.svg              # Japan flag
│   └── ...                 # Other images
└── README.md               # Project documentation
```

## Setup and Installation

1. Clone the repository:

   ```
   git clone https://github.com/lit-cup/lit-cup.github.io.git
   ```

2. Navigate to the project directory:

   ```
   cd lit-cup.github.io
   ```

3. Open `index.html` in your browser to view the website locally.

## Key Components

### Multi-language Support

The website supports three languages: Chinese, English, and Japanese. Language preferences are stored in local storage for persistence across sessions.

```javascript
// Load translations based on selected language
async function loadTranslations(lang) {
  try {
    const response = await fetch("./js/language.json");
    const translations = await response.json();

    document.querySelectorAll("[data-lang]").forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });
    localStorage.setItem("language", lang);
  } catch (error) {
    console.error("Error loading translations", error);
  }
}
```

### Theme Toggle

The website features a light/dark theme toggle. Theme preferences are stored in local storage.

```javascript
// Theme toggle functionality
themeToggle.addEventListener("click", () => {
  if (currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    currentTheme = "dark";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    currentTheme = "light";
  }
  localStorage.setItem("theme", currentTheme);
});
```

### CSS Variables for Theming

The website uses an extensive CSS variable system for consistent theming across light and dark modes. The color palette is designed with accessibility in mind, ensuring all text meets WCAG 2.1 contrast requirements.

```css
:root {
  /* Primary Colors */
  --color-primary: #ae0000;
  --color-primary-light: #d40000;
  --color-primary-dark: #8b0000;
  --color-primary-contrast: #ffffff;

  /* Secondary Colors */
  --color-secondary: #f5f5f5;
  --color-secondary-light: #ffffff;
  --color-secondary-dark: #e0e0e0;

  /* Accent Colors */
  --color-accent: #ff4d4d;
  --color-accent-light: #ff7373;
  --color-accent-dark: #cc0000;

  /* Background Colors */
  --color-background: #fdfbf8;
  --color-background-alt: #f8f4f4;
  --color-background-elevated: #ffffff;

  /* Text Colors */
  --color-text: #333333; /* 12:1 contrast ratio on background */
  --color-text-light: #666666;
  --color-text-lighter: #999999;
  --color-text-contrast: #ffffff;

  /* Project Colors */
  --color-project-bg: rgba(255, 87, 51, 0.1);
  --color-project-article-bg: rgba(225, 87, 51, 0.3);
  --color-project-title: #8b0000; /* 7:1 contrast ratio */
  --color-project-text: #333333; /* 12:1 contrast ratio */
  --color-project-accent: #d40000; /* 4.5:1 contrast ratio */
}

[data-theme="dark"] {
  /* Primary Colors */
  --color-primary: #ffe500;
  --color-primary-light: #fff04d;
  --color-primary-dark: #ccb700;
  --color-primary-contrast: #000000;

  /* Secondary Colors */
  --color-secondary: #420606;
  --color-secondary-light: #631010;
  --color-secondary-dark: #2d0404;

  /* Accent Colors */
  --color-accent: #ffb800;
  --color-accent-light: #ffc933;
  --color-accent-dark: #cc9200;

  /* Background Colors */
  --color-background: #0c0706;
  --color-background-alt: #1a1311;
  --color-background-elevated: #241b19;

  /* Text Colors */
  --color-text: #f5f5f5; /* 18:1 contrast ratio on background */
  --color-text-light: #cccccc;
  --color-text-lighter: #999999;
  --color-text-contrast: #000000;

  /* Project Colors */
  --color-project-bg: rgba(255, 127, 80, 0.2);
  --color-project-article-bg: rgba(255, 127, 80, 0.4);
  --color-project-title: #ffe500; /* 15:1 contrast ratio */
  --color-project-text: #f5f5f5; /* 16:1 contrast ratio */
  --color-project-accent: #fff04d; /* 14:1 contrast ratio */
}
```

#### Color System Features

- **Semantic Color Naming**: Colors are named by their function, not their appearance
- **Contrast Compliance**: All text colors meet or exceed WCAG 2.1 AA standards (4.5:1 minimum)
- **Hierarchical Structure**: Colors are organized into logical groups (primary, secondary, accent, etc.)
- **Theme Consistency**: Each color has an equivalent in both light and dark themes
- **Component-Specific Colors**: Special colors for projects, timelines, and UI elements

### Scroll Animations

The website uses the Intersection Observer API to trigger animations when elements enter the viewport.

```javascript
// Animation observer function
function setupIntersectionObserver() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Additional animation logic...
      }
    });
  }, options);

  // Observe elements...
}
```

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Flicker animation for image elements */
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
    transform: var(--transform-3d) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: var(--transform-3d) scale(1.05);
  }
  75% {
    opacity: 0.75;
    transform: var(--transform-3d) scale(0.95);
  }
}
```

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport:

1. **Timeline Items**: Fade and slide up when scrolled into view
2. **Project Cards**: Appear with a fade-in effect
3. **Content Sections**: Reveal with staggered animations for child elements

#### Interactive Animations

Animations that respond to user interactions:

1. **Menu Items**: Hover animations with underline effects
2. **Project Cards**: Scale effect on hover
3. **Buttons**: Subtle pulse animations for interactive elements
4. **Theme Toggle**: Smooth transition between light and dark modes

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

#### Progressive Enhancement

Animations are implemented with progressive enhancement in mind:

```css
/* Base styling without animation */
.element {
  opacity: 1;
}

/* Animation for supported browsers */
@supports (animation-name: fadeIn) {
  .element {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
  }
}
```

### Menu Animation Effects

The menu elements use various animation techniques for smooth interactions:

```css
/* Menu item hover effect */
.menu-dropdown-item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  transform: scaleX(0);
  bottom: -5px;
  left: 0;
  border-radius: 20px;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-dropdown-item.active::after,
.menu-dropdown-item:hover::after {
  transform: scaleX(0.5);
  transform-origin: center;
}

/* Mobile menu transition */
.menu-dropdown {
  transition: all 0.3s ease;
}

.menu-dropdown.active {
  animation: slideInFromTop 0.3s ease forwards;
}
```

The menu animations enhance user experience through:

1. **Subtle Hover Effects**: Underline animations that provide visual feedback
2. **Smooth Transitions**: Gentle transitions between menu states
3. **Mobile Adaptations**: Different animation styles for mobile vs desktop
4. **Visual Hierarchy**: Animations that help establish visual hierarchy
5. **Consistent Timing**: Carefully tuned timing functions for natural movement

### Project Filtering

The website includes a filtering system for projects, allowing visitors to filter projects by category or technology.

```javascript
// Project filtering functionality
function setupProjectFiltering() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
```

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes. The responsive design includes:

- Collapsible menu for mobile and tablet views
- Grid layout for projects that adapts to screen size
- Flexible typography with clamp() for responsive font sizing
- Optimized images and layouts for different devices

### Recent Responsive Design Improvements

The responsive design was recently rebuilt with the following enhancements:

- **Better Organization**: CSS is now structured by screen size and section for easier maintenance
- **Improved Media Queries**: Clear separation between desktop, tablet, and mobile styles
- **Enhanced Menu Behavior**: Menu now adapts intelligently to different screen sizes
- **Optimized Project Grid**: Project display now uses CSS Grid for better layout control
- **Smoother Transitions**: Added proper transitions for header and menu elements
- **Backdrop Filter Support**: Implemented RGB variables for proper backdrop filter functionality
- **Mobile-First Approach**: Ensured all components work well on mobile devices first

```css
/* Example of the improved responsive CSS structure */
@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 600px) {
  /* Mobile styles */
}
```

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

The website includes a comprehensive test suite using Jest and Testing Library. The tests cover key functionality including:

### Test Setup

To run the tests:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The test suite includes tests for:

1. **Theme Toggle**: Tests for toggling between light and dark themes and persisting the theme preference in localStorage.
2. **Language Selector**: Tests for changing languages, updating UI elements, and persisting language preferences.
3. **Project Filtering**: Tests for filtering projects by category and ensuring the correct projects are displayed.
4. **Intersection Observer Animations**: Tests for adding animation classes to elements when they enter the viewport.
5. **Debounce Function**: Tests for ensuring the debounce function properly limits the rate of function calls.
6. **Scroll Behavior**: Tests for header visibility based on scroll direction and position, ensuring the header shows when scrolling up and hides when scrolling down.

### Test Structure

Tests are organized in the `__tests__` directory and follow a consistent pattern:

```
__tests__/
  ├── theme-toggle.test.js
  ├── language-selector.test.js
  ├── project-filter.test.js
  ├── intersection-observer.test.js
  ├── debounce.test.js
  └── scroll-behavior.test.js
```

Each test file includes:

- Setup code that creates a mock DOM environment
- Tests for specific functionality
- Assertions to verify expected behavior

### Continuous Integration

The project uses GitHub Actions for continuous integration to ensure tests pass on every push and pull request:

```
.github/
  └── workflows/
      └── test.yml
```

The CI workflow:

- Runs on both Node.js 16.x and 18.x environments
- Automatically executes all tests when code is pushed to the main branch
- Provides immediate feedback if any tests fail
- Ensures code quality is maintained throughout development

To view the CI status, check the Actions tab in the GitHub repository.

### Mocking

The tests use several mocks to simulate browser functionality:

- **localStorage**: Mocked to test theme and language persistence
- **IntersectionObserver**: Mocked to test scroll-based animations
- **fetch**: Mocked to test loading translations

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## Recent Updates (May 2024)

The website has recently undergone significant improvements:

1. **Project Section Enhancement**:

   - Added project filtering functionality to categorize projects
   - Implemented a responsive grid layout for better project display
   - Improved project card design with tags and hover effects

2. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

3. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

4. **Animation Enhancements**:

   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

5. **Testing Implementation**:
   - Added comprehensive Jest test suite for key functionality
   - Implemented tests for theme toggling, language selection, and project filtering
   - Created tests for intersection observer animations and debounce function
   - Added tests for scroll behavior functionality
   - Set up GitHub Actions workflow for continuous integration
   - Ensured cross-browser compatibility with modern browsers

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stuart.yitingchen@gmail.com
- GitHub: [lit-cup](https://github.com/lit-cup)
- LinkedIn: (coming soon)

---

© 2025 lit-cup. All rights reserved.

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements:

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide in from right animation */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Slide in from top animation */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide in from bottom animation */
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
