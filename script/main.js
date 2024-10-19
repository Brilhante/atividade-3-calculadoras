
function calculate() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;
    let result = '';

    if (isNaN(number1) || isNaN(number2)) {
        result = 'Por favor, insira números válidos.';
    } else {
        switch (operator) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                result = number2 !== 0 ? number1 / number2 : 'Divisão por zero não permitida';
                break;
            default:
                result = 'Operador inválido.';
        }
    }

    document.getElementById('result').value = result;
}

function mascaraAltura(input) {
    let valor = input.value.replace(/\D/g, '');
    if (valor.length > 1) {
        valor = valor.replace(/^(\d)(\d{0,2})/, '$1,$2'); 
    }
    input.value = valor;
}


function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultados = document.getElementById('resultados');

    if (isValidInputs(altura, peso)) {
        const imc = (peso / (altura * altura)).toFixed(2);
        document.getElementById('imcValue').innerText = imc;

        const { situacao, grauObesidade } = getIMCClassification(imc);

        document.getElementById('situacao').innerText = situacao;
        document.getElementById('grauObesidade').innerText = grauObesidade;
        resultados.style.display = 'block';
    } else {
        alert('Por favor, insira valores válidos para altura e peso.');
    }
}

function isValidInputs(altura, peso) {
    return !isNaN(altura) && !isNaN(peso) && altura > 0;
}

function getIMCClassification(imc) {
    if (imc < 16) return { situacao: 'Magreza grave', grauObesidade: 'III' };
    if (imc >= 16 && imc <= 16.9) return { situacao: 'Magreza moderada', grauObesidade: 'II' };
    if (imc >= 17 && imc <= 18.4) return { situacao: 'Magreza leve', grauObesidade: 'I' };
    if (imc >= 18.5 && imc <= 24.9) return { situacao: 'Saudável', grauObesidade: '0' };
    if (imc >= 25 && imc <= 29.9) return { situacao: 'Sobrepeso', grauObesidade: 'I' };
    if (imc >= 30 && imc <= 34.9) return { situacao: 'Obesidade Grau I', grauObesidade: 'I' };
    if (imc >= 35 && imc <= 39.9) return { situacao: 'Obesidade Grau II (severa)', grauObesidade: 'II' };
    return { situacao: 'Obesidade Grau III (mórbida)', grauObesidade: 'III' };
}

function limparCampos() {
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('imcValue').innerText = '';
    document.getElementById('situacao').innerText = '';
    document.getElementById('grauObesidade').innerText = '';
    document.getElementById('resultados').style.display = 'none';
}