// (() => {
//   const envelope = document.getElementById('envelope');
//   const letter = document.getElementById('letter');
//   const backButton = document.getElementById('backButton');

//   let isOpened = false;

//   envelope.addEventListener('click', () => {
//     if (!isOpened) {
//       isOpened = true;
//       envelope.classList.add('opened');

//       // Reveal the letter after a short delay
//       setTimeout(() => {
//         letter.classList.add('revealed');

//         // Show back button after letter is fully revealed
//         setTimeout(() => {
//           backButton.classList.remove('hidden');
//           backButton.classList.add('visible');
//         }, 1200);
//       }, 400);
//     }
//   });

//   backButton.addEventListener('click', () => {
//     window.location.href = 'index.html';
//   });
// })();

const envelope = document.querySelector('.envelope-wrapper');

// Function to toggle the class 'flap' when the envelope is clicked
envelope.addEventListener('click', () => {
  envelope.classList.toggle('flap');
});