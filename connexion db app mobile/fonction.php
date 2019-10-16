<?php
	function connexionPDO(){
		$login = "";
		$mdp = "";
		$bd = "db_GreenR";
		$serveur = "127.0.0.1";
		
		try{
			$conn = new PDO("mysql:host=$serveur;dbname=$bd, $login, $mdp");
			return $conn
		}catch(PDOexception $e){
			print "Erreur de connexion PDO";
			die();
		}
	}
		
?>