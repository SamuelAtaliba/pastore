document.getElementById('reportForm').addEventListener('submit', function (e) {
    e.preventDefault();

    try {
        const unidade = document.getElementById('unidade').value.trim();
        const tecnico = document.getElementById('tecnico').value.trim();
        const dataInput = document.getElementById('data').value;
        const custos = document.getElementById('custos').value.trim() || "Não houveram custos";
        const chegada = document.getElementById('chegada').value;
        const saida = document.getElementById('saida').value;
        const responsavel = document.getElementById('responsavel').value.trim();
        const feito = document.getElementById('feito').value.trim();
        const pendente = document.getElementById('pendente').value.trim() || "Não houveram pendências";


        const dataRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!dataRegex.test(dataInput)) {
            throw new Error("Formato de data inválido. Use dd/mm/yyyy.");
        }

        const reportHTML = `
            <h2>Relatório de Ordem de Serviço</h2>
            <p><strong>Unidade:</strong> ${unidade}</p>
            <p><strong>Técnico:</strong> ${tecnico}</p>
            <p><strong>Data:</strong> ${dataInput}</p>
            <p><strong>Custos:</strong> ${custos}</p>
            <p><strong>Horário de Chegada:</strong> ${chegada}</p>
            <p><strong>Horário de Saída:</strong> ${saida}</p>
            <p><strong>Responsável pela Unidade:</strong> ${responsavel}</p>
            <p><strong>O que foi feito:</strong> ${feito}</p>
            <p><strong>Pendências:</strong> ${pendente}</p>
        `;

        document.getElementById('report').innerHTML = reportHTML;
    } catch (error) {
        alert(`Erro: ${error.message}`);
    }
});

document.getElementById('copyButton').addEventListener('click', function () {
    const report = document.getElementById('report').innerText;
    if (!report.trim()) {
        alert("Gere o relatório antes de copiá-lo.");
        return;
    }

    navigator.clipboard.writeText(report).then(() => {
        alert('Relatório copiado!');
    }).catch(err => {
        alert('Falha ao copiar relatório.');
        console.error('Copy error:', err);
    });
});
