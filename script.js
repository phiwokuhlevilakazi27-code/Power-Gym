const menuButton = document.querySelector(".menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("active");
});

const links = document.querySelectorAll("nav a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        navigation.classList.remove("active");
    });
});

emailjs.init("8GevaUtcn_Z6O3tgu");

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    emailjs.sendForm("service_p2scusq", "template_zqhj66o", form)
        .then(function() {
            message.textContent =
                "Thank you, " + name + "! Your enquiry has been received.";
            form.reset();
        }, function(error) {
            message.textContent =
                "Something went wrong. Please try again.";
        });
});
