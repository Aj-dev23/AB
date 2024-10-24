// Haal het canvas-element op
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Stel canvas dimensies in
canvas.width = 800;
canvas.height = 400;

// Spelvariabelen
let ladybug = { x: 50, y: 200, width: 50, height: 50 };
let catNoir = { x: 800, y: Math.random() * 350, width: 50, height: 50 };
let score = 0;
let gameInterval;

// Afbeeldingen laden
const ladybugImg = new Image();
ladybugImg.src = ''; // Vervang dit door de juiste URL

const catNoirImg = new Image();
catNoirImg.src = ''; // Vervang dit door de juiste URL

// Wacht tot beide afbeeldingen zijn geladen voordat je het spel start
let imagesLoaded = 0;

ladybugImg.onload = () => {
    imagesLoaded++;
    startGameIfReady();
};

catNoirImg.onload = () => {
    imagesLoaded++;
    startGameIfReady();
};

function startGameIfReady() {
    if (imagesLoaded === 2) {
        document.getElementById("startGame").addEventListener("click", () => {
            score = 0;
            ladybug.y = 200;
            catNoir.x = 800;
            gameInterval = setInterval(gameLoop, 1000 / 60);
        });
    }
}

// Bewegingen voor Ladybug
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && ladybug.y > 0) {
        ladybug.y -= 20;
    }
    if (e.key === "ArrowDown" && ladybug.y < canvas.height - ladybug.height) {
        ladybug.y += 20;
    }
});
