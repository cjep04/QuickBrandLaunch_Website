/*hamburger menu click action*/ 
const hamburger = document.getElementById("hamburger-menu");
            const menu = document.querySelector(".menu_items");
    
            hamburger.addEventListener("click", () => {
                menu.classList.toggle("active");
            });


/*Links remain with stroke underneath when active*/
const links = document.querySelectorAll('.menu_items ul li a');

            // Get the current page's path (without domain)
            const currentPath = window.location.pathname;
            
            // Loop through all the links and add the 'active' class to the one that matches the current page
            links.forEach(link => {
                // Get the href's path (relative path, ignoring the domain)
                const linkPath = new URL(link.href).pathname;
            
                // Check if the link's path matches the current path
                if (linkPath === currentPath || currentPath.startsWith(linkPath)) {
                    link.classList.add('active');
                }
            });