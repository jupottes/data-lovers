window.onload = function () {
  showPokemons(getPokemons);
};

//Quando a página é executada é criado o template com os 151 pokeomons
const getPokemons = POKEMONS['pokemon']

//Show pokemons sempre recebe algum parâmetro para ser executada
//A partir do parâmetro recebido ela cria os templates
function showPokemons(reference) {
  const pokemonList = document.getElementById('cardsPokemons');
  pokemonList.innerHTML = `
  ${reference.map((pkm) => `
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
  const typedName = document.getElementById('enterName').value;
  const nameComp = getPokemons.filter((pkms) => pkms['name'].toUpperCase() === typedName.toUpperCase());
 if (nameComp.length ==0){
  const pokemonList = document.getElementById('cardsPokemons');
  pokemonList.innerHTML = `
        <p class="pkm-num">Nenhum resultado encontrado</p>`
 }
 else{
   showPokemons(nameComp)
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

//Mostra as estatisticas dos pokemons de acordo com o tipo
function statistic() {
  const pokeType = document.getElementById('typeList').value;
  const result = getPokemons.filter((pkms) => pkms['type'][0] == pokeType || pkms['type'][1] == pokeType);
  const pokemonList = document.getElementById('typeStatistics');
if(result.length > 0){   
  const counter = (result.length / 151) * 100
  return `${pokemonList.innerHTML = "Entre os 151 pokemons " + counter.toFixed(2) + "% são do tipo " + pokeType}`;  
}
else{
  pokemonList.innerHTML = `
        <p class="pkm-num">Nenhum resultado encontrado</p>`
}
}

//Mostra os templates de acordo com o filtro escolhido
function filterByType(){
  const pokemonTipo = document.getElementById('typeList').value;
  const result = getPokemons.filter((pkms) => pkms['type'][0] == pokemonTipo || pkms['type'][1] == pokemonTipo);
  return result
}

//Chama as funções para exibir a mensagem mais os pokemons filtrados
function showFilterResult(){
  statistic()
  showPokemons(filterByType())
}

document.querySelector('#searchByType').addEventListener('click', showFilterResult)

//Função que guarda os nomes em ordem alfabética
function getNames() {
  const names = getPokemons.sort((a, b) => a.name.localeCompare(b.name));
  const orderedNames = names.map((pkms) => pkms['name']);
  return orderedNames;
}

//Cria os itens do menu dinamicamente
function loadNames() {
  let options = '';
  for (let i in getNames()) options += '<option value="' + getNames()[i] + '" />';
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
  for (let i in getNumbers()) nameOptions += '<option value="' + getNumbers()[i] + '" />';
  document.getElementById('numberList').innerHTML = nameOptions;
}

document.querySelector('#searchNumber').addEventListener('click', compareNumber);

//Verifica o número digitado e mostra o pokemon com aquele número
function compareNumber() {
  const typedNumber = Number(document.getElementById('enterNumber').value);
  const numberComp = getPokemons.filter((pkms) => Number(pkms['num']) == typedNumber);
  if (numberComp.length ==0){
    const pokemonList = document.getElementById('cardsPokemons');
    pokemonList.innerHTML = `
          <p class="pkm-num">Nenhum resultado encontrado</p>`
   }
   else{
     showPokemons(numberComp)
   }
}

//Evento para carregar os menus ao entrar na página
window.addEventListener('load', loadNumbers);
window.addEventListener('load', loadNames);

//Função pra limpar a statistic que aparece ao filtrar por tipo
function clear(){
  document.getElementById('typeStatistics').innerHTML=''
}

//Loop que adiciona a função de limpar nos botões
let buttons = document.getElementsByClassName('button-search')
for (let i in buttons) {
  buttons[i].addEventListener('click', clear);
}