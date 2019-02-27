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
/*const filterByType = () =>{
meusPokemons = meusPokemons.filter(pkms => (pkms["type"][0] == "Fire"));
showPokemons()
}*/

//Funcionando, Paloma

const allCheck = document.querySelectorAll(".checkInput");
console.log(allCheck) 
for (btns of allCheck){
  console.log(btns)
 btns.addEventListener("click", function (e){let tipoPkm = e.target.id
  meusPokemons = meusPokemons.filter(pkms => (pkms["type"][0] == tipoPkm))
  // filterByType()
})
}

const filterByType = () =>{
  //let tipoPkm = document.getElementsByClassName("checkInput").value;
   //console.log(tipoPkm)
 
  //  meusPokemons = meusPokemons.filter(pkms => (pkms["type"][0] == tipoPkm));
    showPokemons()
    //console.log()
    }




/*const filterByType = () =>{
 let tipoPkm = document.getElementsByClassName("typeSearch").value;
 
  meusPokemons = meusPokemons.filter(pkms => (pkms["type"][0] == tipoPkm));
  showPokemons()
  }*/



//Seleciona todos os checkbox pelo id da section
  document.querySelector("#buscaPkm").addEventListener("click", filterByType)
  




//Essa filtra pelo ovo
//Distancia percorrida necessária para o pokemon nascer 
//2, 5 ou 10km
const filterByEgg = () =>{
  meusPokemons = meusPokemons.filter(pkms => (pkms["egg"] == "2 km"));
showPokemons()
}

//document.getElementById("myInput1").addEventListener("keyup", myFunction);
//searchByType.addEventListener("click", filterByType);

//FUNÇÃO INPUT DA BUSCA
function myFunction() {
  search.style.display= "block";
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("types");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

/*let search = document.getElementById("types");
search.style.display= "none";

let search2 = document.getElementById("eggs");
search.style.display= "none";*/


function myFunction2() {
  search.style.display= "block";
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInputEgg");
  filter = input.value.toUpperCase();
  ul = document.getElementById("eggs");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

//let pokeType = document.getElementsByName("pokeType");
//alert(pokeType[1].value);