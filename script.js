document.addEventListener('DOMContentLoaded', () => {
  const yesBtn   = document.getElementById('yesBtn');
  const noBtn    = document.getElementById('noBtn');
  const overlay  = document.getElementById('overlay');
  const oImg     = document.getElementById('overlayImg');

  /* === YES button === */
  yesBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';      // show full-screen image
    // You can swap the image dynamically:
    // oImg.src = 'my-funny-picture.png';
  });

  /* click anywhere to close the overlay */
  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  /* === NO button prank === */
  const margin = 20;   // keeps button fully on-screen

  function moveButton() {
    const w = window.innerWidth  - noBtn.offsetWidth  - margin;
    const h = window.innerHeight - noBtn.offsetHeight - margin;

    const x = Math.floor(Math.random() * w) + margin;
    const y = Math.floor(Math.random() * h) + margin;

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top  = `${y}px`;
  }

  /* jump away on hover so it never gets clicked */
  noBtn.addEventListener('mouseenter', moveButton);

  /* …and on the off-chance it *is* clicked */
  noBtn.addEventListener('click', e => {
    e.preventDefault();
    moveButton();
  });

  /* keep it visible if the window is resized */
  window.addEventListener('resize', () => {
    const rect = noBtn.getBoundingClientRect();
    if (rect.right > window.innerWidth)  noBtn.style.left = `${window.innerWidth  - noBtn.offsetWidth  - margin}px`;
    if (rect.bottom > window.innerHeight) noBtn.style.top  = `${window.innerHeight - noBtn.offsetHeight - margin}px`;
  });
});
