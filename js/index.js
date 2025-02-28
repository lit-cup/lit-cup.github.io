document.addEventListener('DOMContentLoaded', () => {
    //For language option
    const selected = document.querySelector('.language-option');
    const languageOptionItems = document.querySelector('.languageOption-items');
    const languageSelect = document.querySelector('.language-select');
    const menuSelect = document.querySelector('.nav-links');
    //For default language 
    let currentLang = localStorage.getItem("language") || "en";
    //For menu
    const selectedOption = document.querySelector(".about-me-selected-option");
    const menuItems = document.querySelectorAll('nav .menu li a');
    //For theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    //For default theme
    let currentTheme = localStorage.getItem("theme") || "light";
    //For footer backup
    const footerTop = document.querySelector('.footer-backup');
    //For progressbar
    const progressbar = document.querySelectorAll('.progress');

    //For progressbar animation
    progressbarAnimation();
    //For progressbar
    function progressbarAnimation(){
        progressbar.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }

 
    // Apply saved theme
    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        if (currentTheme === "light") {
            document.documentElement.setAttribute("data-theme", "dark");
            currentTheme = "dark";
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            currentTheme = "light";
        }
        localStorage.setItem("theme", currentTheme);
    });

    //footer-backup action
    footerTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    loadTranslations(currentLang);

    //menu-line
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

        });
    });
    //open menu
    selectedOption.addEventListener('click',()=>{
        menuSelect.classList.toggle('active');
    })

    //moving screen action 1. active menuItems 2. in the middle of screen, change the text of selectedOption
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 4) {
                current = section.getAttribute('id');
                menuItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href').substring(1) === current) {
                        item.classList.add('active');
                        selectedOption.textContent = item.textContent;
                        menuSelect.classList.remove('active');
                    }
                    item.addEventListener("click", () => {
                        item.classList.remove('active');
                        selectedOption.textContent = item.textContent;
                    });
                });

            }
        });

    });

    //For translation
    async function loadTranslations(lang) {
        try {
            const response = await fetch("./js/language.json");
            const translateions = await response.json();
            
            document.querySelectorAll("[data-lang]").forEach((element)=>{
                const key = element.getAttribute("data-lang");
                if(translateions[lang][key]){

                    element.innerHTML = translateions[lang][key];

                    element.style.display = "none";
                    element.offsetHeight; 
                    element.style.display = "";
                }
            });
            localStorage.setItem("language", lang);
        } catch (error) {
            console.error("Error Translations", error)
        }
    }
    //open translate language
    selected.addEventListener('click', () => {
        languageSelect.classList.toggle('open');
    });
    
    languageOptionItems.addEventListener('click', (e) => {
        if (e.target.closest('div')) {
          const selectedItem = e.target.closest('div');
          const imgSrc = selectedItem.querySelector('img').src;
          let lang = selectedItem.getAttribute('data-lang');
          currentLang = lang;
          // tranform img src of language option
          selected.innerHTML = `<img src="${imgSrc}" alt="icon" loading="lazy">`;
          // close language option
          languageSelect.classList.remove('open');
          // load translations
          loadTranslations(currentLang);
        }
    });
});

//close language option and menu when click outside
document.addEventListener("click", function (event) {
    const selected = document.querySelector('.language-option');
    const languageOptionItems = document.querySelector('.languageOption-items');
    const languageSelect = document.querySelector('.language-select');
    const menuSelect = document.querySelector('.nav-links');
    const selectedOption = document.querySelector(".about-me-selected-option");
    const dropdownItems = document.querySelectorAll(".menu-dropdown li")

    if (!selected.contains(event.target) && !languageOptionItems.contains(event.target)) {
        languageSelect.classList.remove("open");
    }
    if (!selectedOption.contains(event.target) && !Array.from(dropdownItems).some(item => item.contains(event.target))) {
        menuSelect.classList.remove("active");
    }
});