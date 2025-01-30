/*hamburger menu click action*/ 
const hamburger = document.getElementById("hamburger-menu");
            const menu = document.querySelector(".menu_items");
    
            hamburger.addEventListener("click", () => {
                menu.classList.toggle("active");
            });