<!doctype html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="refresh" content="300">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Nunito:400,600|Open+Sans:400,600,700" rel="stylesheet">
    <link rel="stylesheet" href="../css/spur.css">
    <link rel="stylesheet" href="../css/latoja.datepicker.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.min.js"></script>
    <script src="../js/chart-js-config.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://d3js.org/d3.v4.min.js"></script>
    <script src='https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css' rel='stylesheet' />
    <script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.min.js'></script>
    <link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.css' type='text/css' />
    <!-- Promise polyfill script required to use Mapbox GL Geocoder in IE 11 -->
    <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.min.js"></script>

    <script src="../js/export.js"></script>
    <script src="../js/thermometer.min.js"></script>
    <script src="../js/spur.js"></script>
    <script src="../js/main.js"></script>
    <script src="../js/charts.js"></script>
    <title>GreenR - Température</title>
</head>
<body onload="change_color('#28a745');">
<?php
if(!$_GET['box'])
    header('Location: tracking.php?error=true');
else
    $box= $_GET['box'];
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
                <a href="dashboard.php?box=<?php echo $box?>" class="dash-nav-item">
                    <i class="fas fa-chart-bar"></i> Dashboard </a>
            </div>
            <div class="dash-nav-dropdown ">
                <a href="#!" class="dash-nav-item dash-nav-dropdown-toggle">
                    <i class="fas fa-tachometer-alt"></i> Mesures </a>
                <div class="dash-nav-dropdown-menu">
                    <a href="temp.php?box=<?php echo $box?>" class="dash-nav-dropdown-item">Température</a>
                    <a href="CO2.php?box=<?php echo $box?>" class="dash-nav-dropdown-item">CO2</a>
                    <a href="humidity.php?box=<?php echo $box?>" class="dash-nav-dropdown-item">Humidité</a>
                </div>
            </div>
            <div class="dash-nav-dropdown">
                <a href="../../api/stats.php" class="dash-nav-item">
                    <i class="fas fa-broadcast-tower"></i> API </a>
            </div>
            <div class="dash-nav-dropdown">
                <a href="about.html" class="dash-nav-item">
                    <i class="fas fa-info"></i> A propos </a>
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
                <div class="dropdown tools-item">
                    <a href="#" class="" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-exclamation-circle"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                        <p class="dropdown-item" id="item-box"></p>
                    </div>
                </div>
            </div>

        </header>
        <main class="dash-content">
            <div class="container-fluid">
                <h1 class="dash-title">Température</h1>
                <div class="row">
                    <div class="col-xl-4 hidden">
                        <div class="card spur-card ctr">
                                <div class="card-body " id="thermometer"></div>
                            </div>
                        </div>


                    <div class="col-xl-4">
                        <div class="card spur-card" id="info_map">
                            <div class="card-header bg-success text-white">
                                <div class="spur-card-icon">
                                    <i class="fas fa-poll-h"></i>
                                </div>
                                <div class="spur-card-title">Information</div>
                            </div>
                            <div class="card-body">
                                <table class="table table-hover table-in-card">
                                    <tbody>
                                    <tr>
                                        <th scope="row">N°Box</th>
                                        <td id="item-box-alone"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Position</th>
                                        <td id="item-pos"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Température</th>
                                        <td class="item-temp"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Température Moyenne</th>
                                        <td class="item-temp-avg"></td>


                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <div class="stats stats-success">
                            <h3 class="stats-title"> Température </h3>
                            <div class="stats-content">
                                <div class="stats-icon">
                                    <i class="fas fa-thermometer-quarter"></i>
                                </div>
                                <div class="stats-data">
                                    <div class="stats-number item-temp"></div>
                                    <div class="stats-change">
                                        <span class="stats-timeframe item-time"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>



                    <div class="col-xl-4">
                        <div class="card spur-card hidden">
                            <div id="map_small"></div>
                                <script>
                                    mapboxgl.accessToken = 'pk.eyJ1IjoiYWpheG8iLCJhIjoiY2p1dzltb3cyMDlkNTRkbjVwc29hcjV3MyJ9.8XN4bH0Iz_Qzc5RFAUccMA';
                                    var map = new mapboxgl.Map({
                                        container: 'map_small',
                                        style: 'mapbox://styles/mapbox/streets-v11',
                                        center: [4.612329,50.665433], // starting position
                                        zoom: 10 // starting zoom
                                    });
                                </script>
                                </div>




                        <div class="stats stats-success">
                            <h3 class="stats-title"> Température<br>Moyenne</h3>
                            <div class="stats-content">
                                <div class="stats-icon">
                                    <i class="fas fa-thermometer"></i>
                                </div>
                                <div class="stats-data">
                                    <div class="stats-number item-temp-avg"></div>
                                    <div class="stats-change">
                                        <span class="stats-timeframe"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-xl-12">
                        <div class="card spur-card">
                            <div class="card-header bg-success text-white">
                                <div class="spur-card-icon">
                                    <i class="far fa-calendar-alt"></i>
                                </div>
                                <div class="spur-card-title"> Calendrier </div>
                            </div>
                            <div class="card-body ">
                                <div class="row ctr">
                                <div class='col-md-5'>
                                    <div class="form-group">
                                        <div class='input-group date' >
                                            <input type='text' class="form-control datepicker" id="date_from" placeholder="Date debut" />
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-5'>
                                    <div class="form-group">
                                        <div class='input-group date'>
                                            <input type='text' class="form-control datepicker" id="date_to" placeholder="Date fin"/>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" >
                    <div class="col-sm-6 ">
                        <div class="card spur-card">
                            <div class="card-header  bg-success text-white">
                                <div class="spur-card-icon">
                                    <i class="fas fa-chart-bar"></i>
                                </div>
                                <div class="spur-card-title"> Graphique de l'évolution </div>
                                <div class="spur-card-menu">
                                    <div class="dropdown show">
                                        <a class="fas fa-file-export card_menu_button"  id="dropdown_export" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown">
                                            <h6 class="dropdown-header">Exporter</h6>
                                            <div class="dropdown-divider"></div>
                                            <a  class="dropdown-item export_pdf2">PDF</a>
                                            <a class="dropdown-item">XLS</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body spur-card-body-chart">
                                <canvas id="spurChartjsRadar"></canvas>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 ">
                        <div class="card spur-card">
                            <div class="card-header bg-success text-white">
                                <div class="spur-card-icon">
                                    <i class="fas fa-chart-bar"></i>
                                </div>
                                <div class="spur-card-title"> Graphique General </div>
                                <div class="spur-card-menu">
                                    <div class="dropdown show">
                                        <a class="fas fa-file-export card_menu_button"  id="dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown">
                                            <h6 class="dropdown-header">Exporter</h6>
                                            <div class="dropdown-divider"></div>
                                            <a  class="dropdown-item export_pdf">PDF</a>
                                            <a class="dropdown-item">XLS</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body spur-card-body-chart">
                                <canvas id="spurChartjsBar"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
</body>
</html>