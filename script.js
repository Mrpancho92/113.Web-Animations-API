'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');

/* const phoneAnimation = images[0].animate(
    [
        { transform: 'translateY(0)'},
        { transform: 'translateY(100px)'},
        { transform: 'translateY(-100px)'},
        { transform: 'translateY(0)'}
],
{
    duration: 3000,
    iterations: Infinity
}
); */

let phoneAnimation;
btnPhone.addEventListener('click', () => {
    if (!phoneAnimation) {
        phoneAnimation = images[0].animate([
            { transform: 'translateY(0) rotate(0deg)',
            filter: 'opacity(100%)'
        },
            { transform: 'translateY(100px) rotate(180deg)',
            filter: 'opacity(25%)'
        },
            { transform: 'translateY(-100px) rotate(270deg)',
            filter: 'opacity(50%)'
        },
            { transform: 'translateY(0) rotate(360deg)',
            filter: 'opacity(100%)'
        }
    ],
    {
        duration: 1000,
        iterations: Infinity
    });
}  else if (phoneAnimation.playState === 'paused') {
    phoneAnimation.play();
} else {
    phoneAnimation.pause();
}
});

let computerAnimation;
btnMacbook.addEventListener('click', () => {
    if (!computerAnimation) {
        computerAnimation = images[1].animate([
            { transform: 'perspective(400px) rotateY(0deg)'},
            { transform: 'perspective(400px) rotateY(50deg)'},
            { transform: 'perspective(400px) rotateY(100deg)'},
            { transform: 'perspective(400px) rotateY(150deg)'},
            { transform: 'perspective(400px) rotateY(200deg)'},
            { transform: 'perspective(400px) rotateY(250deg)'},
            { transform: 'perspective(400px) rotateY(300deg)'},
            { transform: 'perspective(400px) rotateY(360deg)'},
        ],
        {
            duration: 2000,
            iterations: Infinity
        });
    } else if (phoneAnimation.playState === 'paused') {
        phoneAnimation.play();
    } else {
        phoneAnimation.pause(); 
}
});
