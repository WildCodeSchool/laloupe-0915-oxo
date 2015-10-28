// FIND CONTROLLER 
function findController($scope, findService){


var map = L.map('map').setView([48.4712850, 1.0143050], 17);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([48.4712850, 1.0143050]).addTo(map)
    .bindPopup('Oxo! <br> You are the winer!')
    .openPopup();

}