<!doctype html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Nunito:400,600|Open+Sans:400,600,700" rel="stylesheet">
    <link rel="stylesheet" href="../css/spur.css">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/notify.min.js"></script>
    <script src='https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css' rel='stylesheet' />
    <script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.min.js'></script>
    <link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.css' type='text/css' />
    <!-- Promise polyfill script required to use Mapbox GL Geocoder in IE 11 -->
    <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
    <script src="../js/main.js"></script>
    <title>GreenR - Tracking Map</title>
</head>



<body>
<?php
if($_GET['error']=="true")
    echo '<script>notify();</script>';
?>
<div class="dash">
    <div class="dash-nav dash-nav-indigo">
        <header>
            <a href="#!" class="menu-toggle">
                <i class="fas fa-bars"></i>
            </a>
            <a href="../../index.php" class="spur-logo"><span> Green</span><img src="../../assets/images/logo_4.png" alt="GreenR icon" width="40" height="40"></a>
        </header>
        <nav class="dash-nav-list">
            <a href="tracking.php" class="dash-nav-item">
                <i class="fas fa-map-marked-alt"></i> Tracking Map </a>
            <div class="dash-nav-dropdown ">
                <a href="dashboard.php" class="dash-nav-item">
                    <i class="fas fa-chart-bar"></i> Dashboard </a>
            </div>
            <div class="dash-nav-dropdown ">
                <a href="#!" class="dash-nav-item dash-nav-dropdown-toggle">
                    <i class="fas fa-tachometer-alt"></i> Mesures </a>
                <div class="dash-nav-dropdown-menu">
                    <a href="temp.php" class="dash-nav-dropdown-item">Température</a>
                    <a href="CO2.php" class="dash-nav-dropdown-item">CO2</a>
                    <a href="humidity.php" class="dash-nav-dropdown-item">Humidité</a>
                </div>
            </div>
            <div class="dash-nav-dropdown">
                <a href="../../api/stats.php" class="dash-nav-item">
                    <i class="fas fa-broadcast-tower"></i> API </a>
            </div>
        </nav>
    </div>
    <div class="dash-app">
        <header class="dash-toolbar">
            <a href="#!" class="menu-toggle">
                <i class="fas fa-bars"></i>
            </a>
            <div class="tools">
                <a href="https://github.com/David-Aires/GreenR" target="_blank" class="tools-item">
                    <i class="fab fa-github"></i>
                </a>
                <a href="../../include/commande.php" class="tools-item">
                    <i class="fas fa-cart-arrow-down"></i>

                </a>
            </div>

        </header>
            <main class="dash-content">
                <div class="container-fluid">
                    <h1 class="dash-title">Tracking Map</h1>
                    <div class="row dash-row">
                        <div class="col-sm-10">
                            <div class="card spur-card">
                                <div class="card-header ">
                                    <div class="spur-card-icon">
                                        <i class="fas fa-globe-americas"></i>
                                    </div>
                                    <div class="spur-card-title"> AirBox Map </div>
                                </div>
                                <div class="card-body ">
                                    <style>
                                        #map {width: auto; height: 600px;}
                                    </style>
                                    <div id='map'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <script src="../js/map.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="../js/spur.js"></script>
</body>

</html>