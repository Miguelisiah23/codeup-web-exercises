"use strict";
$(document).ready(function () {
    const URL = "https://api.openweathermap.org/data/2.5/onecall";

    mapboxgl.accessToken = MAPBOX_API_KEY;
    const MAP = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-71.1631, 42.7070], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
    const MARKER = new mapboxgl.Marker()
        .isDraggable(true)
        .setLngLat([0,0])
    MARKER.addTo(map);

    geocode('Converse, Tx, 78109', MAPBOX_API_KEY).then(function (data) {
        console.log(data)
        $.get(URL, {
            APPID: WEATHER_MAP_KEY,
            lon: data[0],
            lat: data[1],
            timeZone: 'CT',
            units: 'imperial'
        }).done(function (info) {
            console.log(info.daily);
            $("#weather").html(" ");
            let i = 0;
            let j = 4;
            info.daily.forEach(function (card) {
                if (i <= j) {
                    const date = new Date(card.dt * 1000);
                    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
                    let src = "http://openweathermap.org/img/w/" + card.weather[0].icon + ".png";
                    let cards = "<div class='card col-2 p-0 mb-3'>" +
                        "<div class='card-header text-center'>" + [month + '-' + day + '-' + year] +
                        "</div>" +
                        "<ul class='list-group list-group-flush'>" +
                        "<li class='list-group-item text-center border-0 '>" + "Temp: " + card.temp.day + "</li>" +
                        "<li class='list-group-item text-center'>" + "<img src=" + src + ">" + "</li>" +
                        "<li class='list-group-item'>" + 'Humidity: ' + card.humidity + "</li>" +
                        "<li class='list-group-item'>" + 'Wind: ' + card.wind_speed + "</li>" +
                        "<li class='list-group-item'>" + 'Pressure: ' + card.pressure + "</li>" +
                        "</ul>" +
                        "</div>"
                    console.log(card.weather[0].icon);
                    $("#weather").append(cards);
                    i++;
                }
            })
        })
    });


// const MARKER = new mapboxgl.Marker()
//     .setDraggable(true)
//     .setLngLat([0, 0])
//     MARKER.addTo(MAP);

});


