window.onload = function() {
    showPokemons();
  
  };
  
  const getPokemons =() => pokemons["pokemon"];

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

 const filterByType = () =>{
meusPokemons = meusPokemons.filter(pkms => (pkms["type"][0] == "Fire"));
showPokemons()
  //console.log(filteredByType);
}
//console.log(filterByType());














/*const filterByEgg = () =>{

  let filteredByType = getPokemons().filter(pkms => (pkms["egg"][0] == "2"));
  return filteredByType
}
 const sortByName = () =>{
 let sorted = getPokemons().sort(pkms => (pkms[name])
 console.log(sorted;
  }
   */