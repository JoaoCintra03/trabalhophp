
function validateForm() {
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name === '' || email === '') {
      
        alert('Preencha todos os campos');
    } else {
      
        alert('Formulário enviado com sucesso!');
    }
}
