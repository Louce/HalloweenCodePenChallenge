const clouds = document.querySelectorAll('.cloud');
const moon = document.querySelector('.moon_white');
const cat = document.querySelector('#cat');
const bodyWidth = document.body.clientWidth;


function randomRange(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

function rain(cloud) {
    cloud.addEventListener('click', () => {
        moon.className = 'moon moon_white blink';
        const drops = 200;
        for (let i = 1; i <= drops; i++) {
            let dropWidth = randomRange(0, bodyWidth);
            let dropheight = randomRange(-800, 1200);

            const newDrop = document.createElement('div');
            newDrop.className = 'drop';
            newDrop.id = 'drop' + i;
            newDrop.style.left = dropWidth + 'px';
            newDrop.style.top = dropheight + 'px';

            document.body.appendChild(newDrop);
        }
    });
}

clouds.forEach(rain);


//transform bats to vampire and reverse
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

bats.forEach((bat) => {
    bat.addEventListener('click', () => {
        toggleTransformation(bat);
    });
});

//reset
function stopRain() {
    let drops = document.querySelectorAll('.drop');
    drops.forEach((drop) => {
        drop.remove();
    });
    moon.classList.remove('blink');
}

function rotateEyes() {
    const catLeftEye = document.querySelector('.cat_head--eye-left');
    const catRightEye = document.querySelector('.cat_head--eye-right');
    catLeftEye.classList.toggle('cat_head--eye-left_rotate');
    catRightEye.classList.toggle('cat_head--eye-right_rotate');
}

function resetBats() {
    bats.forEach((bat) => {
        if (bat.classList.contains('vampire')) {
            toggleTransformation(bat);
        }
    });
}

rotateEyes();

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 32) {
        resetBats();
        rotateEyes();
        stopRain();
    }
});

//cat reset
cat.addEventListener('click', () => {
    resetBats();
    rotateEyes();
    stopRain();
})