"use strict";

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 52.557533, lng: -1.246709},
    zoom: 13
  });
} 

