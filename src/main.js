window.onload = function() {
    showPokemons();
  
  };
  
  const getPokemons =() => pokemons["pokemon"];
  
  
  /*const showPokemons =() =>{
  let pokemonList = document.getElementById("pokemons-div");
  
  pokemonList.innerHTML = `
  ${getPokemons().map((pkm) => `
    <div class="pkm-item">
      <img src="${pkm["img"]}" class="pkm-img" />
      <div class="text-price">
        <p class="pkm-num">${pkm["num"]}</p>
      </div>
      <div class="text-name">
        <h3 class="pkm-name">${pkm["name"]}</h3>
      </div>
      
  </div>
  `
  ).join("")
  }
  `


  }*/
  const showPokemons =() =>{
    let pokemonList = document.getElementById("pokemons-div");
    pokemonList.innerHTML =`
    ${getPokemons().map((pkm) => `
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

  
  //Aqui ele está trazendo todos do tipo fogo
  //O "tipo" dentro da função vai ser comparado de acordo com o valor do search*/
  //Função funcionando
 const filterByType = () =>{

  let filteredByType = getPokemons().filter(pkms => (pkms["type"][0] == "Fire"));
  return filteredByType
}
// console.log(filterByType());

 const sortByName = () =>{
 let sorted = getPokemons().sort(pkms => (pkms[name])
 console.log(sorted;
  }
   