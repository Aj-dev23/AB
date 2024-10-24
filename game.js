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
ladybugImg.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsuperheroes.fandom.com%2Fwiki%2FLadybug&psig=AOvVaw3NK1wXTdz3hSWP5qxLg5Ba&ust=1729896926619000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJie46-OqIkDFQAAAAAdAAAAABAE'; // Vervang door de URL van de Ladybug afbeelding

const catNoirImg = new Image();
catNoirImg.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2FTekken%2Fcomments%2F1g9rb06%2Fleo_as_cat_noir%2F&psig=AOvVaw3Es0FTKbjW0YyOXu6HFoLo&ust=1729896993774000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMDbgNGOqIkDFQAAAAAdAAAAABAE'; // Vervang door de URL van de Cat Noir afbeelding

// Bewegingen voor Ladybug
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && ladybug.y > 0) {
        ladybug.y -= 20;
    }
    if (e.key === "ArrowDown" && ladybug.y < canvas.height - ladybug.height) {
        ladybug.y += 20;
    }
});

// Spel loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Teken Ladybug
    ctx.drawImage(ladybugImg, ladybug.x, ladybug.y, ladybug.width, ladybug.height);

    // Teken Cat Noir
    ctx.drawImage(catNoirImg, catNoir.x, catNoir.y, catNoir.width, catNoir.height);

    // Beweeg Cat Noir
    catNoir.x -= 5;
    if (catNoir.x < -catNoir.width) {
        catNoir.x = canvas.width;
        catNoir.y = Math.random() * (canvas.height - catNoir.height);
        score += 10; // Verhoog de score als je Cat Noir ontwijkt
    }

    // Check botsingen
    if (ladybug.x < catNoir.x + catNoir.width &&
        ladybug.x + ladybug.width > catNoir.x &&
        ladybug.y < catNoir.y + catNoir.height &&
        ladybug.y + ladybug.height > catNoir.y) {
        alert("Game Over! Your score: " + score);
        clearInterval(gameInterval);
    }
}

// Start het spel
document.getElementById("startGame").addEventListener("click", () => {
    score = 0;
    ladybug.y = 200;
    catNoir.x = 800;
    gameInterval = setInterval(gameLoop, 1000 / 60);
});
