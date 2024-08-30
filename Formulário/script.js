// script.js
function validateForm() {
    // Obtém os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Verifica se algum dos campos está vazio
    if (name === '' || email === '') {
        // Exibe um alerta se algum campo estiver vazio
        alert('Preencha todos os campos');
    } else {
        // Caso todos os campos estejam preenchidos, exibe uma mensagem (pode ser substituído por lógica adicional)
        alert('Formulário enviado com sucesso!');
    }
}
