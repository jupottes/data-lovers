window.onload = function() {
  showPokemons();

};

const getPokemons =() => pokemons["pokemon"];
//Essa variável vai "guardar" as mudanças aplicadas pelos filtros
//Sem ela os pokemons não são exibidos na tela
let meusPokemons = getPokemons()







const showPokemons =() =>{
  let pokemonList = document.getElementById("pokemons-div");
  pokemonList.innerHTML =`
  ${meusPokemons.map((pkm) => `
    <div class="pkm-item">
      <img src="${pkm["img"]}" class="pkm-img" />
      <div class="text-price">
        <p class="pkm-num">${pkm["num"]}</p>
      </div>
      <div class="text-name">
        <h3 class="pkm-name">${pkm["name"]}</h3>
        <p class="pkm-num">${pkm["type"][0]}</p>
       
      </div>
      
  </div>
  `
  ).join("")
  }
  ` 
}

const allCheck = document.querySelectorAll(".checkInput");
for (btns of allCheck){
btns.addEventListener("click", function (e){let tipoPkm = e.target.id
meusPokemons = meusPokemons.filter(pkms => (pkms["type"][0] == tipoPkm || pkms["type"][1] == tipoPkm))})
}

//Função que mandar mostrar os pokemons quando o filtro é aplicado
const filterByType = () =>{
  showPokemons()
}

//Seleciona todos os checkbox pelo id da section
document.querySelector("#buscaPkm").addEventListener("click", filterByType)

//Função que filtra pela distância do ovo
const checkEggValue = document.querySelectorAll(".checkInputEgg");
for (btns of checkEggValue){
btns.addEventListener("click", function (e){let eggDistance = e.target.id
meusPokemons = meusPokemons.filter(pkms => (pkms["egg"] == eggDistance))})
}

const filterByEgg = () =>{
  showPokemons()
}

document.querySelector("#searchEggPkm").addEventListener("click", filterByType)

//Busca por nome no click do botão buscar por nome
const filterByName = () =>{
  let nomeDigitado = document.getElementById("entraNome").value;
  meusPokemons = meusPokemons.filter(pkms => (pkms["name"].toUpperCase() == nomeDigitado.toUpperCase()))
  showPokemons()
}

document.querySelector("#buscaNome").addEventListener("click", filterByName)