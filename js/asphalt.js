(function(){
"use strict"; /* oblige à déclarer toute variable utilisée */
$(document).ready(initialiser);
function initialiser(evt){
  var swapFleche    = document.getElementById("flecheSwap");
  swapFleche.addEventListener("click",swapTexte);
  
  let calendrier=$("#datepicker");/*calendrier jquery ui*/
    calendrier.datepicker({
       monthNames:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"],
        dayNames: ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],
       dayNamesMin:["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
        dateFormat:"dd-mm-yy",
        firstDay: 1
    });
  
  let nbCom=$("#lesCommentaires div").length;
    console.log(nbCom);
    let deuxiemeCom=$("#lesCommentaires div:nth-of-type(2)");
    
    if(nbCom>2){
        deuxiemeCom.nextAll("div").css("display","none");
        $("#fleche").css("visibility", "visible");
    }
    
    let fleche=$("#fleche");
    fleche.click(afficherCom);
  
    let valider = $("#valider");
    valider.click(validerTrajet);
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
  console.log(stars);
});
  
  function afficherCom(evt){
     let deuxiemeCom=$("#lesCommentaires div:nth-of-type(2)");
    deuxiemeCom.nextAll("div").css("display","block");
        $("#fleche").css("visibility", "hidden");
} 
  
  function validerTrajet(evt){
        let valider = $(this);
        valider.attr('fas','far');
    }

}());
