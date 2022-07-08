let numero = document.getElementById('fnum');
let lista = document.getElementById('flista');
let result = document.getElementById('div#res');
let valores = [];

function isNumero(n) {
    return (Number(n) >= 1 && Number(n) <= 100)
}

function inLista(n, lista) {
    return lista.indexOf(Number(n)) !== -1;
}

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value));
        let item = document.createElement('option');
        item.text = `Valor ${numero.value} adicionado`;
        lista.appendChild(item);
        numero.value = '';
        numero.focus();
        result.innerHTML = '';
    } else {
        alert('Valor inválido ou presente na lista');
        numero.value = '';
        numero.focus();
    }
}

numero.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addNum()
    }
});

function Finalizar() {
    if (valores.length === 0) {
        alert('Lista vazia')
    } else {
        let soma = 0;

        for (let n in valores) {
            soma += valores[n];
        }

        result.innerHTML = '';
        result.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`;
        result.innerHTML += `<p>O maior valor é ${Math.max(...valores)}</p>`;
        result.innerHTML += `<p>O menor valor é ${Math.min(...valores)}</p>`;
        result.innerHTML += `<p>A soma dos valores é ${soma}</p>`;
        result.innerHTML += `<p>A média dos valores é ${soma / valores.length}</p>`;
    }
}