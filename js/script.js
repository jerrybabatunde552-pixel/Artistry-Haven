const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navList.classList.remove('active');
        menuToggle.classList.remove('active');

    }
});


// Navigation background scroll 
window.addEventListener('scroll', ()=>{
    const navbar = document.querySelector('header');

    if (window.scrollY > 0) {
        navbar.classList.add('scroll-bar');
    } else {
        navbar.classList.remove('scroll-bar');
    }
}

);
