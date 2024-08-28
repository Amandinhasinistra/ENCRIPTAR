const textArea = document.querySelector(".caixa-texto");
const mensagem = document.querySelector(".caixa-mensagem");

//As "chaves" de criptografia que utilizaremos são:
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

function btnencriptar(){
    let textArea = document.getElementById("cxtexto").value;
    const textoEncriptado = encriptar(textArea);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    let matrizcodigo = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    let stringFinal = stringEncriptada; // Inicializa com a string original

    for (let j = 0; j < matrizcodigo.length; j++) {
        // Substitui todos os caracteres originais pelos códigos encriptados
        stringFinal = stringFinal.split(matrizcodigo[j][0]).join(matrizcodigo[j][1]);
        // split: irá dividir a string de acordo com o parâmetro indicado.
        // exemplo: Teste, se for passado 'e', o resultado será um vetor (array) com os seguintes elementos ['t', 'st', '']
        
        // join: irá criar uma nova string juntando os elementos de um vetor (array) 
        // exemplo: ['t', 'st', ''], se for passado 'enter', o resultado será uma string 'tenterstenter'
    }

    return stringFinal;
}

function btndesencriptar(){
    let textArea = document.getElementById("cxmensagem").value;
    const textodesencriptado = desencriptar(textArea);
    mensagem.value = textodesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizcodigo = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    let stringFinal = stringDesencriptada; // Inicializa com a string original

    for (let j = 0; j < matrizcodigo.length; j++) {
        // Substitui todos os códigos encriptados pelos caracteres originais
        stringFinal = stringFinal.split(matrizcodigo[j][1]).join(matrizcodigo[j][0]);
    }

    return stringFinal;
}

