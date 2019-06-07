(function(){
"use strict"; /* oblige à déclarer toute variable utilisée */
$(document).ready(initialiser);
function initialiser(evt){
  let swapFleche = $("#flecheSwap");
  swapFleche.click(swapTexte);
  
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
    valider.mouseover(remplirValider);
    valider.mouseout(viderValider);
    let refuser = $("#refuser");
    valider.click(validerRefuser);
    refuser.mouseover(remplirRefuser);
    refuser.mouseout(viderRefuser);
    refuser.click(validerRefuser);
  
   /*afficher partie conducteur*/
    let conducspace = $("#conducteur");
    conducspace.click(showConducSpace);
  
  /*---slider tableau de bord--*/
    let flecheDr=$("#flecheDroite");
    let flecheGc=$("#flecheGauche");
    flecheDr.click(slideAvant);
    flecheGc.click(slideArriere);
    /*$(".unTrajet:not(:first-child)").hide();*/
    $(".unTrajet:first-child").addClass("selected");
    
    /*--tabs--*/
    let onglets = $("#onglets");
    onglets.tabs({
        
        
    })
}
function swapTexte(evt){
    let depart    = $("#lieuDepart");
    let arrivee   =$("#lieuArrivee");
    let swaper    = depart.value;
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
  
 function remplirValider(evt){
        let remplir = $(this);
        remplir.attr({class: "fas fa-check-circle"});
    }
    function viderValider(evt){
        let vider = $(this);
        vider.attr({class: "far fa-check-circle"});
    }
    
    function remplirRefuser(evt){
        let remplir = $(this);
        remplir.attr({class: "fas fa-times-circle"});
    }
    function viderRefuser(evt){
        let vider = $(this);
        vider.attr({class: "far fa-times-circle"});
    }
    
    function validerRefuser(evt){
        let choix=$(this);
        choix.parent().parent().parent().css("display","none");
    }
  
  /*-----fonctions afficher/cacher spaceConduc-----*/
    function showConducSpace(evt){
        let spaceConduc=$("#conducSpace");
        spaceConduc.css("display", "block");
        $("#conducteur").off("click",showConducSpace);
        $("#conducteur").click(hideConducSpace);
        
    }
    function hideConducSpace(evt){
        let spaceConduc=$("#conducSpace");
        spaceConduc.css("display", "none");
        $("#conducteur").off("click",hideConducSpace);
        $("#conducteur").click(showConducSpace);
    }
   function slideAvant(evt){
        let divNow=$(".unTrajet.selected");
        if(!divNow.is(":last-child")){
            let divNext=divNow.next();
            divNow.hide();
            divNext.show();
        }
    }
    
    function slideArriere(evt){
         let divNow=$("#unTrajet");
        divNow.prev();
    }


}());
