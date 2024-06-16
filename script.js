document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".dots-container");
    let currentSlide = 0;

    // Create dots
    slides.forEach((slide, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => showSlide(index));
        dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
        slides[currentSlide].classList.remove("active");
        dots[currentSlide].classList.remove("active");
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }

    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000); // Change slide every 3 seconds

    // Toggle menu on mobile
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namePattern = /^[a-zA-Z\s]+$/;
    const phonePattern = /^[0-9]+$/;

    if (!namePattern.test(name)) {
        alert("Name should not include numbers or special characters.");
        event.preventDefault();
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return false;
    }

    if (phone && !phonePattern.test(phone)) {
        alert("Phone number should include numbers only.");
        event.preventDefault();
        return false;
    }

    if (message.trim() === "") {
        alert("Message field should not be empty.");
        event.preventDefault();
        return false;
    }

    alert("Form submitted successfully!");
});

function showSignupForm() {
    document.querySelector('.container').classList.add('sign-up-mode');
}

function showSigninForm() {
    document.querySelector('.container').classList.remove('sign-up-mode');
}

const signUpForm = document.querySelector('#signup-form');

signUpForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // You can add form validation here if needed

    // Redirect to index.html
    window.location.href = 'index.html';
});