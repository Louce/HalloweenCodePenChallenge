const clouds = document.querySelectorAll('.cloud');
const moon = document.querySelector('.moon_white');
const cat = document.querySelector('#cat');
const bodyWidth = document.body.clientWidth;


//Make it rain
//
function randomRange(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

function createRainDrop() {
    const drop = document.createElement('div');
    drop.className = 'drop';
    return drop;
}

function startRain(cloud) {
    cloud.addEventListener('click', () => {
        moon.classList.add('blink');
        const drops = 200;
        for (let i = 1; i <= drops; i++) {
            const drop = createRainDrop();
            const dropWidth = randomRange(0, bodyWidth);
            const dropHeight = randomRange(-800, 1200);

            drop.id = 'drop' + i;
            drop.style.left = dropWidth + 'px';
            drop.style.top = dropHeight + 'px';

            document.body.appendChild(drop);
        }
    });
}

clouds.forEach(startRain);

const bats = document.querySelectorAll('.bat');

function toggleTransformation(bat) {
    if (bat.classList.contains('transformToVampire')) {
        bat.textContent = "🦇";
        bat.classList.remove('transformToVampire', 'vampire');
    } else {
        if (bat.classList.contains('bat_1') || bat.classList.contains('bat_3') || bat.classList.contains('bat_4')) {
            bat.style.transform = 'none';
        }
        bat.classList.add('transformToVampire', 'vampire');
        setTimeout(() => {
            bat.textContent = "🧛🏻‍♀️";
        }, 250);
    }
}

function resetBats() {
    bats.forEach((bat) => {
        if (bat.classList.contains('vampire')) {
            toggleTransformation(bat);
        }
    });
}

bats.forEach((bat) => {
    bat.addEventListener('click', () => {
        toggleTransformation(bat);
    });
});

function stopRain() {
    const drops = document.querySelectorAll('.drop');
    drops.forEach((drop) => {
        drop.remove();
    });
}

function rotateEyes() {
    const catLeftEye = document.querySelector('.cat_head--eye-left');
    const catRightEye = document.querySelector('.cat_head--eye-right');
    catLeftEye.classList.toggle('cat_head--eye-left_rotate');
    catRightEye.classList.toggle('cat_head--eye-right_rotate');
}

function resetAll() {
    resetBats();
    rotateEyes();
    stopRain();
}

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 32) {
        resetAll();
    }
});

cat.addEventListener('click', () => {
    resetAll();
});