"use strict";
const URL = "https://api.openweathermap.org/data/3.0/onecall";
$.get(URL, {
    APPID: WEATHER_MAP_KEY,
    lat: 40.7485,
    lon:-73.9879,
    units:"imperial"
}).done(function (data) {
    console.log(data)
});

mapboxgl.accessToken = MAPBOX_API_KEY;
const MAP = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-71.1631, 42.7070], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
const MARKER = new mapboxgl.Marker()
    .setDraggable(true)
    .setLngLat([0, 0])
    MARKER.addTo(MAP);
console.log(MARKER);

