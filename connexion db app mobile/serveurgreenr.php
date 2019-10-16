<?php
include "fonction.php"

// contrôle réceprion paramétre

if(iset($_REQUEST["operation"])){
	
	//demande de récup des derniére mesure
	if($_REQUEST["operation"]=="dernier"){
		
		try{
			print ("dernier%")
			$cnx connexionPDO();
			$req = $cnx->prepare("select TEMPERATURE, HUMIDITY from AIR_STAT order by DATE_TIME desc");
			$req->execute();
			if($ligne = $req->fetch(PDO::FETCH_ASSOC)){
				print(json_encode($ligne));
			}
		}catch(PDOException $e){
			print ("Erreur !".$e->getMessage();
			die();
		}
	}
}

?>