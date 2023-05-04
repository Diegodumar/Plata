// Função para abrir o menu de celulares

function clickMenu(){
    if  (menuburguer.style.display == 'block'){
        menuburguer.style.display = 'none'} else {
            menuburguer.style.display = 'block'
        }
    }

// Função para Somar gastos 

var gastos = [];

    function adicionarGasto() {
    var nomeGasto = document.getElementById("nomeGasto").value;
    var valorGasto = document.getElementById("valorGasto").value;
    gastos.push({ nome: nomeGasto, valor: parseFloat(valorGasto) });
    document.getElementById("nomeGasto").value = "";
    document.getElementById("valorGasto").value = "";
    calcular();
    }

      function calcular() {
        var soma = 0;
        for (var i = 0; i < gastos.length; i++) {
          soma += gastos[i].valor;
        }
        document.getElementById("hoje").innerHTML = `R$ ` + soma.toFixed(2);
      }

      



