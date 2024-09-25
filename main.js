console.log('Olá mundo!');
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

// Cria um novo elemento h1
const titulo = document.createElement('h1');
titulo.innerText = 'Bem-vindo à Minha Página!';

// Cria um novo botão
const botao = document.createElement('button');
botao.innerText = 'Clique aqui para ver uma mensagem!';

// Cria um novo parágrafo para a mensagem
const mensagem = document.createElement('p');
mensagem.style.display = 'none'; // Inicialmente oculto

// Adiciona um evento de clique ao botão
botao.addEventListener('click', function() {
    mensagem.innerText = 'Cruzeiro melhor time do mundo e ainda tem time de basquete!';
    mensagem.style.display = 'block'; // Torna o parágrafo visível
});

// Adiciona os elementos ao body
document.body.appendChild(titulo);
document.body.appendChild(botao);
document.body.appendChild(mensagem);
