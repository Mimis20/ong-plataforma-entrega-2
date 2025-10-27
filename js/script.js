const form = document.getElementById('formCadastro');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();

  if(nome === '' || email === '' || mensagem === '') {
    feedback.textContent = 'Por favor, preencha todos os campos.';
    feedback.style.color = 'red';
    return;
  }

  feedback.textContent = 'Cadastro enviado com sucesso!';
  feedback.style.color = 'green';
  form.reset();
});
