let img__slider = document.getElementsByClassName('img__slider');

let etape = 0;

let nbr__img = img__slider.length;

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveImages() {
    for (let i = 0; i < nbr__img; i++) {
        img__slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function () {
    etape++;
    if (etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
});

precedent.addEventListener('click', function () {
    etape--;
    if (etape < 0) {
        etape = nbr__img - 1;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
});

setInterval(function () {
    etape++;
    if (etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
}, 4000);

/* gérer les transitions sur qui sommes-nous */
function changetomission() {
    document.getElementById('text__tw').style.display = 'block';
    document.getElementById('bar__tw').style.display = 'block';
    document.getElementById('text__on').style.display = 'none';
    document.getElementById('bar__on').style.display = 'none';
    document.getElementById('bar__thre').style.display = 'none';
    document.getElementById('bar__thre').style.display = 'none';
    document.querySelector('.subtitle2').style.backgroundColor = '#2a9bd4';
    document.querySelector('.subtitle2').style.color = '#fff';
    document.querySelector('.subtitle3').style.color = '#2a9bd4';
    document.querySelector('.subtitle1').style.color = '#2a9bd4';
    document.querySelector('.subtitle1').style.backgroundColor = 'transparent';
    document.querySelector('.subtitle3').style.backgroundColor = 'transparent';
}

function changetovision() {
    document.getElementById('text__thre').style.display = 'block';
    document.getElementById('bar__thre').style.display = 'block';
    document.getElementById('text__on').style.display = 'none';
    document.getElementById('bar__on').style.display = 'none';
    document.getElementById('text__tw').style.display = 'none';
    document.getElementById('bar__tw').style.display = 'none';
    document.querySelector('.subtitle3').style.backgroundColor = '#2a9bd4';
    document.querySelector('.subtitle3').style.color = '#fff';
    document.querySelector('.subtitle2').style.color = '#2a9bd4';
    document.querySelector('.subtitle1').style.color = '#2a9bd4';
    document.querySelector('.subtitle2').style.backgroundColor = 'transparent';
    document.querySelector('.subtitle1').style.backgroundColor = 'transparent';
}

function changetoapropos() {
    document.getElementById('text__thre').style.display = 'none';
    document.getElementById('bar__thre').style.display = 'none';
    document.getElementById('text__on').style.display = 'block';
    document.getElementById('bar__on').style.display = 'block';
    document.getElementById('text__tw').style.display = 'none';
    document.getElementById('bar__tw').style.display = 'none';
    document.querySelector('.subtitle1').style.backgroundColor = '#2a9bd4';
    document.querySelector('.subtitle1').style.color = '#fff';
    document.querySelector('.subtitle2').style.color = '#2a9bd4';
    document.querySelector('.subtitle3').style.color = '#2a9bd4';
    document.querySelector('.subtitle2').style.backgroundColor = 'transparent';
    document.querySelector('.subtitle3').style.backgroundColor = 'transparent';
}
