let j = 0; // controla o tempo que a letra será exibida

function escreverNome(nome) {
  const container = document.getElementById("nome-container");
  container.innerText = "";

  const letras = nome.split("");

  while (j < 60) {
    agendarLetra(letras, letras[j % letras.length], j);
    incrementarContadores();
  }
}

function agendarLetra(letras, letra, tempo) {
  const container = document.getElementById("nome-container");

  setTimeout(() => {
    if (container.innerText.length === letras.length) {
      limpar();
    }

    console.log("escrevi", container.innerText);
    container.innerText = container.innerText + letra;
  }, tempo * 1000);
}

function limpar() {
  const container = document.getElementById("nome-container");
  container.innerText = "";
  console.log("limpei", container.innerText);
}

function incrementarContadores() {
  j = j + 1;
}

escreverNome("Tirion_Brujah");
