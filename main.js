var urlString = 'piano/Piano.ff.';
var audios = [];
var teclas = document.getElementsByClassName("tecla");
auxiliar = {
    '81': 0,
    '50': 1,
    '87': 2,
    '51': 3,
    '69': 4,
    '82': 5,
    '53': 6,
    '84': 7,
    '54': 8,
    '89': 9,
    '55': 10,
    '85': 11,
    '73': 12,
    '65': 13,
    '90': 14,
    '83': 15,
    '88': 16,
    '67': 17,
    '70': 18,
    '86': 19,
    '71': 20,
    '66': 21,
    '72': 22,
    '78': 23,
    '77': 24,
};

function generateSounds() {
    for (var i = 0; i < teclas.length; i++) {
        audios[teclas[i].id] = new Audio(urlString + teclas[i].id + '.aiff.mp3');
    };
}

function myFunction(tecla) {
    teclas[tecla.id].classList.add('activa');
    audios[tecla.id].currentTime = 0;
    audios[tecla.id].play();
    setTimeout(function() {
        teclas[tecla.id].classList.remove('activa');;
    }, 1000);
}
window.onkeydown = function(e) {
    teclas[auxiliar[e.keyCode]].click();
}
