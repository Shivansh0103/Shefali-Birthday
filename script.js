let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector(".carousel-images");
    const totalSlides = document.querySelectorAll(".carousel img").length - 11;

    if (index >= totalSlides) currentIndex = 0;
    if (index < 0) currentIndex = totalSlides - 1;

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Ensure prev and next buttons remain visible
    document.querySelector(".prev").style.display = "block";
    document.querySelector(".next").style.display = "block";
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

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
function launchConfetti() {
    const confettiContainer = document.createElement("div");
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
    }, 6000);
}

// Random confetti colors
function getRandomColor() {
    const colors = ["#ff0000", "#ff9800", "#ffeb3b", "#4caf50", "#2196f3", "#9c27b0"];
    return colors[Math.floor(Math.random() * colors.length)];
}
