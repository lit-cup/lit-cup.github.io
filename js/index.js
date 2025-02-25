document.addEventListener('DOMContentLoaded', () => {
    const selected = document.querySelector('.language-option');
    const languageOptionItems = document.querySelector('.languageOption-items');
    const languageSelect = document.querySelector('.language-select');
    const menuSelect = document.querySelector('.nav-links');
    const selectedOption = document.querySelector(".about-me-selected-option");
    const dropdownItems = document.querySelectorAll(".menu-dropdown li")
    const menuItems = document.querySelectorAll('nav .menu li a');
    let currentLang = localStorage.getItem("language") || "zh";

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
    loadTranslations(currentLang);
    //導覽列底線
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

        });
    });

    //滑動螢幕的動作 1. 給section上底線 active 2. 中螢幕時替換導覽列文字
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
                });

            }
        });

    });

    selectedOption.addEventListener('click',()=>{
        menuSelect.classList.toggle('active');
    })


    
    //translate language
    selected.addEventListener('click', () => {
        languageSelect.classList.toggle('open');
    });
    
    languageOptionItems.addEventListener('click', (e) => {
        if (e.target.closest('div')) {
          const selectedItem = e.target.closest('div');
          const imgSrc = selectedItem.querySelector('img').src;
          let lang = selectedItem.getAttribute('data-lang');
          currentLang = lang;
          // 更新選中的內容
          selected.innerHTML = `<img src="${imgSrc}" alt="icon" loading="lazy">`;
    
          // 模擬語言切換邏輯
          //alert(`切換到語言：${text}`);
          languageSelect.classList.remove('open');
          loadTranslations(currentLang);
        }
    });
    //監聽選單項目點擊事件
    dropdownItems.forEach(item => {
        item.addEventListener("click", () => {
            const newValue = item.getAttribute("data-lang"); // 取得點擊的值
            selectedOption.textContent = newValue; // 更新固定顯示的選項
            menuSelect.classList.remove('active');
        });
    });
});

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