document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.querySelector('.language-select');
    const menuSelect = document.querySelector('.nav-links');
    const selectedOption = document.querySelector(".about-me-selected-option");
    const dropdownItems = document.querySelectorAll(".menu-dropdown li")
    const selected = document.querySelector('.language-option');
    const languageOptionItems = document.querySelector('.languageOption-items');
    const menuItems = document.querySelectorAll('nav .menu li a');
    
    
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
        let selectedOptionValue = '';
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 4) {
                current = section.getAttribute('id');
                selectedOptionValue = section.getAttribute("data-value");
            }
        });

        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
                selectedOption.textContent = selectedOptionValue;
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
          const lang = selectedItem.getAttribute('data-lang');
    
          // 更新選中的內容
          selected.innerHTML = `<img src="${imgSrc}" alt="icon">`;
    
          // 模擬語言切換邏輯
          //alert(`切換到語言：${text}`);
          languageSelect.classList.remove('open');
        }
    });

    // 監聽選單項目點擊事件
    dropdownItems.forEach(item => {
    item.addEventListener("click", () => {
        const newValue = item.getAttribute("data-value"); // 取得點擊的值
        selectedOption.textContent = newValue; // 更新固定顯示的選項
        menuSelect.classList.remove('active');
    });
});
    
});
