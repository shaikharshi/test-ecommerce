// activenav

const currentPath = window.location.pathname;

// Get all the navigation links
const navLinks = document.querySelectorAll('.ecomm-navbar__links a');

// Loop through each link and check if the href matches the current path
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active'); // Add the 'active' class to the matching link
    }
});


// navbar

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}





// accrodian
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        var isActive = this.classList.contains("active");

        // Close all accordions first
        for (var j = 0; j < acc.length; j++) {
            acc[j].classList.remove("active");
            acc[j].nextElementSibling.style.display = "none";
            acc[j].querySelector("svg").style.transform = "rotate(0deg)";
        }

        if (!isActive) {
            // Open the clicked accordion
            this.classList.add("active");
            panel.style.display = "block";
            this.querySelector("svg").style.transform = "rotate(90deg)";
            this.querySelector("svg").style.transition = "0.3s ease-in-out";
        }
    });
}



// auto increment
const counters = document.querySelectorAll(".carts-craft-why-us__grid-content .stat span");
const container = document.querySelector(".carts-craft-why-us__grid");
let activated = false;

function startCounter(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !activated) {
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.target);
                let count = 0;

                function updateCount() {
                    const increment = target / 100;
                    count += increment;
                    counter.innerHTML = Math.ceil(count);

                    if (count < target) {
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.innerHTML = target;
                        activated = true;
                        observer.disconnect(); // Stop observing after one count
                    }
                }
                updateCount();
            });
        }
    });
}

if (container && !activated) {
    const observer = new IntersectionObserver(startCounter, { threshold: 0.5 });
    observer.observe(container);
}

// contact valication
function validateName() {
    var nameInput = document.getElementById('name');
    var nameError = document.getElementById('nameError');
    var name = nameInput.value;

    nameInput.classList.remove('error-border');
    nameError.innerHTML = "";

    if (!/^[a-zA-Z\s]+$/.test(name)) {
        nameInput.classList.add('error-border');
        nameError.innerHTML = "Please enter a valid name";
    }
}

function validateEmail() {
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var email = emailInput.value;

    emailInput.classList.remove('error-border');
    emailError.innerHTML = "";

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailInput.classList.add('error-border');
        emailError.innerHTML = "Please enter a valid email address";
    }
}
function validatePhone() {
    var phoneInput = document.getElementById('phone');
    var phoneError = document.getElementById('phoneError');
    var phone = phoneInput.value;

    phoneInput.classList.remove('error-border');
    phoneError.innerHTML = "";

    if (!/^[0-9+]{7,15}$/.test(phone)) {
        phoneInput.classList.add('error-border');
        phoneError.innerHTML = "Please enter a valid phone number (7 to 15 digits)";
    }
}


function validateMessage() {
    var messageInput = document.getElementById('textarea');
    var messageError = document.getElementById('messageError');
    var message = messageInput.value;

    messageInput.classList.remove('error-border');
    messageError.innerHTML = "";

    if (message.trim() === "") {
        messageInput.classList.add('error-border');
        messageError.innerHTML = "Please enter a message";
    }
}

function validateFile() {
    var fileInput = document.getElementById('file');
    var fileError = document.getElementById('fileError');
    var file = fileInput.files[0];

    fileError.innerHTML = "";

    if (!file) {
        fileError.innerHTML = "Please select a file";
        fileInput.classList.add('error-border');
        return false;
    }

    var fileType = file.type;

    if (fileType === 'application/pdf' || fileType === 'application/msword' || fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        fileError.innerHTML = "";
        fileInput.classList.remove('error-border');
        return true;
    } else {
        fileError.innerHTML = "Please select a PDF, DOC, or DOCX file";
        fileInput.classList.add('error-border');
        return false;
    }
}

function validateForm() {
    validateName();
    validateEmail();
    validatePhone();
    validateMessage();

    if (!validateFile()) {
        return false;
    }

    return true;
}

// contact valicationend


// placeholder

