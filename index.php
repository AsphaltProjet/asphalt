<?php
    header("Content-type: text/html; chartset=UTF-8");
    require("entete.inc.php") ;
?>

    
   <main>
         <section class="accueil">
            
            <div class="fenetre">
                <h2>Où allez-vous ?</h2>
                <div class="boutonsAccueil">
                    <a href="rechercheTrajet.html">
                        <button class="boutonBlanc">Rechercher un trajet</button>
                    </a>
                    <a href="proposerTrajet.html">
                        <button class="boutonBlanc">Proposer un trajet</button>
                    </a>
                </div>
            </div>
            <div class="bulleAccueil">
                <p>Bienvenue sur le site !</p>
                <p>- L'équipe Asphalt -</p>
            </div>
            
        </section>
    </main>
    
    
<?php 
require("pied.inc.php");
?>
