function generateNumber() {
  const  chooseYourNumber = parseInt( document.querySelector(".choose-your-number").value);
  const inputMin = parseInt(document.querySelector('.input-min').value);
  const inputMax = parseInt(document.querySelector('.input-max').value);
 
   if (inputMin >= inputMax ) {
      alert("o valor mínimo deve ser menor que o valor mámixo! ");
      return;
  }

  if (isNaN(chooseYourNumber) || isNaN(inputMin) || isNaN(inputMax)) {
    alert('Por favor, preencha todos os campos.');
    return;
}
  let contador = 3;
            const contadorElement = document.getElementById('contador');
            contadorElement.textContent = contador;

            const intervalo = setInterval(function() {
                contador--;
                contadorElement.textContent = contador;
                if (contador <= 0) {
                    clearInterval(intervalo);
                    contadorElement.innerText = '';
                    realizarSorteio(chooseYourNumber, inputMin, inputMax);
                }
              }, 1000);
          }

        function realizarSorteio(chooseYourNumber, inputMin, inputMax) {
            const resultadoElement = document.getElementById('result');
            let sorteado = [];
            
            for (let i = 0; i < chooseYourNumber; i++) {
                // Sorteio de número usando math.random e arredondando com Math.ceil ou Math.floor
                let numeroSorteado = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;
                sorteado.push(numeroSorteado);
            }

            // Exibe o número(s) sorteado(s) na tela
            resultadoElement.textContent = ` ${sorteado.join(', ')}`;
        }
  

