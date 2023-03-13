
function cambioInfoBoton(id, contacto, infoPersonal) {
    var button = document.getElementById(id);
    if (button.innerHTML === contacto) {
        button.innerHTML = infoPersonal;
    } else {
        button.innerHTML = contacto;
    }
  }

  function abrirMiPagina() {
    window.open("https://marinaserver.github.io/Proyecto-desarrollo-web-Coder-House/")
  }
  
  document.getElementById('numTel').addEventListener('click', function() {
    cambioInfoBoton('numTel', "Teléfono", "tel 3436-612600")
  });
  
  document.getElementById('mailCompleto').addEventListener('click', function() {
    cambioInfoBoton('mailCompleto', "Mail", "marinaserver@gmail.com")
  });

  document.getElementById('miPaginaWeb').addEventListener('click', function() {
    abrirMiPagina()
  });

  document.getElementById('ciudad').addEventListener('click', function() {
    cambioInfoBoton('ciudad', "Ubicación", "Rosario, Santa Fe, Argentina")
  });


  /* scrolling color*/
  function scrollingColor() {
    this.style.backgroundColor = "#70C1A7";
  }

  // Standard syntax
document.getElementById("sobreMiId").addEventListener("transitionend", scrollingColor);