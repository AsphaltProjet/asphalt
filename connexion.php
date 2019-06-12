<?php
    session_start();
	require_once ("param.inc.php");

try{
	$pdo=new PDO("mysql:host=".MYHOST.";dbname=".MYDB."", MYUSER, MYPASS);
    $pdo->query("SET NAMES utf8");
    $pdo->query("SET CHARACTER SET 'utf8'");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e){
	echo 'Echec de la connexion : ',$e->getMessage();
}

$existMail=$pdo->prepare('SELECT idUser FROM USER WHERE mailUser=?');//verif si adresse mail existe pas deja
$requeteUser=$pdo->prepare('SELECT * FROM USER WHERE mailUser=?');

    
if (isset($_POST['mail']) && isset($_POST['mdp'])){
    
    $existMail->execute(array($_POST['mail']));
    $testMail=$existMail->fetch();
    if(isset($testMail['idUser'])){
        
        $motDePasse="des".$_POST['mdp']."sapins";
        $motDePasse=hash('sha512',$motDePasse);
        
        $requeteUser->execute(array($_POST['mail']));
        $donneeUser=$requeteUser->fetch();
             
        if ($donneeUser['motDePasseUser']===$motDePasse){
            $_SESSION['idUser'] = $donneeUser['idUser'];
            $_SESSION['nom'] = $donneeUser['nomUser'];
            $_SESSION['prenom'] = $donneeUser['prenomUser'];
            $_SESSION['dateNaissance'] = $donneeUser['dateNaissanceUser'];
            $_SESSION['mail'] = $donneeUser['idUser'];
            $_SESSION['numTel'] = $donneeUser['idUser'];
            $_SESSION['statut'] = $donneeUser['idUser'];
            $_SESSION['nbTrajets'] = $donneeUser['idUser'];
            $_SESSION['cagnotte'] = $donneeUser['idUser'];
            header('Location: profilPerso.html');
        } else{
            echo('Le mot de passe est incorrect');
        } 
    } else{
        echo('L\'adresse mail n\'existe pas');
    }
} else{
    echo('Il manque des informations');
}
    
$existMail->closeCursor();
?>

