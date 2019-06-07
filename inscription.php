<?php
session_start();
require_once ('param.inc.php');

try{
	$pdo=new PDO("mysql:host=".MYHOST.";dbname=".MYDB."", MYUSER, MYPASS);
    $pdo->query("SET NAMES utf8");
    $pdo->query("SET CHARACTER SET 'utf8'");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (Exception $e){
	die("Un problème est survenu lors de votre inscription : ".$e->getMessage());
}

// requete pour ajouter membre
$ajouterMembre=$pdo->prepare('INSERT INTO USER(nomUser, prenomUser, dateNaissanceUser, mailUser, motDePasseUser, numTel, urlPP,statutUser, nbTrajets, cagnotte) VALUES(:nom, :prenom, :dateNaissance, :mail, :mdp, :num, :photo, :statut, :nbTrajet, :cagnotte)');

$existMail=$pdo->prepare('SELECT idUser FROM USER WHERE mailUser=?');


if (isset($_POST['nom']) && 
    isset($_POST['prenom']) &&
    isset($_POST['adresseMail']) &&
    isset($_POST['numTel']) &&
    isset($_POST['dateNaissance']) &&
    isset($_POST['genre']) &&
    isset($_POST['mdp']) &&
    isset($_POST['confirmationMdp']) &&
    isset($_POST['conditionsUtilisation'])&&
    ($_POST['conducteur']==true || $_POST['passager']==true))
if($_POST['conducteur']==true){
        isset($_POST['modeleVoiture']) &&
        isset($_POST['couleurVoiture']) &&
        isset($_POST['nbPlaces'])
    }{

    if($_POST['mdp']==$_POST['confirmationMdp']){
        
        $existMail->execute(array($_POST['mailUser']));
        $testMail=$existMail->fetch();
        if(!isset($testMail['idUser'])){ //verif si adresse mail existe pas deja
            
            $hashPass="des".$_POST['mdp']."sapins";
            $hashPass=hash('sha512',$hashPass);
            $ajouterMembre->execute(array(
                'nom'=> $_POST['nom'],
                'prenom'=> $_POST['prenom'],
                'dateNaissance'=> $_POST['dateNaissance'],
                'mail'=> $_POST['adresseMail'],
                'mdp'=>$hashPass,
                'num'=>$_POST['numTel'],
                'photo'=>'avatar.png',
                'statut'=>($_POST['conducteur'].",".$_POST['passager']),
                'nbTrajet'=>0, 
                'cagnotte'=>0
            )) or die(print_r($pdo->errorInfo()));
	$ajouterVoiture->execute(array(
                'modele'=>$_POST['modeleVoiture'],
                'couleur'=>$_POST['couleurVoiture'],
                'nbPlaces'=>$_POST['nbPlaces']
            )) or die(print_r($pdo->errorInfo()));
            header('Location: confirmationInscription.html');
            
        } else{
            echo ('l\'email est deja utilisé');
        }
        
    } else{
        echo('Tu dois indiquer le même mot de passe');
    }
}else{
    echo('Il manque des informations');
}

$existMail->closeCursor();


?>




 
