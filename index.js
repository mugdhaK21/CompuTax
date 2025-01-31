document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('.navbar a');

    // Add a click event listener to each link
    navbarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor click behavior

            navbarLinks.forEach(link => link.classList.remove('active'));

            link.classList.add('active');

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    });
});

document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        accordionItem.classList.toggle('active');
    });
});

let currentIndex = 0;
const slides = document.querySelectorAll(".clients-box");
const totalSlides = slides.length;

function updateSlider() {
    const sliderContainer = document.querySelector(".clients-content");
    const offset = currentIndex * -100;
    sliderContainer.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateSlider();
}

function nextSlide() {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateSlider();
}

function whatsapp() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;   
    var message = document.getElementById("message").value;
    var url = "https://wa.me/919822112680?text=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMobile: " + mobile + "\nMessage: " + message);

    window.open(url, "_blank").focus();
}