const rewards = [
    "5% Off Your Next Order",
    "Free Item",
    "Hard Luck",
    "10% Off Your Next Order",
    "Hard Luck",
    "5% Off Your Next Order",
    "Hard Luck",
    "$3 Off Your Favorite Product",
    "5% Off Your Next Order"
];

let cardDrawn = false;

// Function to shuffle the rewards array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function drawCard(cardIndex) {
    if (cardDrawn) {
        alert("You have already drawn a card!");
        return;
    }

    const resultDiv = document.getElementById("result");
    const retryButton = document.getElementById("retry");
    const cards = document.querySelectorAll('.card');

    if (rewards[cardIndex] === "Hard Luck") {
        resultDiv.innerText = "Hard Luck";
        resultDiv.style.color = "red";
    } else {
        resultDiv.innerText = `Congratulations! You won: ${rewards[cardIndex]}`;
        resultDiv.style.color = "green";
    }

    // Reveal the reward on the card
    const card = cards[cardIndex];
    card.classList.add('flip');
    card.innerHTML = `<div class="card-content card-front">${rewards[cardIndex]}</div>`;

    // Fade all cards
    cards.forEach(c => {
        if (c !== card) {
            c.classList.add('faded');
        }
    });

    cardDrawn = true;

    // Show retry button
    retryButton.style.display = 'block';
}

function retry() {
    cardDrawn = false;
    const resultDiv = document.getElementById("result");
    resultDiv.innerText = '';

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('flip');
        card.classList.remove('faded');
        card.innerHTML = '';
        card.style.backgroundImage = 'url("images/card-back.jpeg")'; // Ensure the card back image is shown again
    });

    const retryButton = document.getElementById("retry");
    retryButton.style.display = 'none';

    // Shuffle the rewards array
    shuffle(rewards);
}
