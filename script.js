var videoElement = document.getElementById("videoFondo");

function videoCarga() {
    var videoFuente = document.createElement("source");
    videoFuente.src = "./assets/background.mp4";
    videoFuente.type = "video/mp4";
    videoElement.appendChild(videoFuente);
    videoElement.load();
}
videoCarga();

function expandImage(image) {
    const expandedImageContainer = document.createElement('div');
    expandedImageContainer.classList.add('expanded-image');
    const expandedImage = document.createElement('img');
    expandedImage.src = image.src;
    expandedImageContainer.appendChild(expandedImage);
    const closeButton = document.createElement('span');
    closeButton.classList.add('expanded-image-close');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function () {
        expandedImageContainer.remove();
    });
    expandedImageContainer.appendChild(closeButton);
    document.body.appendChild(expandedImageContainer);
}

function showAlertAfterScroll() {
    var seccion3 = document.getElementById('seccion4');
    var alertShown = false;

    function checkIfInView() {
        var bounding = seccion3.getBoundingClientRect();
        if (bounding.top <= window.innerHeight && !alertShown) {
            alert('¡Recuerda abrir el regalo!');
            alertShown = true;
        }
    }

    window.addEventListener('scroll', checkIfInView);
}

showAlertAfterScroll();

/* Ventana Emergente */
function showAlertAfterTransition(message) {
    const label = document.querySelector('.click');
    label.addEventListener('transitionend', function () {
        Swal.fire({
            title: '¡Mother Day!',
            html: '<span style="color: #333;">' + message + '</span>',
            icon: 'success',
            showCloseButton: true,
            confirmButtonText: 'Cerrar',
            onClose: function () {
                label.click();
            }
        });
    });
}

/* Reproductor */
var v = document.getElementsByTagName("audio")[0];
var sound = false;
var boton = document.getElementById("btn2");

boton.addEventListener("click", function () {
    if (!sound) {
        v.play();
        this.innerHTML = "Pause";
        sound = true;
    } else {
        v.pause();
        this.innerHTML = "Play";
        sound = false;
    }
});

/* Volumen  */
var reproductor = document.getElementById("reproductor");
reproductor.volume = 0.5;
var barra = document.getElementById("mislider");

barra.addEventListener("change", function (ev) {

    var resultado = document.getElementById("valor");
    resultado.innerHTML = ev.currentTarget.value;
    reproductor.volume = ev.currentTarget.value;

}, true);

document.getElementById("valor").innerHTML = document.getElementById("mislider").value;