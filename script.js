    //navbar scrolled fucn
    
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").classList.add("scrolled");
    } else {
        document.getElementById("navbar").classList.remove("scrolled");
    }
    }

        // const toggleBtn = document.getElementById("theme-toggle");

        // toggleBtn.addEventListener("click", () => {
        //     document.body.classList.toggle("dark");

        //     toggleBtn.textContent =
        //     document.body.classList.contains("dark") ? "☀️" : "🌙";
        // });




    // const toggleBtn = document.getElementById("theme-toggle");
    // const icon = document.getElementById("theme-icon");

    // toggleBtn.addEventListener("click", () => {
    //     document.body.classList.toggle("dark");

    //     if (document.body.classList.contains("dark")) {
    //     icon.src = "icons/sun.png";
    //     icon.alt = "Light mode";
    //     } else {
    //     icon.src = "icons/moon.png";
    //     icon.alt = "Dark mode";
    //     }
    // });


//dark mode
    let isDarkMode = false;

function switchTheme() {
    const body = document.body;
    const themeName = document.getElementById('theme-name');
    const toggleButton = document.querySelector('.toggle-button');

    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        body.classList.add('dark-mode');
        toggleButton.classList.add('active');
        themeName.textContent = 'Dark';
    } else {
        body.classList.remove('dark-mode');
        toggleButton.classList.remove('active');
        themeName.textContent = 'Light';
    }
}

//navbar background change on scroll
window.addEventListener("scroll", () => {
    document.querySelector(".navbar")
        .classList.toggle("scrolled", window.scrollY > 20);
});



// //sections reveal on scroll
// const reveals = document.querySelectorAll(".reveal");

// window.addEventListener("scroll", () => {
//     reveals.forEach(el => {
//         if (el.getBoundingClientRect().top < window.innerHeight - 100) {
//             el.classList.add("active");
//         }
//     });
// });
