const responses = [
    "İyi ki varsın!",
    "Canım karım!",
    "Her şeyim!",
    "Aşk tanem!",
    "Annem!",
    "Canım kızım!",
    "Bal tanem!"
];

const images = [
    'image1.jpg', // Buraya kendi fotoğraflarının yollarını yaz
    'image2.jpg',
    'image3.jpg'
];

function changeBackground() {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const backgroundImage = document.getElementById('backgroundImage');
    backgroundImage.src = randomImage;
}

// Sayfa yüklendiğinde ilk arka planı ayarla
window.onload = changeBackground;

document.getElementById('response').addEventListener('click', function() {
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    this.innerText = randomResponse;
});

// Rastgele kalp simgesi göstermek için fonksiyon
function showLoveMessage() {
    const loveMessage = document.createElement('div');
    loveMessage.innerText = "❤️"; // Kalp simgesi
    loveMessage.className = 'heart';
    
    // Ekranın rastgele bir yerinde konumlandır
    const x = Math.random() * (window.innerWidth - 50); // Kalp genişliği
    const y = Math.random() * (window.innerHeight - 50); // Kalp yüksekliği
    loveMessage.style.left = `${x}px`;
    loveMessage.style.top = `${y}px`;

    document.body.appendChild(loveMessage);

    // Kalp mesajını belirli bir süre sonra kaldır
    setTimeout(() => {
        loveMessage.remove();
    }, 2000); // 2000 ms = 2 saniye
}

// Her tıklamada arka planı değiştir ve kalp simgeleri göster
document.querySelector('.heart-box').addEventListener('click', () => {
    changeBackground();
    showLoveMessage();
});
