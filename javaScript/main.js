const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: ${nomeBeneficiario.value} - conta: ${numeroContaBeneficiario.value}`;

    formEValido = validaNome(nomeBeneficiario.value)    
    if (formEValido) {
        const containerMansagemSucesso = document.querySelector('.success-message');
        containerMansagemSucesso.innerHTML = mensagemSucesso;
        containerMansagemSucesso.computedStyleMap.display = 'block';

        nomeBeneficiario.value = '';
        nomeContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeContaBeneficiario.classList.add('error');
        document.querySelector('.error-message').style.display = 'block'; 
    } else {
        nomeBeneficiario.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});