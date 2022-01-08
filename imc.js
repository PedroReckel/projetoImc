const calcular = document.getElementById('calcular')

function imc() {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = peso / (altura * altura)
        if(valorIMC < 18.5) {
            resultado.textContent =`${nome} seu IMC é ${valorIMC.toFixed()} e você está abaixo do peso!`
        } else if (valorIMC < 25) {
            resultado.textContent =`${nome} seu IMC é ${valorIMC.toFixed()} e você está com o peso ideal!`
        } else if (valorIMC < 30 ) {
            resultado.textContent =`${nome} seu IMC é ${valorIMC.toFixed()} e você está com sobre peso!`
        } else if (valorIMC < 35) {
            resultado.textContent =`${nome} seu IMC é ${valorIMC.toFixed()} e você está obeso!`
        } else {
            resultado.textContent =`${nome} seu IMC é ${valorIMC.toFixed()} e você está com obsidade morbita!`
            classificacao = 'com obsidade morbita!'
        }
    } else {
        resultado.textContent = 'Preencha todos os campos'
    }
}

calcular.addEventListener('click', imc)  // Quando alguem clicar no botão calcular, vai chamar uma função