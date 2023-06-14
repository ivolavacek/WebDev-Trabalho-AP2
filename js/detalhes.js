// guarda cada atributo numa variável correspondente de acordo com os dados da sessionStorage
const elenco = sessionStorage.getItem('elenco');
const nome = sessionStorage.getItem('nome');
const posicao = sessionStorage.getItem('posicao');
const descricao = sessionStorage.getItem('descricao');
const nomecomp = sessionStorage.getItem('nomecomp');
const nascimento = sessionStorage.getItem('nascimento');
const altura = sessionStorage.getItem('altura');
const imagem = sessionStorage.getItem('imagem');

// joga os dados para a página .html a partir de cada id
document.getElementById('nome').textContent = nome;
document.getElementById('posicao').textContent = posicao;
document.getElementById('descricao').textContent = descricao;
document.getElementById('nomecomp').textContent = nomecomp.toUpperCase();
document.getElementById('nascimento').innerText = nascimento;
document.getElementById('altura').textContent = altura;
document.getElementById('imagem').src = imagem;

// título da página de detalhes personalizado de acordo com elenco
const tituloDetalhesElement = document.getElementById('tituloPrincipal');

if (elenco === 'masculino') {
  tituloDetalhesElement.textContent = 'Detalhes do Jogador';
} else if (elenco === 'feminino') {
    console.log(elenco);
  tituloDetalhesElement.textContent = 'Detalhes da Jogadora';
};