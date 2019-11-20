
mapboxgl.accessToken = 'pk.eyJ1IjoiYWpheG8iLCJhIjoiY2p1dzltb3cyMDlkNTRkbjVwc29hcjV3MyJ9.8XN4bH0Iz_Qzc5RFAUccMA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [4.612329,50.665433], // starting position
    zoom: 6 // starting zoom
});

map.on('load', function () {
    map.loadImage('../img/airbox_icon.png', function(error, image) {
        if (error) throw error;
        map.addImage('AirBox', image);
        // Add a layer showing the places.
        map.addLayer({
            "id": "places",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": []
                }
            },
            "layout": {
                "icon-image": "{icon}",
                "icon-size": 0.30,
                "icon-allow-overlap": true
            }
        });

    });


    ajaxGet("https://green-r.be/api/stats.php?position=ALL", function (reponse) {
        var articles = JSON.parse(reponse);
        for(let pas=0;pas<articles.length;pas++){
            var el = document.createElement('div');
            el.className = 'marker';
            new mapboxgl.Marker(el).setLngLat([articles[pas].longitude,articles[pas].latitude]).setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML("<strong>AirBox</strong><p><a href='dashboard.php?box="+articles[pas].box +"'"+"title=\"Click to see data\">AirBox n° "+ articles[pas].box +"</a><br>Status: Active</p>")).addTo(map);
        }
    });
});



var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    language: 'fr-BE',
    mapboxgl: mapboxgl
});
map.addControl(geocoder);
map.addControl(new mapboxgl.NavigationControl());
// Add geolocate control to the map.
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));
map.addControl(new mapboxgl.FullscreenControl());