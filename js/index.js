function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
      elemento.innerHTML = '';
      textoArray.forEach((letra, i) =>{
          setTimeout(() => elemento.innerHTML += letra, 90 * i);
            
      });
    }
    
    const titulo = document.querySelector('.escrever');
    const titulo2 = document.querySelector('.texto2');
    typeWriter (titulo);
    typeWriter (titulo2);

    