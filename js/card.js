// Filtrar jogadores masculinos
const jogadoresMasculinos = jogadores.filter(jogador => jogador.elenco === 'masculino');

// Filtrar jogadores femininos
const jogadorasFemininas = jogadores.filter(jogador => jogador.elenco === 'feminino');


const manipula_click = (evento) => {
  const clicada = evento.target;
  sessionStorage.setItem('elenco', clicada.dataset.elenco);
  sessionStorage.setItem('nome', clicada.dataset.nome);
  sessionStorage.setItem('posicao', clicada.dataset.posicao);
  sessionStorage.setItem('descricao', clicada.dataset.descricao);
  sessionStorage.setItem('nomecomp', clicada.dataset.nomecomp);
  sessionStorage.setItem('nascimento', clicada.dataset.nascimento);
  sessionStorage.setItem('altura', clicada.dataset.altura);
  sessionStorage.setItem('imagem', clicada.src);

  window.location.href = 'detalhes.html';
}

function criarCard(jogador) {
  const card = document.createElement('div');
  card.classList.add('card');

  const imagem = document.createElement('img');
  imagem.src = jogador.imagem;
  imagem.alt = jogador.nome;
  imagem.classList.add('card-img');

  imagem.onclick = manipula_click;
  imagem.dataset.elenco = jogador.elenco;
  imagem.dataset.nome = jogador.nome;
  imagem.dataset.posicao = jogador.posicao
  imagem.dataset.descricao = jogador.descricao;
  imagem.dataset.nomecomp = jogador.nome_completo;
  imagem.dataset.nascimento = jogador.nascimento;
  imagem.dataset.altura = jogador.altura;
  imagem.onmouseover = (e) => {e.target.style.width = '110%'};
  imagem.onmouseleave = (e) => {e.target.style.width = '100%'};

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
