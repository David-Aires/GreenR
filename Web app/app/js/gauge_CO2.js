google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['CO2', 230],
    ]);

    var options = {
        width: 270, height: 295,
        redFrom: 5000, redTo: 6000,
        yellowFrom:4000, yellowTo: 5000,
        minorTicks: 5,max:6000
    };

    var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

    chart.draw(data, options);
}