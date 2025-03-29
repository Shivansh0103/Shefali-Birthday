let currentIndex = 0;

function getTotalWidth() {
    const images = document.querySelectorAll(".carousel img");
    let totalWidth = 0;
    images.forEach(img => totalWidth += img.offsetWidth + 10); // Include gap
    return totalWidth;
}

function getVisibleWidth() {
    return document.querySelector(".carousel").offsetWidth;
}

function showSlide(index) {
    const slides = document.querySelector(".carousel-images");
    const totalWidth = getTotalWidth();
    const visibleWidth = getVisibleWidth();

    const maxIndex = Math.ceil(totalWidth / visibleWidth) - 1;
    
    if (index > maxIndex) currentIndex = 0; // Loop back
    if (index < 0) currentIndex = maxIndex; // Loop to last

    slides.style.transform = `translateX(-${currentIndex * visibleWidth}px)`;
}

// Ensure the slides adjust when screen resizes
window.addEventListener("resize", () => showSlide(currentIndex));

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentIndex);
});


document.getElementById("surprise-btn").addEventListener("click", function () {
    const gallery = document.getElementById("gallery");
    const btn = document.getElementById("surprise-btn");

    // Toggle gallery visibility
    gallery.classList.toggle("hidden");

    if (!gallery.classList.contains("hidden")) {
        btn.textContent = "Back";
        launchConfetti();
        document.getElementById("sound-effect").play();
    } else {
        btn.textContent = "Click for a Surprise! 🎁";
    }
});

// Confetti logic
let confettiContainer; // Store reference to avoid multiple instances

function launchConfetti() {
    // If confetti is already present, remove it first
    if (confettiContainer) {
        confettiContainer.remove();
    }

    confettiContainer = document.createElement("div");
    confettiContainer.classList.add("confetti-container");
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confetti.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confetti);
    }

    // Stop confetti after 6s
    setTimeout(() => {
        confettiContainer.remove();
        confettiContainer = null;
    }, 6000);
}

// Random confetti colors
function getRandomColor() {
    const colors = ["#ff0000", "#ff9800", "#ffeb3b", "#4caf50", "#2196f3", "#9c27b0"];
    return colors[Math.floor(Math.random() * colors.length)];
}
