const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEvalido = false; 

function validaNome(nomeCompleto) {    /*Função que valida o nome, se tem sobrenome */
    const nomeComoArray = nomeCompleto.split(' ');    /*transforma o nome com o array separado por espaço */
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {    /* adiciona um evento toda x q tem um submit */
    e.preventDefault();    /* cancela a ação padrão do submit */

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;   /* tem que ter o .value para exibir o valor */

    formEvalido = validaNome(nomeBeneficiario.value)
    if (formEvalido) { /* valida o nome de acordo com a nome recebido */
        const containerMesagemSucesso = document.querySelector('.success-message');   /*recebe a configuração do css */
        containerMesagemSucesso.innerHTML = mensagemSucesso; //Recebe a menssagem de sucesso a ser exibida
        containerMesagemSucesso.style.display = 'block';  /*Altera o parâmetro do css */

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEvalido = validaNome(e.target.value);

    if (!formEvalido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});