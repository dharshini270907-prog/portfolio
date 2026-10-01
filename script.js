```javascript
// ========================================
// DHARSHINI C - PORTFOLIO JAVASCRIPT
// ========================================


// 1. Welcome Message
window.addEventListener("load", function () {

    console.log("Welcome to Dharshini's Portfolio!");

});


// 2. Typing Effect
const roles = [
    "B.Tech IT Student",
    "Tech Enthusiast",
    "AI Explorer",
    "Digital Marketing Aspirant"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const roleElement = document.querySelector(".hero h2");

function typingEffect() {

    if (!roleElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        roleElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);
            return;
        }

    } else {

        roleElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typingEffect, deleting ? 50 : 100);
}

typingEffect();


// 3. Current Year Automatically
const footer = document.querySelector("footer");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML = `
        <p>© ${year} Dharshini C</p>
        <p>Keep Learning • Keep Building • Keep Growing 🌱</p>
    `;
}


// 4. Scroll Animation
const cards = document.querySelectorAll(
    ".project-card, .skill, .info-card"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.2
    }
);


cards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});


// 5. Button Click Message
const contactButtons = document.querySelectorAll(
    'a[href="#contact"]'
);

contactButtons.forEach(function (button) {

    button.addEve
```
