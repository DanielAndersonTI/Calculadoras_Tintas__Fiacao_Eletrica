document.addEventListener('DOMContentLoaded', function() {
    // Variáveis de estado
    let quadroEnergia = false;
    let temLampadas = false;
    let temTomadas = false;
    
    // Elementos do DOM
    const botaoQuadroSim = document.getElementById('opcao-quadro-sim');
    const botaoQuadroNao = document.getElementById('opcao-quadro-nao');
    const botaoLampadasSim = document.getElementById('opcao-lampadas-sim');
    const botaoLampadasNao = document.getElementById('opcao-lampadas-nao');
    const grupoLampadas = document.getElementById('grupo-quantidade-lampadas');
    const botaoTomadasSim = document.getElementById('opcao-tomadas-sim');
    const botaoTomadasNao = document.getElementById('opcao-tomadas-nao');
    const grupoTomadas = document.getElementById('grupo-quantidade-tomadas');
    const botaoCalcular = document.querySelector('.botao-calcular');
    
    // Event Listeners
    botaoQuadroSim.addEventListener('click', () => alternarQuadro(true));
    botaoQuadroNao.addEventListener('click', () => alternarQuadro(false));
    botaoLampadasSim.addEventListener('click', () => alternarLampadas(true));
    botaoLampadasNao.addEventListener('click', () => alternarLampadas(false));
    botaoTomadasSim.addEventListener('click', () => alternarTomadas(true));
    botaoTomadasNao.addEventListener('click', () => alternarTomadas(false));
    botaoCalcular.addEventListener('click', calcularFios);
    
    // Funções
    function alternarQuadro(valor) {
        quadroEnergia = valor;
        if (valor) {
            botaoQuadroSim.classList.add('ativo');
            botaoQuadroNao.classList.remove('ativo');
        } else {
            botaoQuadroSim.classList.remove('ativo');
            botaoQuadroNao.classList.add('ativo');
        }
    }
    
    function alternarLampadas(valor) {
        temLampadas = valor;
        if (valor) {
            botaoLampadasSim.classList.add('ativo');
            botaoLampadasNao.classList.remove('ativo');
            grupoLampadas.classList.remove('grupo-oculto');
        } else {
            botaoLampadasSim.classList.remove('ativo');
            botaoLampadasNao.classList.add('ativo');
            grupoLampadas.classList.add('grupo-oculto');
            document.getElementById('quantidade-lampadas').value = '';
        }
    }
    
    function alternarTomadas(valor) {
        temTomadas = valor;
        if (valor) {
            botaoTomadasSim.classList.add('ativo');
            botaoTomadasNao.classList.remove('ativo');
            grupoTomadas.classList.remove('grupo-oculto');
        } else {
            botaoTomadasSim.classList.remove('ativo');
            botaoTomadasNao.classList.add('ativo');
            grupoTomadas.classList.add('grupo-oculto');
            document.getElementById('quantidade-tomadas').value = '';
        }
    }
    
    function calcularFios() {
        const inputDistancia = document.getElementById('distancia');
        const inputLampadas = document.getElementById('quantidade-lampadas');
        const inputTomadas = document.getElementById('quantidade-tomadas');
        const divResultado = document.getElementById('resultado');
        const textoResultado = document.getElementById('texto-resultado');
        const observacaoResultado = document.getElementById('observacao-resultado');
        
        // Validações
        if (!inputDistancia.value || parseFloat(inputDistancia.value) <= 0) {
            alert('Por favor, informe uma distância válida maior que zero.');
            return;
        }
        
        const distanciaBase = parseFloat(inputDistancia.value);
        let metragemTotal = 0;
        
        // Cálculo para lâmpadas
        if (temLampadas) {
            if (!inputLampadas.value || parseInt(inputLampadas.value) <= 0) {
                alert('Por favor, informe uma quantidade válida de lâmpadas.');
                return;
            }
            
            const qtdLampadas = parseInt(inputLampadas.value);
            let distanciaLampadas = distanciaBase + (qtdLampadas * 0.25);
            
            if (quadroEnergia) {
                distanciaLampadas += 0.50;
            }
            
            metragemTotal += distanciaLampadas * 2;
        }
        
        // Cálculo para tomadas
        if (temTomadas) {
            if (!inputTomadas.value || parseInt(inputTomadas.value) <= 0) {
                alert('Por favor, informe uma quantidade válida de tomadas.');
                return;
            }
            
            const qtdTomadas = parseInt(inputTomadas.value);
            let distanciaTomadas = distanciaBase + (qtdTomadas * 0.15);
            
            if (quadroEnergia) {
                distanciaTomadas += 0.50;
            }
            
            metragemTotal += distanciaTomadas * 3;
        }
        
        // Exibir resultados
        textoResultado.innerHTML = `Metragem total de fio necessária: <strong>${metragemTotal.toFixed(2)} metros</strong> (Para circuitos separados segundo a NBR 5410)`;
        
        const metragemCircuitoUnico = metragemTotal * 0.6;
        observacaoResultado.innerHTML = `
            <p>Para instalação em <strong>circuito único</strong> (fase, neutro e terra juntos):</p>
            <p><strong>${metragemCircuitoUnico.toFixed(2)} metros</strong> (economia de 40%)</p>
            <div class="dica-tecnica">
                ⚠️ <strong>Atenção:</strong> Esta configuração não segue a NBR 5410 e não é recomendada para áreas úmidas (cozinhas, banheiros).
            </div>
        `;
        
        divResultado.style.display = 'block';
    }
});