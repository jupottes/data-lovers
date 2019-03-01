window.onload = function () {
  showPokemons();

};

const getPokemons = () => pokemons["pokemon"];
//Essa variável vai "guardar" as mudanças aplicadas pelos filtros
//Sem ela os pokemons não são exibidos na tela
let meusPokemons = getPokemons()

const namesPkm = meusPokemons[0]["name"];
console.log(namesPkm)

let namePkm = "";
for (let i = 0; i < .length; i++) {

const showPokemons = () => {
  let pokemonList = document.getElementById("pokemons-div");
  pokemonList.innerHTML = `
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

pkm.sort((a, b) => a - b);
console.log(teste)

const allCheck = document.querySelectorAll(".checkInput");
for (btns of allCheck) {
  btns.addEventListener("click", function (e) {
    let tipoPkm = e.target.id
    meusPokemons = meusPokemons.filter(pkms => (pkms["type"][0] == tipoPkm || pkms["type"][1] == tipoPkm))
  })
}

//Função que mandar mostrar os pokemons quando o filtro é aplicado
const filterByType = () => {
  showPokemons()
}

//Seleciona todos os checkbox pelo id da section
document.querySelector("#buscaPkm").addEventListener("click", filterByType)

//Essa filtra pelo ovo
//Distancia percorrida necessária para o pokemon nascer 
//2, 5 ou 10km
//Precisa ser refatorada pra ficar igual a do filtro
const filterByEgg = () => {
  meusPokemons = meusPokemons.filter(pkms => (pkms["egg"] == "2 km"));
  showPokemons()
}