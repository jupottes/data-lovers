window.onload = function() {
    showPokemons();
  
  };
  
  const getPokemons =() => pokemons["pokemon"];
  
  
  const showPokemons =() =>{
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
  }

  let sorteandoIdades = meuArray.sort(function (a, b) {
    return a.idade - b.idade;
  });
  console.log(sorteandoIdades);