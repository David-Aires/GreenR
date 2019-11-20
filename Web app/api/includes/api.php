<!DOCTYPE html>
<html lang="fr">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link rel="icon" href="../assets/images/logo_3.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="unitTest.js"></script>

    <title>Green-R-API</title>
    <!--

    ART FACTORY

    https://templatemo.com/tm-537-art-factory

    -->
    <!-- Additional CSS Files -->
    <link rel="stylesheet" type="text/css" href="includes/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="includes/css/font-awesome.css">
    <link rel="stylesheet" type="text/css" href="includes/css/templatemo-art-factory.css">
    <link rel="stylesheet" type="text/css" href="includes/css/owl-carousel.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

</head>

<body>



<!-- ***** Header Area Start ***** -->
<header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    <!-- ***** Logo Start ***** -->
                    <a href="../index.php" class="logo">Green-R</a>
                    <!-- ***** Logo End ***** -->
                    <!-- ***** Menu Start ***** -->
                    <ul class="nav">
                        <li class="scroll-to-section"><a href="../index.php#welcome" class="active"><i class='fas fa-home'></i> Accueil</a></li>
                        <li class="scroll-to-section"><a href="../index.php#about">Notre projet</a></li>
                        <li class="scroll-to-section"><a href="../index.php#about2">Mesures</a></li>
                        <li class="scroll-to-section"><a href="../index.php#services">L'équipe</a></li>
                        <li class="submenu">
                            <a href="javascript:;">Boîtier</a>
                            <ul>
                                <li><a href="../include/commande.php" id="lien">Commander</a></li>
                                <li><a href="../include/assistance.php" id="lien">Assistance</a></li>
                            </ul>
                        </li>
                        <li class="scroll-to-section"><a href="../index.php#contact-us">Nous contacter</a></li>
                        <li class="scroll-to-section"><a href="../app/html/tracking.php" style="color: black"><i class="fa fa-database" style="color: black"></i> Données</a></li>
                    </ul>
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    <!-- ***** Menu End ***** -->
                </nav>
            </div>
        </div>
    </div>
</header>
<!-- ***** Header Area End ***** -->


<div class="container">
    <div class="form-style-10">
        <h2>Utilisation de notre API :</h2>
        <h5>
            Afficher toutes les données de la table de mesures :
        </h5>
        <p>Les différentes tables possibles sont : </p>
        <ul>
            <li>AIR_STAT</li>
            <li>AIR_BOX</li>
            <li>POSITION</li>
            <li>CROSS_CENTER</li>
        </ul><br>
        <p>
            Exemple : je veux afficher <strong>toutes les données</strong> de la table <strong>AIR_STAT</strong> de la box <strong>1</strong>->
            <a href="https://green-r.be/api/stats.php?box=1&table=AIR_STAT" target="_blank">https://green-r.be/api/stats.php?box=1&table=AIR_STAT</a>
        </p>
        <h5>Afficher la dernière relevée d'une table</h5>
        <p>Exemple : je veux afficher la <strong>dernière relevée</strong> de la table <strong>POSITION</strong> de la box <strong>1</strong>->
            <a href="https://green-r.be/api/stats.php?box=1&table=POSITION&relever=dernier" target="_blank">https://green-r.be/api/stats.php?box=1&table=POSITION&relever=dernier</a></p>
        <h5>
            Afficher une colonne précise d'une table :
        </h5>
        <p>Exemple : je veux afficher la <strong>température</strong> de la table <strong>AIR_STAT</strong> de la box <strong>1</strong>->
            <a href="https://green-r.be/api/stats.php?box=1&table=AIR_STAT&mesure=TEMPERATURE" target="_blank">https://green-r.be/api/stats.php?box=1&table=AIR_STAT&mesure=TEMPERATURE</a>
        </p>
        <h5>
            Afficher une mesure précise entre deux dates d'une box :
        </h5>
        <p>
            Il faut utiliser le format de date '22-09-2008'.<br>
            Exemple : je veux afficher <strong>l'humidité</strong> de la table <strong>AIR_STAT</strong> de la box <strong>1</strong> entre le 22-09-2008 et le 01-11-2019 ->
            <a href="https://green-r.be/api/stats.php?box=1&table=AIR_STAT&mesure=HUMIDITY&from=22-09-2008&to=01-11-2019" target="_blank">https://green-r.be/api/stats.php?box=1&table=AIR_STAT&mesure=HUMIDITY&from=22-09-2008&to=01-11-2019</a>
        </p>
        <h5>
            Afficher la dernière position de chaque box :
        </h5>
        <p>
            <a href="https://green-r.be/api/stats.php?position=ALL" target="_blank">https://green-r.be/api/stats.php?position=ALL</a>
        </p>
        <h5>
            Afficher le relever d'une table entre deux dates d'une box :
        </h5>
        <p>
            Il faut utiliser le format de date '22-09-2008'.<br>
            Exemple : je veux afficher le <strong>dernier relevé</strong> de la table <strong>AIR_STAT</strong> de la box <strong>1</strong> entre le <strong>22-09-2008</strong> et le <strong>01-11-2019</strong> ->
            <a href="https://green-r.be/api/stats.php?box=1&table=AIR_STAT&from=22-09-2008&to=01-11-2019" target="_blank">https://green-r.be/api/stats.php?box=1&table=AIR_STAT&from=22-09-2008&to=01-11-2019</a>
        </p>
        <h5>Afficher la moyenne des différentes mesures</h5>
        <p>
            Il faut utiliser le format de date '22-09-2008'.<br>
            Exemple : je veux afficher la <strong>moyenne</strong> de la table <strong>AIR_STAT</strong> de la box <strong>1</strong> entre le <strong>22-09-2008</strong> et le <strong>01-11-2019</strong> ->
            <a href="https://green-r.be/api/stats.php?box=1&from=22-09-2008&to=01-11-2019&action=moyenne" target="_blank">https://green-r.be/api/stats.php?box=1&from=22-09-2008&to=01-11-2019&action=moyenne</a>
        </p>

    </div>
</div>

<!-- jQuery -->
<script src="../assets/js/jquery-2.1.0.min.js"></script>

<!-- Bootstrap -->
<script src="../assets/js/popper.js"></script>
<script src="../assets/js/bootstrap.min.js"></script>

<!-- Plugins -->
<script src="../assets/js/owl-carousel.js"></script>
<script src="../assets/js/scrollreveal.min.js"></script>
<script src="../assets/js/waypoints.min.js"></script>
<script src="../assets/js/jquery.counterup.min.js"></script>
<script src="../assets/js/imgfix.min.js"></script>

<!-- Global Init -->
<script src="../assets/js/custom.js"></script>

</body>
</html>