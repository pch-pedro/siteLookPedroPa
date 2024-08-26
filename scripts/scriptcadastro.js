document.addEventListener('DOMContentLoaded', function() {
    const formCadastro = document.getElementById('form-cadastro');
    const botaoEnviar = document.getElementById('botao-enviar');
    const botaoLimpar = document.getElementById('botao-limpar');

    function enviarFormulario() {
        const nome = document.getElementById('nome').value;
        const usuario = document.getElementById('usuario').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        console.log('Nome:', nome);
        console.log('Nome de Usuário:', usuario);
        console.log('Email:', email);
        console.log('Senha:', senha);

        alert('Cadastro realizado com sucesso!');
    }

    botaoEnviar.addEventListener('click', function() {
        enviarFormulario();
    });


    botaoLimpar.addEventListener('click', function() {

        const conteudoEnviado = document.getElementById('conteudo-enviado');
        if (conteudoEnviado) {
            conteudoEnviado.innerHTML = '';
        }
    });
});
function RedirecionamentoCadastro() {
    window.location.href = '../pages/cadastro.html';
}
function RedirecionamentoLogin(){
    window.location.href = '../pages/login.html';
}
function InstrucaoLocalizacao(){
    alert("Clique em cima de 'Sede Corporativa Schlange FC' para ver nosso prédio corporativo");
}