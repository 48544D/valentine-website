(() => {
  // DOM references
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');
  const imageDisplay = document.getElementById('imageDisplay');
  const valentineQuestion = document.getElementById('valentineQuestion');
  const responseButtons = document.getElementById('responseButtons');

  // Configuration
  const GROWTH_PER_CLICK = 35;
  const FONT_GROWTH_PER_CLICK = 25;

  const IMAGE_PATHS = [
    './images/image1.gif',
    './images/image2.gif',
    './images/image3.png',
    './images/image4.gif',
    './images/image5.gif',
    './images/image6.png',
    './images/image7.png',
  ];

  const FINAL_IMAGE_PATH = './images/final_image.gif';

  const NO_BUTTON_MESSAGES = [
    'No',
    'Seriously?',
    "Cmon you can't be serious rn",
    "You just kidding ain't you?",
    "Ayayay maybe you not",
    "This your last chance fr",
    "Just click the damn yes pls😭",
  ];

  // State
  let noClickCount = 0;
  let buttonHeight = 48;
  let buttonWidth = 80;
  let fontSize = 20;

  noButton.addEventListener('click', () => {
    noClickCount++;

    // Update image and alt text only if we haven't reached the end
    if (noClickCount < IMAGE_PATHS.length) {
      imageDisplay.src = IMAGE_PATHS[noClickCount];
    }

    // Grow the "Yes" button to make it harder to ignore (always happens)
    buttonHeight += GROWTH_PER_CLICK;
    buttonWidth += GROWTH_PER_CLICK;
    fontSize += FONT_GROWTH_PER_CLICK;

    yesButton.style.height = `${buttonHeight}px`;
    yesButton.style.width = `${buttonWidth}px`;
    yesButton.style.fontSize = `${fontSize}px`;

    // Update "No" button text with increasingly desperate messages
    // Use the last message if we've run out
    const messageIndex = Math.min(noClickCount, NO_BUTTON_MESSAGES.length - 1);
    noButton.textContent = NO_BUTTON_MESSAGES[messageIndex];
  });

  yesButton.addEventListener('click', () => {
    imageDisplay.src = FINAL_IMAGE_PATH;
    valentineQuestion.textContent = 'I know you would say yes 😍';
    responseButtons.style.display = 'none';

    // Heart-shaped confetti for a valentine theme
    const heart = confetti.shapeFromPath({
      path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
    });

    const defaults = { spread: 360, ticks: 100, gravity: 0, decay: 0.94, startVelocity: 20, shapes: [heart], colors: ['#ff69b4', '#ff1493', '#ff6b81', '#e84393'] };

    confetti({ ...defaults, particleCount: 50, scalar: 2 });
    confetti({ ...defaults, particleCount: 25, scalar: 3 });
    confetti({ ...defaults, particleCount: 10, scalar: 4 });

    // Create and show the "Read Letter" button after a delay
    setTimeout(() => {
      const letterButton = document.createElement('button');
      letterButton.textContent = 'I got something for you here btw 🥰';
      letterButton.className = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-xl font-medium cursor-pointer px-6 py-3 bg-[#bd1e59] text-white transition-all duration-300 ease-in-out hover:bg-[#960f46] hover:scale-105 mt-6';
      letterButton.onclick = () => window.location.href = 'letter.html';

      responseButtons.parentElement.appendChild(letterButton);
    }, 2000);
  });
})();
