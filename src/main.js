window.onload = function () {
  showPokemons(getPokemons);
};

const getPokemons = POKEMONS['pokemon']

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

function sortNames(){
  const filteredPokemons = filterByType();
  const pokemons = (filteredPokemons.length != 0) ? filteredPokemons : getPokemons;
  pokemons.sort((a, b) => a.name.localeCompare(b.name));
  showPokemons(pokemons);
};
document.querySelector('#buttonOrder').addEventListener('click', sortNames);

function sortNamesReverse(){
  const filteredPokemons = filterByType();
  const pokemons = (filteredPokemons.length != 0) ? filteredPokemons : getPokemons;
  pokemons.sort((a, b) => a.name.localeCompare(b.name)).reverse(getPokemons);
  showPokemons(pokemons);
};
document.querySelector('#buttonOrderReverse').addEventListener('click', sortNamesReverse);

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

function filterByType(){
  const pokemonTipo = document.getElementById('typeList').value;
  const result = getPokemons.filter((pkms) => pkms['type'][0] == pokemonTipo || pkms['type'][1] == pokemonTipo);
  return result
}

function showFilterResult(){
  statistic()
  showPokemons(filterByType())
}

document.querySelector('#searchByType').addEventListener('click', showFilterResult)

function getNames() {
  const names = getPokemons.sort((a, b) => a.name.localeCompare(b.name));
  const orderedNames = names.map((pkms) => pkms['name']);
  return orderedNames;
}

function loadNames() {
  let options = '';
  for (let i in getNames()) options += '<option value="' + getNames()[i] + '" />';
  document.getElementById('nameList').innerHTML = options;
}

function getNumbers() {
  const sortedNumbers = getPokemons.map((pkms) => pkms['num']);
  return sortedNumbers;
}

function loadNumbers() {
  let nameOptions = '';
  for (let i in getNumbers()) nameOptions += '<option value="' + getNumbers()[i] + '" />';
  document.getElementById('numberList').innerHTML = nameOptions;
}

document.querySelector('#searchNumber').addEventListener('click', compareNumber);

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

window.addEventListener('load', loadNumbers);
window.addEventListener('load', loadNames);

function clear(){
  document.getElementById('typeStatistics').innerHTML=''
}

const buttons = document.getElementsByClassName('button-search')
for (let i in buttons) {
  buttons[i].addEventListener('click', clear);
}