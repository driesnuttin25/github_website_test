document.getElementById('yesButton').addEventListener('mouseover', function(event) {
    const x = Math.random() * (window.innerWidth - this.clientWidth);
    const y = Math.random() * (window.innerHeight - this.clientHeight);
    this.style.position = 'absolute';
    this.style.left = x + 'px';
    this.style.top = y + 'px';
});

document.getElementById('noButton').addEventListener('click', function() {
    const img = document.createElement('img');
    img.src = 'your-image-url.jpg'; // Replace 'your-image-url.jpg' with the path to the image you want to show
    img.style.width = '100px'; // Adjust size as needed
    document.body.appendChild(img);
});
