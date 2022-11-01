const valor = document.getElementById('valor');
const percorrido = document.getElementById('percorrido');
const botao = document.querySelector('button');
const atualiza = document.getElementById('atu');
const valorPorkm = document.getElementById('valorPorkm');



divResultado.style.visibility = "hidden";

botao.addEventListener('click', () => {
    if(valor.value === "" && percurso.value === "") {
        alert("insira valores válidos para valor da corrida e percurso total");
    } else {
        pagKm();
    }
})



atualiza.addEventListener('click', () => {
    recarrega();
})



function pagKm() {
    const valor = Number(document.getElementById('valor').value);       //extrai o valor da corrida
  
    divResultado.style.visibility = "visible";         //exibe o resultado para o usuário

    let distanciaPercorrida = Number(percorrido.value);      //extrai o valor do percurso

    let valkm = valor / distanciaPercorrida;           //cálculo para saber quanto paga por km rodado

    let resultado = valkm.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});  //exibe o resultado no formato de moeda corrente
    
    valorPorkm.innerHTML = resultado;    //resultado final no documento

    const desejado = 1.5;
    const dinheiro = desejado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    if(resultado >= dinheiro) {
        document.getElementById('valorPorkm').style.color = 'blue';
        document.querySelector('p').style.color = 'blue';
        
    } else {
        document.getElementById('valorPorkm').style.color = 'red';
        document.querySelector('p').style.color = "red";
    }
}


function recarrega() {
    window.location.reload()
}
