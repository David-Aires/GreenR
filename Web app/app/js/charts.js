var data_temp =[];
var data_CO2 =[];
var data_hum =[];
var data_time =[];
var data_flux=[];
var data_moy;
var date_plus;
var box = (document.location.href).slice(-1);
var date = new Date();
date = date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
var date_plus = new Date();
date_plus.setDate(date_plus.getDate()+1);
date_plus = date_plus.getDate()+"-"+(date_plus.getMonth()+1)+"-"+date_plus.getFullYear();
var chartInstance;
var chartInstance2;

function change_value_charts(from,to){
    var mesure="";
    var label=[];
    switch (nom) {
        case 'temp':
            mesure="TEMPERATURE";
            break;
        case 'CO2':
            mesure="CO2";
            break;
        case 'humidity':
            mesure="HUMIDITY";
            break;
    }
    ajaxGet("https://green-r.be/api/stats.php?box="+box+"&table=AIR_STAT&mesure="+mesure+"&from="+from+"&to="+to, function (reponse) {
        var req = JSON.parse(reponse);
        data_flux=[];
        data_time=[];
        chartInstance.data.datasets[0].data=[];

        chartInstance.data.labels=[];
        chartInstance.data.datasets[0].data=[];
        chartInstance2.data.labels=[];
        chartInstance2.data.datasets[0].data=[];
        for(let pas=0;pas<req.length;pas++) {
            data_flux.push(req[pas][mesure]);
            data_time.push(req[pas].DATE);
            chartInstance.data.labels.push("");
            chartInstance.data.datasets[0].data.push(req[pas][mesure]);

            chartInstance2.data.labels.push("");
            chartInstance2.data.datasets[0].data.push(req[pas][mesure]);

        }
        chartInstance.update();
        chartInstance2.update();

    });
}

$('#date_to').ready(function() {
    $('#date_to').change(function(){
        var date_from = $('#date_from').val();
        var date_to = $('#date_to').val();
        if( date_from=="" ||  date_from == date_to){
            if(date_from == date_to) {
                console.log("egal");
                $("#date_from").css({
                    borderColor : 'red',
                    color : 'red'
                });
                $("#date_from").val('Veuillez selectionner une date différente!')
                $("#date_to").css({
                    borderColor : 'red',
                    color : 'red'
                });
                $("#date_to").val('Veuillez selectionner une date différente!')
            }
        } else {
            $("#date_from").css({
                borderColor : 'green',
                color : 'green'
            });
            $("#date_to").css({
                borderColor : 'green',
                color : 'green'
            });
            change_value_charts(date_from,date_to);
        }
    });
});

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['CO2', parseInt(data_flux[data_flux.length-1])],
    ]);

    if(data_moy<6000) {
        var options = {
            width: 270, height: 295,
            redFrom: 5000, redTo: 6000,
            yellowFrom: 4000, yellowTo: 5000,
            minorTicks: 5, max: 6000
        };
    } else {
        var options = {
            width: 270, height: 295,
            redFrom: 6000, redTo: (parseFloat(data_moy).toFixed(2))+200,
            yellowFrom: 0, yellowTo: 0,
            minorTicks: 5, min:6000,
            max: (parseFloat(data_moy).toFixed(2))+200
        };
    }

    var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

    chart.draw(data, options);
}

function setDefault() {
    if(nom=="dashboard") {
        $('#item-humidity').text("No Data");
        $('#item-temp').text("No Data");
        $('#item-CO2').text("No Data");
        $('.time').text("No Data");
    } else if(nom=="temp"){
        $('.item-temp').html("No Data");
        $('.item-temp-avg').html("No Data");
    } else if(nom=="CO2") {
        $('.item-CO2').html("No Data");
        $('.item-CO2-avg').html("No Data");
    } else if(nom=="humidity") {
        $('.item-hum').html("No Data");
        $('.item-hum-avg').html("No Data");
    }
}

function initBox(){
    ajaxGet("https://green-r.be/api/stats.php?box="+box+"&table=AIR_BOX", function (reponse) {
        var req = JSON.parse(reponse);
        $('#item-box').html("<p>Box: "+box+"</p><p>Statut: "+req[0].STATE+"</p><p>Date activation: "+req[0].DATE_ACTIVE+"</p>");
        });
}

function load_value(box,mesure,from,to){
    var box_lat;
    var box_long;
    var label=[];
    ajaxGet("https://green-r.be/api/stats.php?box="+box+"&table=AIR_STAT&mesure="+mesure+"&from="+from+"&to="+to, function (reponse) {
        var req = JSON.parse(reponse);
        for(let pas=0;pas<req.length;pas++) {
            data_flux.push(req[pas][mesure]);
            data_time.push(req[pas].DATE);
            label.push("");
        }
        ajaxGet("https://green-r.be/api/stats.php?box="+box+"&table=AIR_STAT&mesure="+mesure+"&from="+from+"&to="+to+"&action=moyenne", function (reponse) {
            var req = JSON.parse(reponse);
            data_moy= parseFloat(req[0][mesure]).toFixed(2);

            ajaxGet("https://green-r.be/api/stats.php?box="+box+"&table=POSITION&relever=dernier", function (reponse) {
                var req = JSON.parse(reponse);
                box_lat=req[0].LAT;
                box_long=req[0].LON;

                switch (mesure) {
                    case 'TEMPERATURE':
                        thermo(data_flux[data_flux.length - 1]);
                        $('.item-temp').html(data_flux[data_flux.length - 1] + "°C");
                        $('.item-temp-avg').html(data_moy + "°C");
                        break;

                    case 'CO2':
                        google.charts.setOnLoadCallback(drawChart);
                        $('.item-CO2').html(data_flux[data_flux.length - 1] + "ppm");
                        $('.item-CO2-avg').html(data_moy + "ppm");
                        break;

                    case 'HUMIDITY':
                        fillGauge(data_flux[data_flux.length-1]);
                        $('.item-hum').html(data_flux[data_flux.length - 1] + "%");
                        $('.item-hum-avg').html(data_moy + "%");
                }
                $('#item-box-alone').html(box);
                $('#item-pos').html(parseFloat(box_long).toFixed(3)+","+parseFloat(box_lat).toFixed(3));
                new mapboxgl.Marker().setLngLat([box_long,box_lat]).addTo(map);
                map.flyTo({center:[box_long,box_lat]});
                    $('#spurChartjsRadar').ready(function () {
                        var options = {
                            responsive: true,
                            scale: {
                                angleLines: {
                                    display: false
                                },
                                ticks: {
                                    suggestedMin: 0,
                                    suggestedMax: (parseInt(data_moy) + 5),
                                }
                            },
                            title: {
                                display: false,
                                text: name
                            },
                            tooltips: {
                                mode: 'index',
                                intersect: false,
                            },
                            hover: {
                                mode: 'nearest',
                                intersect: true
                            },

                            legend: {
                                display: false
                            }


                        };

                        var data = {
                            labels: label,
                            datasets: [{
                                label: (nom == "CO2" ? "Taux CO2" : (nom == "temp" ? "Température" : "Humidité")),
                                data: data_flux,
                                backgroundColor: (nom == "CO2" ? "#b30000" : (nom == "temp" ? "#28a745" : "#3F84FC")),
                                borderColor: (nom == "CO2" ? "#b30000" : (nom == "temp" ? "#28a745" : "#3F84FC")),
                                fill: false
                            }]
                        };
                        var ctx = document.getElementById("spurChartjsRadar").getContext('2d');
                        chartInstance2 = new Chart(ctx, {
                            type: 'radar',
                            data: data,
                            options: options
                        });
                    });
                    $('#spurChartjsBar').ready(function () {
                        var options = {
                            responsive: true,
                            scales: {
                                yAxes: [{
                                    display: true,
                                    ticks: {
                                        min: 0
                                    }
                                }]
                            },
                            title: {
                                display: true,
                                text: name
                            },
                            tooltips: {
                                mode: 'index',
                                intersect: false,
                            },
                            hover: {
                                mode: 'nearest',
                                intersect: true
                            },

                            legend: {
                                display: false
                            }


                        };

                        var data = {
                            labels: label,
                            datasets: [{
                                label: (nom == "CO2" ? "Taux CO2" : (nom == "temp" ? "Température" : "Humidité")),
                                data: data_flux,
                                backgroundColor: (nom == "CO2" ? "#b30000" : (nom == "temp" ? "#28a745" : "#3F84FC")),
                                borderColor: (nom == "CO2" ? "#b30000" : (nom == "temp" ? "#28a745" : "#3F84FC")),
                                fill: false
                            }]
                        };
                        var ctx = document.getElementById("spurChartjsBar").getContext('2d');
                        chartInstance = new Chart(ctx, {
                            type: 'line',
                            data: data,
                            options: options
                        });
                    });
                    if (data_flux.length == 0) {
                        setDefault();
                    }
            });
        });
    });
}

initBox();
switch (nom) {
    case 'dashboard':
        ajaxGet("https://green-r.be/api/stats.php?box="+box+"&table=AIR_STAT&from="+date+"&to="+date_plus, function (reponse) {
            var req = JSON.parse(reponse);
            for(let pas=0;pas<req.length;pas++) {
                data_time.push((req[pas].DATE).slice(11));
                data_CO2.push(req[pas].CO2);
                data_temp.push(req[pas].TEMPERATURE);
                data_hum.push(req[pas].HUMIDITY);
            }

            $('#spurChartjsBar').ready(function() {
                if(data_temp.length == 0){
                    setDefault();

                } else {
                    $('#item-humidity').text(data_hum[data_hum.length - 1] + "%");
                    $('#item-temp').text(data_temp[data_temp.length - 1] + "°C");
                    $('#item-CO2').text(data_CO2[data_CO2.length - 1] + "ppm");
                    $('.time').text(data_time[data_time.length - 1]);
                }
                var options = {
                    responsive: true,
                    scales: {
                        yAxes: [{
                            display: true,
                            ticks: {
                                min:0
                            }
                        }]
                    },
                    title: {
                        display: true,
                        text: name
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },

                    legend: {
                        display: false
                    }


                };

                var data = {
                    labels: data_time,
                    datasets: [{
                        label: 'Température',
                        data: data_temp,
                        backgroundColor: "#28a745",
                        borderColor: "#28a745",
                        fill: false
                    }, {
                        label: 'Taux CO2',
                        data: data_CO2,
                        backgroundColor: window.chartColors.danger,
                        borderColor: window.chartColors.danger,
                        fill: false
                    }, {
                        label: 'Humidité',
                        data: data_hum,
                        backgroundColor: window.chartColors.primary,
                        borderColor: window.chartColors.primary,
                        fill: false
                    }]
                };
                var ctx = document.getElementById("spurChartjsBar").getContext('2d');
                chartInstance= new Chart(ctx, {
                    type: 'line',
                    data: data,
                    options:options
                });
            });
        });
        break;


    case 'temp':
        load_value(box,"TEMPERATURE",date,date_plus);
        break;
    case 'CO2':
        google.charts.load('current', {'packages':['gauge']});
        load_value(box,"CO2",date,date_plus);
        break;
    case 'humidity':
        load_value(box,"HUMIDITY",date,date_plus);
        break;
}



