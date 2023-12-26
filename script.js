function calcularDepreciacao() {
    const valorInicial = parseFloat(document.getElementById('valorInicial').value);
    const valorResidual = parseFloat(document.getElementById('valorResidual').value);
    const vidaUtil = parseInt(document.getElementById('vidaUtil').value);

    if (isNaN(valorInicial) || isNaN(valorResidual) || isNaN(vidaUtil)) {
        alert('Valores inválidos ou incompletos.');
        return;
    }

    const depreciacaoAnual = (valorInicial - valorResidual) / vidaUtil;

    document.getElementById('resultado').innerText = `A depreciação anual é de R$ ${depreciacaoAnual.toFixed(2)}`;
}
