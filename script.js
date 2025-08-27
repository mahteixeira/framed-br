// total de pastas (ajuste aqui se tiver mais ou menos)
const totalPastas = 1;

// gera número aleatório entre 1 e totalPastas
const numero = Math.floor(Math.random() * totalPastas) + 1;

// monta caminho da imagem
const caminho = `imagens/${numero}/frame1.jpeg`; // ajuste extensão se for .jpg

// coloca no src
document.getElementById("imagem").src = caminho;


function mudarFrame(num) {
    const frame = document.getElementById("imagem");

    if (num === 1) {
        frame.src = "imagens/1/frame1.jpeg";
    }
    else if (num === 2) {
        frame.src = "imagens/1/frame2.jpeg";
    }
    else if (num === 3) {
        frame.src = "imagens/1/frame3.jpeg";
    }
    else if (num === 4) {
        frame.src = "imagens/1/frame4.jpeg";
    }
    else if (num === 5) {
        frame.src = "imagens/1/frame5.jpeg";
    }
    else if (num === 6) {
        frame.src = "imagens/1/frame6.jpeg";
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