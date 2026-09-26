const greeting = document.getElementById("greeting");
const message = document.getElementById("message");
const timeElement = document.getElementById("time");

const bgOne = document.querySelector(".bg-one");
const bgTwo = document.querySelector(".bg-two");

const celestial = document.querySelector(".celestial");
const stars = document.querySelector(".stars");
const clouds = document.querySelectorAll(".cloud");


// ======================================
// BACKGROUND SYSTEM
// ======================================

let activeBackground = 1;

let currentScene = "";


// ======================================
// UPDATE WEBSITE
// ======================================

function updateWebsite() {

    const now = new Date();

    const hour = now.getHours();

    const minute = now.getMinutes();

    const second = now.getSeconds();


    // ==================================
    // DIGITAL CLOCK
    // ==================================

    const hours =
        String(hour).padStart(2, "0");

    const minutes =
        String(minute).padStart(2, "0");

    const seconds =
        String(second).padStart(2, "0");


    timeElement.textContent =
        `${hours}:${minutes}:${seconds}`;


    // ==================================
    // DETERMINE SCENE
    // ==================================

    let scene;

    if (hour >= 5 && hour < 12) {

        scene = "morning";

    } else if (hour >= 12 && hour < 18) {

        scene = "afternoon";

    } else if (hour >= 18 && hour < 22) {

        scene = "evening";

    } else {

        scene = "night";

    }


    // ==================================
    // ONLY CHANGE BACKGROUND
    // WHEN SCENE CHANGES
    // ==================================

    if (scene !== currentScene) {

        changeScene(scene);

        currentScene = scene;
    }
}


// ======================================
// CHANGE SCENE
// ======================================

function changeScene(scene) {

    let image;
    let title;
    let text;


    // ==================================
    // MORNING
    // ==================================

    if (scene === "morning") {

        image = "images/morning.jpg";

        title = "🌅 Good Morning, Farrel.";

        text = "Hope you have a great day.";


        // Sun

        celestial.style.opacity = "1";

        celestial.style.background =
            "#ffd166";

        celestial.style.boxShadow =
            "0 0 70px rgba(255, 209, 102, 0.8)";


        // Clouds

        clouds.forEach(cloud => {

            cloud.style.opacity = "0.8";

        });


        // Stars

        stars.style.opacity = "0";

    }


    // ==================================
    // AFTERNOON
    // ==================================

    else if (scene === "afternoon") {

        image = "images/afternoon.jpg";

        title = "☀️ Good Afternoon, Farrel.";

        text = "Keep going. You're doing great.";


        // Sun

        celestial.style.opacity = "1";

        celestial.style.background =
            "#fff4b3";

        celestial.style.boxShadow =
            "0 0 90px rgba(255, 244, 179, 0.9)";


        // Clouds

        clouds.forEach(cloud => {

            cloud.style.opacity = "0.65";

        });


        // Stars

        stars.style.opacity = "0";

    }


    // ==================================
    // EVENING
    // ==================================

    else if (scene === "evening") {

        image = "images/evening.jpg";

        title = "🌇 Good Evening, Farrel.";

        text = "Time to slow things down.";


        // Sun mulai hilang

        celestial.style.opacity = "0.5";

        celestial.style.background =
            "#ffb703";

        celestial.style.boxShadow =
            "0 0 60px rgba(255, 183, 3, 0.7)";


        // Clouds

        clouds.forEach(cloud => {

            cloud.style.opacity = "0.35";

        });


        // Stars mulai muncul

        stars.style.opacity = "0.25";

    }


    // ==================================
    // NIGHT
    // ==================================

    else {

        image = "images/night.jpg";

        title = "🌙 Good Night, Farrel.";

        text = "You should probably sleep.";


        // Moon

        celestial.style.opacity = "1";

        celestial.style.background =
            "#f5f3ce";

        celestial.style.boxShadow =
            "0 0 50px rgba(245, 243, 206, 0.6)";


        // Clouds

        clouds.forEach(cloud => {

            cloud.style.opacity = "0.08";

        });


        // Stars

        stars.style.opacity = "1";
    }


    // ==================================
    // CHANGE TEXT
    // ==================================

    greeting.textContent = title;

    message.textContent = text;


    // ==================================
    // CROSSFADE BACKGROUND
    // ==================================

    if (activeBackground === 1) {

        bgTwo.style.backgroundImage =
            `url("${image}")`;

        bgTwo.style.opacity = "1";

        bgOne.style.opacity = "0";

        activeBackground = 2;

    } else {

        bgOne.style.backgroundImage =
            `url("${image}")`;

        bgOne.style.opacity = "1";

        bgTwo.style.opacity = "0";

        activeBackground = 1;
    }
}


// ======================================
// START
// ======================================

updateWebsite();


// ======================================
// CHECK EVERY SECOND
// ======================================

setInterval(updateWebsite, 1000);