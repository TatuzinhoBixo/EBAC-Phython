const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto) {    /*Função que valida o nome, se tem sobrenome */
    const nomeComoArray = nomeCompleto.split(' ');    /*transforma o nome com o array separado por espaço */
    return nomeComoArray.length >= 2;
}


form.addEventListener('submit', function(e) {    /* adiciona um evento toda x q tem um submit */
    let formEvalido = false  /*inicia como falta para ser testado abaixo */
    e.preventDefault();    /* cancela a ação padrão do submit */

    const nomeBeneficiario = document.getElementById('nome-beneficiario'); /* pega o nome do beneficiario */
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} - conta: ${numeroContaBeneficiario.value}`;   /* tem que ter o .value para exibir o valor */

    if (validaNome(nomeBeneficiario.value)) {   /* valida o nome de acordo com a nome recebido */
        alert(mensagemSucesso)
    } else {
        alert('O nome não está completo')
    }
     

})

console.log(form);