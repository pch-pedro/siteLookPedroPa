
document.getElementById('botao-enviar').addEventListener('click', function() {
    mostrarConteudo();
});


document.getElementById('botao-limpar').addEventListener('click', function() {

    document.getElementById('form-contato').reset();


    document.getElementById('conteudo-enviado').innerHTML = '';
});


function mostrarConteudo() {
 
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const dataNascimento = document.getElementById('data-nascimento').value;
    const mensagem = document.getElementById('mensagem').value;
    const senha = document.getElementById('senha').value;

    const conteudoEnviado = `
        <h3>Conteúdo Enviado:</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Idade:</strong> ${idade}</p>
        <p><strong>Data de Nascimento:</strong> ${dataNascimento}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
        <p><strong>Senha:</strong> ${senha}</p>
    `;


    document.getElementById('conteudo-enviado').innerHTML += conteudoEnviado;
}
function RedirecionamentoCadastro() {
    window.location.href = '../pages/cadastro.html'; 
}
function RedirecionamentoLogin(){
    window.location.href = '../pages/login.html';
}
function InstrucaoLocalizacao(){
    alert("Clique em cima de 'Sede Corporativa Schlange FC' para ver nosso prédio corporativo");
}