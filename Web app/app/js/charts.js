var data_temp = new Array();
var data_CO2 = new Array();
var data_hum = new Array();
var data_time = new Array();
var date_plus;
var box = (document.location.href).slice(-1);
var date = new Date();
date = date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
var date_plus = new Date();
date_plus.setDate(date_plus.getDate()+1);
date_plus = date_plus.getDate()+"-"+(date_plus.getMonth()+1)+"-"+date_plus.getFullYear();
var chartInstance;


function request_all(){
    ajaxGet("https://green-r.be/api/stats.php?box="+box+"&table=AIR_STAT&from="+date+"&to="+date_plus, function (reponse) {
        var req = JSON.parse(reponse);
        for(let pas=0;pas<req.length;pas++){
            data_time.push((req[pas].DATE).slice(11));
            data_CO2.push(req[pas].CO2);
            data_temp.push(req[pas].TEMPERATURE);
            data_hum.push(req[pas].HUMIDITY);
        }
    });
}

switch (nom) {
    case 'dashboard':
        request_all();

        $('#spurChartjsBar').ready(function() {
            $('#item-humidity').text(data_hum[data_hum.length-1]+"%");
            $('#item-temp').text(data_temp[data_temp.length-1]+"°C");
            $('#item-CO2').text(data_CO2[data_CO2.length-1]+"ppm");
            $('.time').text(data_time[data_time.length-1]);
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
        break;
}



