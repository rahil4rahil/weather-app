var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoicmFoaWw0cmFoaWwiLCJhIjoiY2p2a29oODJvMDVpaDQ0dm4yczgzbXNibSJ9.o83F1J_8cbRDaUIT_ZmWkQ';
var map = new mapboxgl.Map({
container: 'YOUR_CONTAINER_ELEMENT_ID',
style: 'mapbox://styles/mapbox/streets-v11'
});