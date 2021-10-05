mapboxgl.accessToken = 'pk.eyJ1IjoibW91bmlyNzg5IiwiYSI6ImNrcGxnZjR6eTBza3EyeW9hM241bDg3cG4ifQ.SmXbpamZuLcSLyQISa6SLA';


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
});


function successLocation(position) {

  setupMap([position.coords.longitude, position.coords.latitude])

}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center : center,
zoom : 15 
});

const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken 
  })

  map.addControl(directions, "top-left")
  map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true
    }));


    console.log(center[0]);
   
    var marker = new mapboxgl.Marker({
      color: "#FF0000",
      draggable: true
      }).setLngLat([center[0],center[1]])
      .addTo(map);

}
/*
var marker = new mapboxgl.Marker();
function add_marker (event) {
  var coordinates = event.lngLat;
  console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
  marker.setLngLat(coordinates).addTo(map);
}
map.on('click', add_marker);
*/