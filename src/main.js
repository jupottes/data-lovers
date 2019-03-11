window.onload = function () {
  showPokemons(getPokemons);
};

//Quando a página é executada é criado o template com os 151 pokeomons
const getPokemons = POKEMONS['pokemon']

//Show pokemons sempre recebe algum parâmetro para ser executada
//A partir do parâmetro recebido ela cria os templates
function showPokemons(referencia) {
  let pokemonList = document.getElementById('pokemons-div');
  pokemonList.innerHTML = `
  ${referencia.map((pkm) => `
    <div class="pkm-item">
      <img src="${pkm['img']}" class="pkm-img" />
    <div class="text-price">
        <p class="pkm-num">${pkm['num']}</p>
      </div>
      <div class="text-name">
        <h3 class="pkm-name">${pkm['name']}</h3>
        <p class="pkm-num">${pkm['type']}</p>
       
      </div>
      
  </div>
  `
  )
      .join('')}
  `;
}

//Buscar pelo nome
function filterByName() {
  let nomeDigitado = document.getElementById('entraNome').value;
  let data1 = getPokemons.filter((pkms) => pkms['name'].toUpperCase() === nomeDigitado.toUpperCase());
 if (data1.length ==0){
  let pokemonList = document.getElementById('pokemons-div');
  pokemonList.innerHTML = `
        <p class="pkm-num">Nenhum resultado encontrado</p>${showPokemons(result)}`
 }
 else{
   showPokemons(data1)
 }
}

document.querySelector('#buscaNome').addEventListener('click', filterByName)

//Ordenar Pokemons pelo nome A-Z
//Nessa const pokemons é feito um if-else, se não tiver nenhum filtro aplicado
//são mostrados todos os pokemons
function sortNames(){
  const filteredPokemons = filterByType();
  const pokemons = (filteredPokemons.length != 0) ? filteredPokemons : getPokemons;
  pokemons.sort((a, b) => a.name.localeCompare(b.name));
  showPokemons(pokemons);
};
document.querySelector('#buttonOrder').addEventListener('click', sortNames);

//Ordenar Pokemons pelo nome Z-A
function sortNamesReverse(){
  const filteredPokemons = filterByType();
  const pokemons = (filteredPokemons.length != 0) ? filteredPokemons : getPokemons;
  pokemons.sort((a, b) => a.name.localeCompare(b.name)).reverse(getPokemons);
  showPokemons(pokemons);
};
document.querySelector('#buttonOrderReverse').addEventListener('click', sortNamesReverse);

//Mostra a porcentagem dos pokemons de acordo com o tipo
function porcentagem() {
  let pokemonTipo = document.getElementById('tipos').value;
  let result = getPokemons.filter((pkms) => pkms['type'][0] == pokemonTipo || pkms['type'][1] == pokemonTipo);
  let pokemonList = document.getElementById('mensagem');
if(result.length > 0){   
  let contador = (result.length / 151) * 100
  return `${pokemonList.innerHTML = "Entre os 151 pokemons " + contador.toFixed(2) + "% são do tipo " + pokemonTipo}`;  
}
else{
  pokemonList.innerHTML = `
        <p class="pkm-num">Nenhum resultado encontrado</p>`
}
}
 
//Mostra os templates de acordo com o filtro escolhido
function filterByType(){
  let pokemonTipo = document.getElementById('tipos').value;
  let result = getPokemons.filter((pkms) => pkms['type'][0] == pokemonTipo || pkms['type'][1] == pokemonTipo);
  return result
}

//Chama as funções para exibir a mensagem mais os pokemons filtrados
function showFilterResult(){
  porcentagem()
  showPokemons(filterByType())
}

let filtrar = document.getElementById('searchByType')
filtrar.addEventListener('click', showFilterResult)

//Função que guarda os nomes em ordem alfabética
function getNames() {
  const nomes = getPokemons.sort((a, b) => a.name.localeCompare(b.name));
  const nomesOrganizados = nomes.map((pkms) => pkms['name']);
  return nomesOrganizados;
}

//Cria os itens do menu dinamicamente
function loadNames() {
  let options = '';
  for (var i = 0; i < getNames().length; i++) options += '<option value="' + getNames()[i] + '" />';

  document.getElementById('nameList').innerHTML = options;
}

//Guarda os números de cada pokemon
function getNumbers() {
  const sortedNumbers = getPokemons.map((pkms) => pkms['num']);
  return sortedNumbers;
}

//Carrega os números na barra de pesquisa
function loadNumbers() {
  let nameOptions = '';
  for (var i = 0; i < getNumbers().length; i++) nameOptions += '<option value="' + getNumbers()[i] + '" />';

  document.getElementById('numberList').innerHTML = nameOptions;
}

document.querySelector('#buscaNumero').addEventListener('click', compararNumeros);

//Verifica o número digitado e mostra o pokemon com aquele número
function compararNumeros() {
  let numeroDigitado = Number(document.getElementById('entraNumero').value);
  let data4 = getPokemons.filter((pkms) => Number(pkms['num']) == numeroDigitado);
  if (data4.length ==0){
    let pokemonList = document.getElementById('pokemons-div');
    pokemonList.innerHTML = `
          <p class="pkm-num">Nenhum resultado encontrado</p>`
   }
   else{
     showPokemons(data4)
   }
}

//Evento para carregar os menus ao entrar na página
window.addEventListener('load', loadNumbers);
window.addEventListener('load', loadNames);

//Função pra limpar a porcentagem que aparece ao filtrar por tipo
function clear(){
  document.getElementById('mensagem').innerHTML=''
}

//Loop que adiciona a função de limpar nos botões
let buttons = document.getElementsByClassName('button-search')
for (let i in buttons) {
  buttons[i].addEventListener('click', clear);
}