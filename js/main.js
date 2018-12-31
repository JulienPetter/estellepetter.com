// Initialization of Google Maps
function initMap () {
    var coordinates = {lat: 46.117809, lng: 6.037543};
    var map = new google.maps.Map(document.getElementById("map"), {center: coordinates, zoom: 17});
    var marker = new google.maps.Marker({position: coordinates, map: map})
}