"use strict";
$(document).ready(function () {
    const URL = "https://api.openweathermap.org/data/2.5/onecall";
    //Search bar
    $("#find").click(function (e) {
        e.preventDefault();
        let input = $("#search").val();
        geocode(input, MAPBOX_API_KEY).then(function (data) {
            MARKER.setLngLat([data[0], data[1]])
            MAP.setCenter([data[0], data[1]])
            MAP.setZoom(7)
            $.get(URL, {
                APPID: WEATHER_MAP_KEY,
                lon: data[0],
                lat: data[1],
                timeZone: 'CT',
                units: 'imperial'
            }).done(function (info) {
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
                            "<li class='list-group-item text-center border-0 '>" + card.temp.day.toFixed(0) + " degrees" + "</li>" +
                            "<li class='list-group-item text-center border-0'>" + "<img src=" + src + ">" + "</li>" +
                            "<li class='list-group-item p-0 m-0 text-center bt-0 fs-6'>" + card.weather[0].description + "</li>" +
                            "<li class='list-group-item'>" + 'Humidity: ' + card.humidity + "</li>" +
                            "<li class='list-group-item'>" + 'Wind: ' + card.wind_speed.toFixed(0) + " Mph" + "</li>" +
                            "</ul>" +
                            "</div>"
                        $("#weather").append(cards);
                        i++;
                    }
                })
            })
        });
    });


    // Initial location for weather map
    geocode('Converse, Tx', MAPBOX_API_KEY).then(function (data) {
        $.get(URL, {
            APPID: WEATHER_MAP_KEY,
            lon: data[0],
            lat: data[1],
            timeZone: 'CT',
            units: 'imperial'
        }).done(function (info) {
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
                        "<li class='list-group-item text-center border-0 '>" + card.temp.day.toFixed(0) + " degrees" + "</li>" +
                        "<li class='list-group-item text-center border-0'>" + "<img src=" + src + ">" + "</li>" +
                        "<li class='list-group-item p-0 m-0 text-center bt-0 fs-6'>" + card.weather[0].description + "</li>" +
                        "<li class='list-group-item'>" + 'Humidity: ' + card.humidity + "</li>" +
                        "<li class='list-group-item'>" + 'Wind: ' + card.wind_speed.toFixed(0) + " Mph" + "</li>" +
                        "</ul>" +
                        "</div>"
                    $("#weather").append(cards);
                    i++;
                }
            })
        })
    });

    // Setting the map
    mapboxgl.accessToken = MAPBOX_API_KEY;
    const MAP = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.316124, 29.518008], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    // Setting the marker
    const MARKER = new mapboxgl.Marker({
        draggable: true
    })

        // initial marker set
        .setLngLat([-98.316124, 29.518008])
    MARKER.addTo(MAP);

    // Function called after dragDrop to get coordinates and set the geocode
    function onDragEnd() {
        let lngLat = MARKER.getLngLat();
        MAP.setCenter([lngLat.lng, lngLat.lat])

        geocode([lngLat.lng, lngLat.lat], MAPBOX_API_KEY).then(function (data) {
            $.get(URL, {
                APPID: WEATHER_MAP_KEY,
                lon: data[0],
                lat: data[1],
                timeZone: 'CT',
                units: 'imperial'
            }).done(function (info) {
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
                            "<li class='list-group-item text-center border-0 '>" + card.temp.day.toFixed(0) + " degrees" + "</li>" +
                            "<li class='list-group-item text-center border-0'>" + "<img src=" + src + ">" + "</li>" +
                            "<li class='list-group-item p-0 m-0 text-center bt-0 fs-6'>" + card.weather[0].description + "</li>" +
                            "<li class='list-group-item'>" + 'Humidity: ' + card.humidity + "</li>" +
                            "<li class='list-group-item'>" + 'Wind: ' + card.wind_speed.toFixed(0) + " Mph" + "</li>" +
                            "</ul>" +
                            "</div>"
                        $("#weather").append(cards);
                        i++;
                    }
                })
            })
        });


    }


    MARKER.on('dragend', onDragEnd);


});


