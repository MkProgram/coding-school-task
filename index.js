const factField = document.getElementById("catFact");
const btnReload = document.getElementById("btnReload");

const catFactUrl = "https://catfact.ninja/fact";

btnReload.addEventListener("click", loadFact);

loadFact();
function loadFact() {
  return fetch(catFactUrl)
    .then( response => response.json() )
    .then( response => factField.innerHTML = response.fact )
    .catch( (error) => {
      console.log(error);
    })
}

