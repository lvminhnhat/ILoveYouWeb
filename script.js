// script.js
const lyrics = [
    { time: 2.5, text: "My baby love you so much forever you and I" },
    { time: 8, text: "I love you oh! I love you so much forever you and I" },
    { time: 15, text: "My baby love you so much forever you and I" },
    { time: 20, text: "I love you oh! I love you so much forever you and I" },
    { time: 27, text: "Vẫn nhớ ánh mắt, nhớ đôi ngày nào bên anh" },
    
    // Thêm các đoạn lời khác tại đây với thời gian tương ứng
    // { time: 15, text: "..." },
];

let currentIndex = 0;
let currentCharIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('music');
    const lyricsDiv = document.getElementById('lyrics');

    music.addEventListener('timeupdate', () => {
        const currentTime = music.currentTime;
        
        if (currentIndex < lyrics.length && currentTime >= lyrics[currentIndex].time) {
            displayLyrics(lyrics[currentIndex].text);
            currentIndex++;
        }
    });

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 500);

    function displayLyrics(text) {
        lyricsDiv.innerHTML = '';  // Clear previous lyrics
        currentCharIndex = 0;

        function typeWriter() {
            if (currentCharIndex < text.length) {
                lyricsDiv.innerHTML += text.charAt(currentCharIndex);
                currentCharIndex++;
                setTimeout(typeWriter, 100);  // Adjust typing speed here (in milliseconds)
            }
        }

        typeWriter();
    }
});
