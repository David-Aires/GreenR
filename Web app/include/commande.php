<!DOCTYPE html>
<html lang="fr">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link rel="icon" href="../assets/images/logo_3.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="unitTest.js"></script>

    <title>Green-R-commander</title>

    <!-- Additional CSS Files -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/font-awesome.css">
    <link rel="stylesheet" type="text/css" href="css/templatemo-art-factory.css">
    <link rel="stylesheet" type="text/css" href="css/owl-carousel.css">
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
                                <li><a href="commande.php" id="lien">Commander</a></li>
                                <li><a href="assistance.php" id="lien">Assistance</a></li>
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

<div class="boitier-image">
    <img src="images/boitier-greenr.png" id="boitier"><br>
    <button class="bouton3d" onclick="afficher3d()">Visualiser en 3d</button><br>
    <div class="container">
       <div class="frame3d" style="display: none">
            <iframe id="frame3d" frameborder="0" height="600px" width="80%" allowFullScreen="true" src="https://myproduct.visiativ.com:443/my/easysite/catalog3d/libraryitem?o=VkN0MmF6ZDJkVGhoVkRFMll5czFNSFpvWVZWc2N6bFZXbGhJZDA5VWVVSjVPVWxPU2s1RVlUQnFNbUoyZEVGTk9XNW1lV0ZuUFQwPQ==" UIcontrols="1"></iframe>
        </div>
    </div>
</div>

<section>
    <div class="container">
        <div class="form-commande">
            <form class="form-style-9" action="https://formspree.io/greenr.be@gmail.com" method="POST">
                <ul>
                    <li>
                        <input type="text" name="nom" class="field-style field-split align-left" placeholder="Nom complet" required/>
                        <input type="email" name="email" class="field-style field-split align-right" placeholder="Email" required/>
                        <input type="text" name="adresse" class="field-style field-split align-left" placeholder="Adresse" required/>
                        <input type="tel" name="tel" class="field-style field-split align-right" placeholder="Numéro de téléphone" required/>

                    </li>
                    <li>
                        <label class="qui">Je suis :</label><br>
                        <input type="radio" name="qui" value="etudiant" onclick="console.log(document.getElementById('autre').style.display='none')"> Étudiant<br>
                        <input type="radio" name="qui" value="professeur" onclick="console.log(document.getElementById('autre').style.display='none')"> Professeur<br>
                        <input type="radio" name="qui" value="particulier" onclick="console.log(document.getElementById('autre').style.display='none')"> Particulier<br>
                        <input type="radio" name="qui" value="autre" onclick="console.log(document.getElementById('autre').style.display='block')"> Autre
                        <input type="text" id="autre" name="autre" style="display: none" onblur="verifAutre(this)"><br><br>
                    </li>
                    <li>
                        <label>Expliquez-nous en quelques mots pourquoi voulez-vous notre boîtier. <textarea name="pq" class="field-style" onblur="verifPQ(this)" required></textarea></label>
                    </li>
                    <li>
                        <input type="submit" value="envoyer">
                    </li>
                </ul>
            </form>
        </div>
    </div>
</section>

<!-- jQuery -->
<script src="../assets/js/jquery-2.1.0.min.js"></script>

<!-- Plugins -->
<script src="../assets/js/owl-carousel.js"></script>
<script src="../assets/js/scrollreveal.min.js"></script>
<script src="../assets/js/waypoints.min.js"></script>
<script src="../assets/js/jquery.counterup.min.js"></script>
<script src="../assets/js/imgfix.min.js"></script>

<!-- Global Init -->
<script src="../assets/js/custom.js"></script>
<script src="main.js"></script>

</body>
</html>