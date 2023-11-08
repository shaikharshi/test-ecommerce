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
const counts = document.querySelectorAll('.count');

counts.forEach(count => {
    const updateCount = () => {
        const target = +count.getAttribute('data-target');
        const countValue = +count.innerText;
        const increment = target / 100;

        if (countValue < target) {
            count.innerText = Math.ceil(countValue + increment);
            setTimeout(updateCount, 10);
        } else {
            count.innerText = target;
        }
    };

    updateCount();
});
