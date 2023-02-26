window.onload = () => {
    
    let teclas = document.querySelectorAll('.key'); /*---1----busca todas las clases .key*/
  
/*------------------------2----p/ detectar cuando el user presione las teclas y así reproducir el sonido----------------- */
    teclas.forEach(function(key) {
        key.addEventListener('click', function() {
        /*-------------3-------almacena el atributo 'data-note', en el HTML es el nombre de la nota-------*/
            let nota = this.getAttribute('data-note');
            playNote(nota);
        });
    });

/*------------------4----------------------------------------------------------*/
    function playNote(nota) {
        let audio = new Audio(nota + '.mp3'); //instancio un nuevo audio
        audio.play();  //permite reproducir el audio
    }
}