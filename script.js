let swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});

const hamburger = document.getElementById('hamburger')
const close = document.getElementById('close')
const nav = document.getElementById('nav-mobile')
const container = document.querySelector('.container')

hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none';
    close.style.display = 'block';
    nav.classList.add('nav-mobile')
    container.classList.add('container-mobile')
})

close.addEventListener('click', () => {
    close.style.display = 'none';
    hamburger.style.display = 'block';
    nav.classList.remove('nav-mobile')
    container.classList.remove('container-mobile')
})

window.addEventListener('resize', () =>{
    close.style.display = 'none';
    nav.classList.remove('nav-mobile')
    container.classList.remove('container-mobile')
    if(window.innerWidth > 1024) {
        hamburger.style.display = 'none'
    } else {
        hamburger.style.display = 'block'
    }
})
