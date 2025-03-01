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
    const menuItemshref = document.querySelectorAll('.menu li a');
    const menuItems = document.querySelectorAll('.menu-dropdown li');
    //For theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    //For default theme
    let currentTheme = localStorage.getItem("theme") || "light";
    //For footer backup
    const footerTop = document.querySelector('.footer-backup');
    const footerToggle = document.querySelector('.footer-toggle');
    //For progressbar
    const progressbar = document.querySelectorAll('.progress');
    //For animation elements
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineContents = document.querySelectorAll('.timeline-contnet .content');
    const projectSection = document.querySelector('.Project');

    //For progressbar animation
    function progressbarAnimation(){
        progressbar.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }

    // Animation observer function
    function setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    if (entry.target.classList.contains('timeline-item')) {
                        const contents = entry.target.querySelectorAll('.content');
                        contents.forEach((content, index) => {
                            setTimeout(() => {
                                content.classList.add('visible');
                            }, 300 * index);
                        });
                    }
                }
            });
        }, options);

        // 為頁腳切換按鈕創建單獨的觀察器
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footerToggle.classList.add('visible');
                } else {
                    footerToggle.classList.remove('visible');
                }
            });
        }, {
            root: null,
            rootMargin: '100px 0px 0px 0px',
            threshold: 0.1
        });

        // Observe timeline items
        timelineItems.forEach(item => {
            observer.observe(item);
        });

        // Observe project section
        if (projectSection) {
            observer.observe(projectSection);
        }

        // 觀察頁腳元素
        const footer = document.querySelector('footer');
        if (footer) {
            footerObserver.observe(footer);
        }
    }

    // Call the setup function
    setupIntersectionObserver();
 
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
    menuItemshref.forEach(item => {
        item.addEventListener('click', function() {
            if(window.innerWidth >= 768){
                menuItemshref.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    //open menu
    selectedOption.addEventListener('click',()=>{
        if(window.innerWidth <= 768){
            menuSelect.classList.toggle('active');
        }
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                if(window.innerWidth <= 768){
                    menuSelect.classList.remove('active');
                }
            });
        });
    })
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }
    

    //moving screen action 1. active menuItems 2. in the middle of screen, change the text of selectedOption
    window.addEventListener('scroll', debounce(function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        // 檢查是否滾動到頁面底部
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // 當滾動到頁面底部附近時顯示頁腳切換按鈕
        if (documentHeight - scrollPosition < 300) {
            footerToggle.classList.add('visible');
        }
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 4) {
                current = section.getAttribute('id');
                menuItemshref.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href').substring(1) === current) {
                        if(window.innerWidth <= 768){
                            selectedOption.textContent = item.textContent;
                        }else{
                            item.classList.add('active');
                        }
                    }
                    if(item.getAttribute('href').substring(1) === 'timeline'){
                        progressbarAnimation();
                    }
                });
            
            }
        });
    }, 50));


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
