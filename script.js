const yesButton = document.getElementById('yesButton');
yesButton.addEventListener('mouseover', function(event) {
    const distance = 350; // radius in pixels within which the button will move
    const angle = Math.random() * Math.PI * 2; // random angle
    const x = Math.cos(angle) * distance + event.clientX - this.clientWidth / 2;
    const y = Math.sin(angle) * distance + event.clientY - this.clientHeight / 2;
    this.style.position = 'absolute';
    this.style.left = Math.min(Math.max(0, x), window.innerWidth - this.clientWidth) + 'px';
    this.style.top = Math.min(Math.max(0, y), window.innerHeight - this.clientHeight) + 'px';
});

document.getElementById('noButton').addEventListener('click', function() {
    document.body.innerHTML = ''; // Clear the page content
    const img = document.createElement('img');
    img.src = 'in_love.jpg'; // Path to your image
    img.style.width = '80%'; // Larger image
    img.style.position = 'absolute';
    img.style.left = '10%';
    img.style.top = '10%';
    document.body.appendChild(img);
});
