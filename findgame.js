
// Initialize and add the map
let map;
let markers = [];

function initMap() {
  // The location of Provo
  const position = { lat: 40.233845, lng: -111.658531 };

  // The map, centered at Provo
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  map.addListener("click", (event) => {
    const clickedPosition = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    createMarker(clickedPosition);
  });
}

function createMarker(position) {
  const marker = new google.maps.Marker({
    position: position,
    map: map,
  });

  markers.push(marker);
}

initMap();