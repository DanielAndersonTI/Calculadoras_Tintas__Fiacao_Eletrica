
function calcularTinta() {
    let altura = parseFloat(document.getElementById("altura").value);
    let largura = parseFloat(document.getElementById("largura").value);

    if (isNaN(altura) || isNaN(largura) || altura <= 0 || largura <= 0) {
        documnent.getElementById("resultado").innerHTML = "Por favor, insira valores válidos";
        document.getElementById("demao").innerHTML = "";
        return;
    }

    let area = altura * largura;
    let litrosNecessarios = area / 10;

    let umaDemao = Math.ceil(litrosNecessarios);
    let duasDemaos = Math.ceil(litrosNecessarios * 2);


    document.getElementById("resultado")
        .innerHTML = `Você precisará de aproximadamente <strong>${umaDemao} L </strong> de tinta`;
    document.getElementById("demao")
        .innerHTML = `Se quiser dar duas demãos de tinta, precisará de <strong>${duasDemaos} L </strong>`;
}
