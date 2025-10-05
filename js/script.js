const video = document.getElementById("heroVideo");
const toggleBtn = document.getElementById("videoToggle");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        icon.classList.replace("fa-play", "fa-pause");
    } else {
        video.pause();
        icon.classList.replace("fa-pause", "fa-play");
    }
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
    }

    question.addEventListener("click", () => {
        faqItems.forEach((i) => {
            if (i !== item) {
                i.classList.remove("active");
                i.querySelector(".faq-answer").style.maxHeight = null;
            }
        });

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});


// Select button and target
const scrollBtn = document.querySelector(".scroll-down-btn");
const targetSection = document.querySelector(".course-container");

scrollBtn.addEventListener("click", () => {
    targetSection.scrollIntoView({
        behavior: "smooth", // smooth scrolling
        block: "start", // scrolls to the top of the section
    });
});
