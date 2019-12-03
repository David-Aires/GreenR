<!DOCTYPE html>
<html lang="fr">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link rel="icon" href="../assets/images/logo_3.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href='http://fonts.googleapis.com/css?family=Bitter' rel='stylesheet' type='text/css'>

    <script src="main.js"></script>

    <title>Green-R-assistance</title>
    <!--

    ART FACTORY

    https://templatemo.com/tm-537-art-factory

    -->
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


<section>
    <div class="container">
        <div class="assistance" id="top">
            <div class="assistance-menu">
                <img id="logo" src="../assets/images/logo_4.png">
                <h2>Comment pouvons-nous vous aider ?</h2>
                <hr>
                <a onclick="afficherForm('.commande')">
                    <div>
                        <img class="icon" src="../assets/images/31821.png">
                        Aide relative à une commande
                    </div>
                </a>
                <a onclick="afficherForm('.technique')">
                    <div>
                        <img class="icon" src="../assets/images/boitier.png">
                        Assisstance pour le boîtier
                    </div>
                </a>
                <br>
                <a onclick="afficherForm('.panne')">
                    <div>
                        <img class="icon" src="../assets/images/reparation.png">
                        Le boîtier ne fonctionne plus
                    </div>
                </a>
                <a href="../index.php#contact-us">
                    <div>
                        Autre
                    </div>
                </a>
                <hr>
            </div>
                <div class="formulaire">
                    <div class="commande">
                        <h3>Aide relative à une commande</h3>
                        <p>
                            Veuillez si possible vérifier les différentes étapes ci-dessous avant de nous contacter.
                        </p>
                        <h4>1) Attente d'une réponse d'une commande</h4>
                        <p>Il se peut que votre mail de demande d'un boîtier n'ait toujours pas été lu par un membre de notre équipe.</p>
                        <p>
                            Comme nous sommes encore des étudiants bien occupés par nos études, nous n'avons pas toujours l'occasion d'aller lire nos mails tous les jours.
                            Nous vous invitons donc à encore patienter quelques jours pour que nous puissions vous répondre.
                        </p>
                        <p>Si toutefois vous n'avez toujours pas reçu de réponse une semaine après l'envoi d'une commande, veuillez nous contacter via le formulaire ci-dessous.</p>
                        <h4>2) Annuler une commande</h4>
                        <p>Si vous désirez annuler une commande pour toute raison, nous vous invitons à remplir le formulaire ci-dessous</p>
                        <h4 style="padding-bottom: 3px">3) Nous contacter</h4>
                        <form class="form-style-9" action="https://formspree.io/greenr.be@gmail.com" method="POST">
                            <ul>
                                <li>
                                    <input type="text" name="nom" class="field-style field-split align-left" placeholder="Nom complet" required/>
                                    <input type="email" name="emil" class="field-style field-split align-right" placeholder="Adresse email" required/>
                                </li>
                                <li>
                                    <input type="text" name="telephone" class="field-style field-full" placeholder="Numéro de téléphone" required/>
                                </li>
                                <li>
                                    <p style="text-decoration: underline">Précision de la demande</p>
                                    <input type="radio" name="probleme" value="rouge-off" class="input espace"/> Je n'ai toujours pas reçu d'email pour ma commande<br>
                                    <input type="radio" name="probleme" value="bleu-off" class="input espace"/> Je souhaite annuler ma commande<br>
                                </li>
                                <li>
                                    <textarea name="field5" class="field-style" placeholder="Développer si nécessaire votre demande"></textarea>
                                </li>
                                <li>
                                    <input type="submit" value="Envoyer" />
                                </li>
                            </ul>
                        </form>
                        <div class="bouton-retour">
                            <button class="bouton" onclick="window.location.href='#top'">Retour</button>
                        </div>
                    </div>
                    <div class="technique">
                        <h3>Assistance technique</h3>
                        <p>
                            Avant de nous contacter pour un problème technique, nous vous invitons à lire les différents points ci-dessous
                            afin de régler le problème lié à votre boîtier.
                        </p>
                        <p>
                            Si aucun des points suivant n'a permis de résoudre votre problème, vous pouvez nous contacter en remplissant le formulaire ci-dessous.
                        </p>

                        <h4>
                            1) Vérification de la batterie
                        </h4>
                        <p>
                            Une petite lumière <strong style="color: blue">bleue</strong> (LED) se situant à l'arrière du boîtier vous permet de voir s'il reste encore de la batterie dans le boîtier.
                        </p>
                        <p>
                            Si cette lumière est éteinte, cela peut signifier que la batterie est plate.<br>
                            Nous vous conseillons donc de recharger le boîtier via le chargeur fournis.<br>
                            Avant de charger la batterie, changer la position de l’interrupteur sur « DATA OFF » pour éviter que le boîtier n’envoie des données non voulues lorsqu’il est chargé.
                        </p>
                        <p>
                            Si vous utilisez un autre chargeur, veuillez respecter les informations de recharge du boîtier fournies dans le manuel d’utilisation.
                        </p>
                            Lorsque la batterie sera chargée, la lumière <strong style="color: blue">bleue</strong> (LED) se rallumera, vous n’aurez donc qu’à placer le boîtier sur son support et mettez l’interrupteur sur « DATA ON ».

                        </p>
                        <p>
                            Si la lumière bleue ne se rallume toujours pas après 24 de recharge, le problème peut venir de l’intérieur du boîtier. Nous vous recommandons de nous contacter pour nous renvoyer le boîtier.<br>
                            Si vous avez l’âme d’un « maker », vous pouvez bien évidemment réparez celui-ci vous-même.

                        </p>
                        <h4>2) Vérification de la connectivité</h4>
                        <p>
                            Le boîtier possède une lumière (LED) <strong style="color: red">rouge</strong> qui permet de vérifier si le boîtier :
                            <ul>
                                <li>Est connecté au wifi</li>
                                <li>A un accès internet</li>
                                <li>Est connecté à la base de données</li>
                            </ul>
                        </p>
                        <div>
                            Si un de ces paramètres n’est plus disponibles, le boîtier se coupera et la lumière <strong style="color: red" class="blink_me">rouge</strong>
                            clignotera.<br>
                            Le problème peut alors être :
                        <ul class="erreur formulaire">
                            <li>Le boîtier se situe trop loin du WIFI</li>
                            <i>Rapprochez le boîtier du point d’accès WIFI déterminé à l’avance avec l’installateur.</i>
                            <i>Si vous désirez connecter le boîtier à un nouveau point WiFi veuillez nous contacter via le
                                formulaire ci-dessous.</i>
                            <li>Le boîtier est connecté au wifi mais n’a pas un accès Internet</li>
                            <i>Veuillez-vous assurez que votre routeur / émetteur WiFi soit en marche et soit
                                fonctionnel.</i>
                            <li>Il ne possède plus les autorisations pour se connecter à la base de données</li>
                            <i>Veuillez nous contacter via le formulaire ci-dessous.</i>
                            <li>Autre problème venant du code source</li>
                            <i>Veuillez nous contacter via le formulaire ci-dessous.</i>
                        </ul>
                        </div>
                        <p><br>
                        Le boîtier tentera de se reconnecter automatiquement au WiFi déterminé lors de l’installation.
                        </p>
                        <h4 style="padding-bottom: 3px">3) Nous contacter*</h4>
                        <i style="font-size: 12px;">* Après vérification des 2 étapes précédentes.</i>

                        <form class="form-style-9" action="https://formspree.io/greenr.be@gmail.com" method="POST">
                            <ul>
                                <li>
                                    <input type="text" name="nom" class="field-style field-split align-left" placeholder="Nom complet" required/>
                                    <input type="email" name="emil" class="field-style field-split align-right" placeholder="Adresse email" required/>

                                </li>
                                <li>
                                    <input type="text" name="telephone" class="field-style field-split align-left" placeholder="Numéro de téléphone" required/>
                                    <input type="number" name="box" class="field-style field-split align-right" placeholder="Numéro de votre boîtier" required/>
                                </li>
                                <li>
                                    <p style="text-decoration: underline">Quel est le problème ?</p>
                                    <input type="radio" name="probleme" value="rouge-off" class="input espace"/> Lumière <strong style="color: red">rouge</strong> éteinte<br>
                                    <input type="radio" name="probleme" value="bleu-off" class="input espace"/> Lumière <strong style="color: blue">bleue</strong> éteinte<br>
                                    <input type="radio" name="probleme" value="bleu-on" class="input espace"/> Lumière <strong style="color: red">rouge</strong> allumée - autre problème<br>
                                    <input type="radio" name="probleme" value="bleu-on" class="input espace"/> Lumière <strong style="color: blue">bleue</strong> allumée - autre problème<br>
                                </li>
                                <li>
                                    <textarea name="field5" class="field-style" placeholder="Expliquez plus précisement le problème" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" value="Envoyer" />
                                </li>
                            </ul>
                        </form>
                        <div class="bouton-retour">
                            <button class="bouton" onclick="window.location.href='#top'">Retour</button>
                        </div>
                    </div>
                    <div class="panne">
                        <h3>Nous renvoyer le boîtier</h3>
                        <p>
                            Avant d’établir une panne de votre boîtier, nous vous invitons à suivre les différentes étapes
                            de la section « <a onclick="afficherForm('.technique')"><u style="color: red;cursor: pointer">assistance technique</u></a> » car le boîtier peut juste avoir un problème technique et non être en panne.
                        </p>
                        <p>Veuillez préciser le plus possible comment votre boîtier est tombé en panne. Nous pourrons alors vous répondre le plus vite possible afin d'essayer de résoudre cette panne.</p>
                        <p>Si la panne ne peut pas être résolue à distance, nous prendrons contact avec vous afin d'établir un échange du boîtier.</p>
                        <p>Le boîtier échangé sera bien entendu déjà configuré pour votre installation.</p>
                        <form class="form-style-9" action="https://formspree.io/greenr.be@gmail.com" method="POST">
                            <ul>
                                <li>
                                    <input type="text" name="nom" class="field-style field-split align-left" placeholder="Nom complet" required/>
                                    <input type="email" name="email" class="field-style field-split align-right" placeholder="Adresse email" required/>
                                </li>
                                <li>
                                    <input type="number" name="box" class="field-style field-full" placeholder="Numéro du boîtier" required/>
                                </li>
                                <li>
                                    <input type="text" name="telephone" class="field-style field-full" placeholder="Numéro de téléphone" required/>
                                </li>
                                <li>
                                    <textarea name="field5" class="field-style" placeholder="Comment la panne est arrivée ?" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" value="Envoyer" />
                                </li>
                            </ul>
                        </form>
                        <div class="bouton-retour">
                            <button class="bouton" onclick="window.location.href='#top'">Retour</button>
                        </div>
                    </div>
                </div>
        </div>


    </div>
</section>


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