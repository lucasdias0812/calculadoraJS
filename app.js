var resultado = document.getElementById('resultado');


function soma(){
    //Entrada
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);

    //Processamento
    var soma = n1 + n2

    //Saída
    resultado.innerText = `O resultado da soma é de ${soma}`

}
function multiplicacao(){
    //Entrada
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);

    //Processamento
    var multiplicacao = n1 * n2

    //Saída
    resultado.innerText = `O resultado da multiplicação é de ${multiplicacao}`

}
function divisao(){
    //Entrada
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);

    //Processamento
    var divisao = n1 / n2

    //Saída
    resultado.innerText = `O resultado da divisao é de ${divisao}`

}
function subtracao(){
    //Entrada
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);

    //Processamento
    var subtracao = n1 - n2

    //Saída
    resultado.innerText = `O resultado da soma é de ${subtracao}`

}