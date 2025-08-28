// total de pastas (ajuste aqui se tiver mais ou menos)
const totalPastas = 3;

// gera número aleatório entre 1 e totalPastas
const numero = Math.floor(Math.random() * totalPastas) + 1;

// monta caminho da imagem
const caminho = `imagens/${numero}/frame1.jpeg`; // ajuste extensão se for .jpg


// coloca no src
document.getElementById("imagem").src = caminho;


//LISTA DE FILMES
var titulos = ["As Branquelas", "Minha Mãe É Uma Peça", "Minha Mãe É Uma Peça 2", "Minha Mãe É Uma Peça 3", 
    "As Patricinhas de Bervely Hills", "Rio", "Rio 2"];

autocomplete(document.getElementById("input-resposta"), titulos);


function mudarFrame(num) {
    const frame = document.getElementById("imagem");

    if (num === 1) {
        frame.src = "imagens/${numero}/frame1.jpeg";
    }
    else if (num === 2) {
        frame.src = "imagens/${numero}/frame2.jpeg";
    }
    else if (num === 3) {
        frame.src = "imagens/${numero}/frame3.jpeg";
    }
    else if (num === 4) {
        frame.src = "imagens/${numero}/frame4.jpeg";
    }
    else if (num === 5) {
        frame.src = "imagens/${numero}/frame5.jpeg";
    }
    else if (num === 6) {
        frame.src = "imagens/${numero}/frame6.jpeg";
    }
    
}


  let atual = 1; // já temos o 1 visível

  function mostrarProximo() {
    atual++;
    if (atual <= 6) {
      document.getElementById(`btn${atual}`).style.display = "block";
      mudarFrame(atual)
    }

  }


//COMPLETAR AUTOMATICAMENTE SEARCH BAR
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}


//Validando resposta correta 
function validarResposta() {
  let inputresposta = document.getElementById("input-resposta").value.trim().toLowerCase();
  const respotacerta = titulos[numero - 1].trim().toLowerCase();

  console.log("Digitado:", inputresposta);
  console.log("Correto:", respotacerta);

  if (inputresposta === respotacerta) {
    alert("RESPOSTA CERTA");
    location.reload();
  } else {
    alert("RESPOSTA ERRADA, TENTE NOVAMENTE");
    mostrarProximo();
  }
}
