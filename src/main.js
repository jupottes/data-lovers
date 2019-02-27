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



  // Função que filtra o pokemon por tipo
  //A variável tipo vai ser puxada do html
const filterByType = () =>{
meusPokemons = meusPokemons.filter(pkms => (pkms["type"][0] == "Fire"));
showPokemons()
}

//Essa filtra pelo ovo
//Distancia percorrida necessária para o pokemon nascer 
//2, 5 ou 10km
const filterByEgg = () =>{
  meusPokemons = meusPokemons.filter(pkms => (pkms["egg"] == "2 km"));
showPokemons()
}















