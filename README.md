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

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

CSS media queries are used to adjust layouts, font sizes, and spacing for different screen sizes.

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add more projects to the portfolio section
- Implement project filtering by category
- Add a blog section
- Improve accessibility features
- Add more interactive elements

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
