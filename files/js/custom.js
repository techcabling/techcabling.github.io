let currentIndex = 0;
const images = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('lightbox');
const modalImg = document.getElementById('lightbox-img');


images.forEach((img, index) => {
    img.addEventListener('click', function () {
        currentIndex = index;
        showImage();
    });
});

function showImage() {
    modal.style.display = 'flex';
    modalImg.src = images[currentIndex].src;
}


function closeModal() {
    modal.style.display = 'none';
}


function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    showImage();
}

function openTab(event, tabName) {
    let tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.style.display = 'none');
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab').click();
});

// testimonials slider
var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        }
    }
});