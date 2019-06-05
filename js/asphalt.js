"use strict"; /* oblige à déclarer toute variable utilisée */
$(document).ready(initialiser);
function initialiser(evt){

  var flecheR= document.getElementById("flecheSwap");
  flecheR.addEventListener("click",swapTexte);
  
  let calendrier=$("#datepicker");/*calendrier jquery ui*/
    calendrier.datepicker({
       monthNames:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"],
        dayNames: ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],
       dayNamesMin:["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
        dateFormat:"dd-mm-yy",
        firstDay: 1
    });
   

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
