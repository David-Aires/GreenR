
function change_color(color)
{
    $('.dash-nav.dash-nav-indigo').css('background-color', color);
    $('.dash-toolbar').css('background-color', color);
}

var nom = window.location.pathname;
nom = nom.split("/");
nom = nom[nom.length - 1];
nom = nom.substr(0, nom.lastIndexOf("."));

if(nom=='humidity' || nom=='CO2' || nom=='temp') {
    $(function() {
        $( ".datepicker" ).datepicker({
            inline: true,
            showOtherMonths: true,
            showAnim: "clip",
            dateFormat: "dd-mm-yy",
        })
            .datepicker('widget').wrap('<div class="ll-skin-latoja"/>');
    });
}



function fillGauge(value){
    var config = liquidFillGaugeDefaultSettings();
    config.waveAnimateTime = 1000;
    var gauge= loadLiquidFillGauge("fillgauge", value, config);
}


function ajaxGet(url,callback){
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.setRequestHeader("Content-type", "application/json");
    req.send(null);
}

function notify(){
    var position="";
    if(screen.width<1024){
        position="left top"
    } else {
        position="top center"
    }
    $.notify("Veuillez selectionner une box valide!",{position:position})
}

function thermo(data) {
        var thermometer = new Thermometer({
            height: 450,
            mercuryColor: (data<=7?"blue":"red"),
            tubeWidth: 18.5,
        });
        var container = document.getElementById('thermometer');
        thermometer.render(container, data, 4, parseInt(data) + 5);
}