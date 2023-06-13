// Acessando os dados da sessionStorage
const descricao = sessionStorage.getItem('descricao');
const nome = sessionStorage.getItem('nome');
const nascimento = sessionStorage.getItem('nascimento');
const altura = sessionStorage.getItem('altura');
const imagem = sessionStorage.getItem('imagem');

// Exibindo os dados na página
document.getElementById('descricao').textContent = descricao;
document.getElementById('nome').textContent = nome;
document.getElementById('nascimento').textContent = nascimento;
document.getElementById('altura').textContent = altura;
document.getElementById('imagem').src = imagem;