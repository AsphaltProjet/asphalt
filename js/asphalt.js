"use strict"; /* oblige à déclarer toute variable utilisée */
$(document).ready(initialiser);
function initialiser(evt){

  var flecheR= document.getElementById("flecheSwap");
  flecheR.addEventListener("click",swapTexte);

}

function swapTexte(evt){
    var depart    = document.getElementById("lieuDepart");
    var arrivee   = document.getElementById("lieuArrivee");
    var swaper    = depart.value;
    depart.value  = arrivee.value;
    arrivee.value = swaper;
}

$('.star').on('change', function() {
  let stars = $(this).val();
  /* Make an AJAX call to register the rating */
  console.log(stars);
});
