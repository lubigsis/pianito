window.onload = () => {
    
    let teclas = document.querySelectorAll('.key'); /*---1----busca todas las clases .key*/
    let notesArray = ['Do','Re','Mi','Fa','Sol','La','Si'];

  /*---------------------------------------------------------------------------------------------*/
  document.onkeydown = (key) => {

    if(key.key  <= 7 && key.key >= 1){ //valido por si se presionan otras teclas
        let pressedKey = notesArray[key.key -1];
        playNote(pressedKey);

        let div = Array.from(teclas)[key.key -1]; //q' busque el elemento q' representa a la tecla q' se apretó
        div.classList.add('pressed'); // CSS       

    }
  }
  
  document.onkeyup = () => {
    teclas.forEach(function(key){
        key.classList.remove('pressed');
    })
  }
  
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