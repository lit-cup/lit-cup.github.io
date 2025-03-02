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
- **Smart Header Navigation**: Header that shows when scrolling up and hides when scrolling down
- **Contact Information**: Easy access to my contact details

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

The website uses CSS variables for consistent theming across light and dark modes, including RGB variables for advanced styling like backdrop filters.

```css
:root {
  --color-primary: #ff5733;
  --color-background: #fdfbf8;
  --color-secondary: #f5f5f5;
  --color-text: #333333;
  --color-text-shadow: rgba(0, 0, 0, 0.3);
  /* RGB variables for backdrop filters and transparency */
  --color-background-rgb: 253, 251, 248;
  --color-primary-rgb: 255, 87, 51;
  --color-text-rgb: 51, 51, 51;
}

[data-theme="dark"] {
  --color-primary: #ff572d;
  --color-background: #0c0706;
  --color-secondary: #420606;
  --color-text: #f5f5f5;
  --color-text-shadow: rgba(255, 255, 255, 0.3);
  /* RGB variables for dark theme */
  --color-background-rgb: 12, 7, 6;
  --color-primary-rgb: 255, 87, 45;
  --color-text-rgb: 245, 245, 245;
}
```

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

### Smart Header Navigation

The website features a smart header that shows when scrolling up and hides when scrolling down, providing more screen space while browsing content.

```javascript
// Header scroll behavior
function handleHeaderScroll() {
  const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

  // Always show header at the top of the page
  if (currentScrollTop <= 10) {
    guideline.classList.remove("header-hidden");
    return;
  }

  // Show header when scrolling up, hide when scrolling down
  if (currentScrollTop < lastScrollTop) {
    guideline.classList.remove("header-hidden");
  } else if (currentScrollTop > lastScrollTop && currentScrollTop > 50) {
    guideline.classList.add("header-hidden");
  }

  lastScrollTop = currentScrollTop;
}
```

#### Header Animation Techniques

The header uses several animation techniques for smooth transitions:

```css
/* Base header styles */
.guideline {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: translateY(0);
  opacity: 1;
}

/* Hidden header state */
.guideline.header-hidden {
  transform: translateY(-100%);
  opacity: 0;
}
```

The header animations are optimized for performance:

1. **Transform Instead of Position**: Using `transform: translateY()` instead of changing `top` property for better performance
2. **Composite Properties**: Animating only `transform` and `opacity` which are GPU-accelerated
3. **Transition Timing**: Carefully tuned ease function for natural movement
4. **Debounced Scroll Events**: Preventing excessive calculations during rapid scrolling

#### Menu Animation Effects

The menu elements use various animation techniques:

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
- Smart header that shows/hides based on scroll direction

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

2. **Smart Header Navigation**:

   - Implemented scroll-based header visibility (shows when scrolling up, hides when scrolling down)
   - Added smooth transitions for header appearance/disappearance
   - Ensured header is always visible at the top of the page

3. **Responsive Design Overhaul**:

   - Completely rebuilt the responsive design structure
   - Improved organization of media queries for better maintainability
   - Enhanced mobile menu functionality
   - Optimized layouts for all screen sizes

4. **Technical Improvements**:

   - Added RGB color variables for advanced CSS effects like backdrop filters
   - Implemented debounce function for scroll events to improve performance
   - Enhanced JavaScript event handling for better cross-device compatibility
   - Improved CSS transitions for smoother animations

5. **Animation Enhancements**:
   - Added new keyframe animations for various UI elements
   - Implemented hardware-accelerated animations using transform3d
   - Created staggered animations for timeline content
   - Improved hover animations for interactive elements
   - Added subtle background animations for visual interest
   - Optimized animation performance with will-change property
   - Enhanced scroll-triggered animations with Intersection Observer
   - Implemented smooth transitions for theme switching

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
