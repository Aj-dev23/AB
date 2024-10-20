// Arrays met quotes en liefdeswoorden
const quotes = [
    "You're my dream come true. 💕",
    "Every moment with you is magical. 🌟",
    "I love you more than words can say. 💖",
    "You're my forever and always. ❤️",
    "Your smile brightens up my day. 😊",
    "You're my sunshine on a cloudy day. ☀️",
    "With you, every moment is a fairytale. 🌟",
    "You make my heart smile like no one else. 😊",
    "To me, you are perfect. 💕",
    "I’m so grateful to have you in my life. 💫",
    "You light up my life in every way. 🔥",
];

const loveWords = [
    "Beautiful 🌸",
    "Inspiring ✨",
    "Strong 💪",
    "Adorable 💕",
    "My Everything 💕",
    "My Happiness 🌈",
    "Amazing 💓",
    "Luminous 💫",
    "Magical ✨",
    "Cherished ❤️",
    "Kind 🌼",
    "Sweet 🥰",
    "Precious 💫",
    "Perfect 💖",
    "Stubborn🥰",
];

// Elementen ophalen
const displayText = document.getElementById('display-text');
const showQuotesButton = document.getElementById('show-quotes');
const showWordsButton = document.getElementById('show-words');

// Event listener voor de quotes-knop
showQuotesButton.addEventListener('click', function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    displayText.textContent = randomQuote;
});

// Event listener voor de liefdeswoorden-knop
showWordsButton.addEventListener('click', function() {
    const randomWord = loveWords[Math.floor(Math.random() * loveWords.length)];
    displayText.textContent = randomWord;
});

// Achtergrondmuziek afspelen na klik op de pagina
document.addEventListener('click', function() {
    const audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play().catch(error => {
            console.log("Autoplay blocked. Music will play on user interaction.");
        });
    }
});