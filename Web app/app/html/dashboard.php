<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="refresh" content="300">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Nunito:400,600|Open+Sans:400,600,700" rel="stylesheet">
    <link rel="stylesheet" href="../css/spur.css">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/file-saver@2.0.2/dist/FileSaver.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.1/xlsx.full.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.min.js"></script>
    <script src="../js/chart-js-config.js"></script>
    <script src="../js/export.js"></script>
    <script src="../js/main.js"></script>
    <script src="../js/charts.js"></script>
    <title>GreenR - Data Viewer</title>
</head>

<body>
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
                    <a href="about.php" class="dash-nav-item">
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
                    <div class="row dash-row">
                        <div class="col-xl-4">
                            <div class="stats stats-primary">
                                <h3 class="stats-title"> Humidité </h3>
                                <div class="stats-content">
                                    <div class="stats-icon">
                                        <i class="fas fa-tint"></i>
                                    </div>
                                    <div class="stats-data">
                                        <div class="stats-number" id="item-humidity"></div>
                                        <div class="stats-change">
                                            <span class="stats-timeframe time"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <div class="stats stats-success ">
                                <h3 class="stats-title"> Température </h3>
                                <div class="stats-content">
                                    <div class="stats-icon">
                                        <i class="fas fa-thermometer-empty"></i>
                                    </div>
                                    <div class="stats-data">
                                        <div class="stats-number" id="item-temp"></div>
                                        <div class="stats-change">
                                            <span class="stats-timeframe time"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <div class="stats stats-danger">
                                <h3 class="stats-title"> CO2 </h3>
                                <div class="stats-content">
                                    <div class="stats-icon">
                                        <i class="fas fa-hot-tub"></i>
                                    </div>
                                    <div class="stats-data">
                                        <div class="stats-number" id="item-CO2"></div>
                                        <div class="stats-change">
                                            <span class="stats-timeframe time"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 ">
                            <div class="card spur-card">
                                <div class="card-header">
                                    <div class="spur-card-icon">
                                        <i class="fas fa-chart-bar"></i>
                                    </div>
                                    <div class="spur-card-title"> Graphique General </div>
                                    <div class="spur-card-menu">
                                        <div class="dropdown show">
                                            <a  class="fas fa-clock card_menu_button"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown">
                                                <a class="dropdown-item">Aujourdhui</a>
                                                <a class="dropdown-item">ce mois-ci</a>
                                                <a class="dropdown-item">cette année</a>
                                            </div>
                                        </div>
                                        &nbsp;
                                        &nbsp;
                                        <div class="dropdown show">
                                            <a class="fas fa-file-export card_menu_button"  id="dropdown_export" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown">
                                                <h6 class="dropdown-header">Exporter</h6>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item export_pdf">PDF</a>
                                                <a class="dropdown-item export_xls">XLS</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body spur-card-body-chart">
                                    <canvas id="spurChartjsBar"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="card spur-card">
                                <div class="card-header">
                                    <div class="spur-card-icon">
                                        <i class="fas fa-bell"></i>
                                    </div>
                                    <div class="spur-card-title"> Notifications </div>
                                </div>
                                <div class="card-body ">
                                    <div class="notifications">
                                        <a href="#!" class="notification">
                                            <div class="notification-icon">
                                                <i class="fas fa-inbox"></i>
                                            </div>
                                            <div class="notification-text">Mise en service</div>
                                            <span class="notification-time">3 jours</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="../js/spur.js"></script>
</body>

</html>