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
// Function to start the counting animation
function startCountAnimation() {
    const counts = document.querySelectorAll('.count');
    counts.forEach(count => {
        const target = +count.getAttribute('data-target');
        const increment = target / 100;
        let countValue = 0;

        const updateCount = () => {
            if (countValue < target) {
                countValue += increment;
                count.innerText = Math.ceil(countValue);
                requestAnimationFrame(updateCount);
            } else {
                count.innerText = target;
            }
        };

        updateCount();
    });
}

// Set up the Intersection Observer
const section = document.querySelector('.carts-craft-why-us__grid');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // The section is in view, start counting animation
            startCountAnimation();
            observer.unobserve(section); // Stop observing once started
        }
    });
});

// Start observing the section
observer.observe(section);
