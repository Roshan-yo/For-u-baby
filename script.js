const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const questionSection = document.querySelector('#question-section');
const successSection = document.querySelector('#success-section');

// This makes the NO button move randomly
noBtn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noBtn.clientWidth;
    const maxY = window.innerHeight - noBtn.clientHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

// This shows the success screen
yesBtn.addEventListener('click', () => {
    questionSection.style.display = 'none';
    successSection.style.display = 'block';
});
