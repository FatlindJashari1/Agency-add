document.addEventListener('DOMContentLoaded', () => {
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
const icon = menuToggle.querySelector('i');
icon.classList.toggle('fa-bars');
icon.classList.toggle('fa-times');
});

navLinks.querySelectorAll('a').forEach(link => {
link.addEventListener('click', () => {
if (window.innerWidth <= 768) {
navLinks.classList.remove('active');
menuToggle.querySelector('i').classList.remove('fa-times');
menuToggle.querySelector('i').classList.add('fa-bars');
}
});
});

contactForm.addEventListener('submit', (e) => {
e.preventDefault();

// In a real application, you'd send data to a server here.

formMessage.textContent = 'Thank you for your message! We will be in touch soon.';
formMessage.style.color = 'green';
contactForm.reset();

setTimeout(() => {
formMessage.textContent = '';
}, 5000);
});
});
