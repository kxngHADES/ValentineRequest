const noResponses = [
  "Nice try, but that's not an option! 😊",
  "Sorry, your rejection has been rejected! 💝",
  "Error 404: Rejection not found! 😉",
  "Still waiting for that 'Yes'! 🎵",
  "Nope, can't let you say no! 🚫",
  "Your rejection powers have no effect! ✨",
  "That's a funny way to spell 'Yes'! 😄",
  "Hmm... let me pretend I didn't see that! 👀",
  "My website, my rules - only happiness allowed! 🌈",
  "Rejection machine broke, try 'Yes' instead! 🎮",
  "Plot twist: The 'No' button is just decoration! 🎭",
  "Loading rejection... Just kidding! 🔄",
  "The power of love compels you to say yes! 💫",
  "Calculating alternative responses... None found! 🤖",
  "Your rejection has been sent to spam! �spam",
];

let noCount = 0;
const maxNoResponses = noResponses.length;
let isFirstClick = true;

document.getElementById('yesBtn').addEventListener('click', handleYes);
document.getElementById('noBtn').addEventListener('click', handleNo);
document.getElementById('noBtn').addEventListener('mouseover', moveButton);

function handleYes() {
  const successMessage = document.getElementById('success-message');
  const noBtn = document.getElementById('noBtn');
  const questionText = document.getElementById('question-text');
  
  // Add fade out effect to No button
  noBtn.classList.add('fade-out');
  
  // Show success message and update question text
  successMessage.classList.remove('hidden');
  questionText.textContent = "I knew you'd say 💖";
  
  // Start the heart animation
  createHearts();
  
  // Remove the no button from DOM after animation
  setTimeout(() => {
      noBtn.remove();
  }, 500);
}

function handleNo() {
  const noBtn = document.getElementById('noBtn');
  const questionText = document.getElementById('question-text');
  
  questionText.textContent = noResponses[noCount % maxNoResponses];
  questionText.classList.add('shake');
  
  // Remove shake animation class after it completes
  setTimeout(() => {
      questionText.classList.remove('shake');
  }, 500);
  
  if (isFirstClick) {
      noBtn.classList.add('moving');
      isFirstClick = false;
  }
  
  moveButton();
  noCount++;
}

function moveButton() {
  const noBtn = document.getElementById('noBtn');
  const container = document.querySelector('#question-container');
  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;
  
  // Get container dimensions
  const maxX = container.offsetWidth - buttonWidth;
  const maxY = container.offsetHeight - buttonHeight;
  
  // Generate random position within container
  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;
  
  // Apply new position with smooth transition
  noBtn.style.transform = `translate(${newX - buttonWidth/2}px, ${newY - buttonHeight/2}px)`;
}

function createHearts() {
  const heartsContainer = document.querySelector('.hearts-container');
  const heartSymbols = ['❤️', '💖', '💝', '💕', '💗'];
  
  setInterval(() => {
      const heart = document.createElement('span');
      heart.className = 'heart';
      heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
      heartsContainer.appendChild(heart);
      
      // Remove heart after animation
      setTimeout(() => {
          heart.remove();
      }, 5000);
  }, 300);
}

