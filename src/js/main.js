import Typed from "typed.js";
import confetti from "canvas-confetti";
import anime from "animejs";

const typedIconDesc = new Typed('#iconDesc', {
    strings: ['Computer Science Student', 'Software Engineer Enthusiast'],
    typeSpeed: 50,
    loop: true,
    backSpeed: 25,
    smartBackspace: true,
    showCursor: false,
});

const typedConnect = new Typed('#titleConnect', {
    strings: ['Let\'s Connect!', 'Contact Me!'],
    typeSpeed: 50,
    loop: true,
    backSpeed: 25,
    smartBackspace: true,
    showCursor: false,
});

const myCanvas = document.createElement('canvas')
myCanvas.style.width = '100vw';
myCanvas.style.height = '100vh';
myCanvas.style.display = 'block';
myCanvas.style.position = 'absolute';
myCanvas.style.inset = 0;
myCanvas.style.zIndex = 5;
document.body.appendChild(myCanvas);

const confettiBtn = document.getElementById('confettiBtn');

confettiBtn.addEventListener('click', () => {
    console.log('Confetti');
    const myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true
    });
    myConfetti({
        particleCount: 100,
        spread: 160
    });
});

anime({
    targets: '.heroSection',
    translateX: [-2000, 0],
    duration: 1000,
    endDelay: 5000,
    direction: 'alternate',
    easing: 'easeInOutSine',
    loop: true,
});
