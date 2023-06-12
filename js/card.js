// Filtrar jogadores masculinos
const jogadoresMasculinos = jogadores.filter(jogador => jogador.elenco === 'masculino');

// Filtrar jogadores femininos
const jogadorasFemininas = jogadores.filter(jogador => jogador.elenco === 'feminino');

function criarCard(jogador) {
  const card = document.createElement('div');
  card.classList.add('card');

  const imagem = document.createElement('img');
  imagem.src = jogador.imagem;
  imagem.alt = jogador.nome;
  imagem.classList.add('card-img');

  const nome = document.createElement('h3');
  nome.textContent = jogador.nome;
  nome.classList.add('card-title');

  const posicao = document.createElement('h3');
  posicao.textContent = jogador.posicao;
  posicao.classList.add('card-posicao');

  card.appendChild(posicao);
  card.appendChild(imagem);
  card.appendChild(nome);

  return card;
}

// Obter o container dos cards femininos
const cardsContainerFeminino = document.getElementById('cards-container-feminino');

// Obter o container dos cards masculinos
const cardsContainerMasculino = document.getElementById('cards-container-masculino');

// Iterar sobre as jogadoras femininas e criar os cards
jogadorasFemininas.forEach(function(jogadora) {
    const card = criarCard(jogadora);
    cardsContainerFeminino.appendChild(card);
  });

// Iterar sobre os jogadores masculinos e criar os cards
jogadoresMasculinos.forEach(function(jogador) {
  const card = criarCard(jogador);
  cardsContainerMasculino.appendChild(card);
});