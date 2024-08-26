document.addEventListener('DOMContentLoaded', function() {
    const formLogin = document.getElementById('form-login');
    const botaoEnviar = formLogin.querySelector('input[type="submit"]');
    const botaoLimpar = formLogin.querySelector('input[type="reset"]');

    function enviarFormulario() {
        const usuario = document.getElementById('usuario').value;
        const senha = document.getElementById('senha').value;

        console.log('Nome de Usuário:', usuario);
        console.log('Senha:', senha);

 
        alert('Login realizado com sucesso!');
    }


    botaoEnviar.addEventListener('click', function(event) {
        event.preventDefault(); 
        enviarFormulario();
    });

    botaoLimpar.addEventListener('click', function() {

        formLogin.reset();
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