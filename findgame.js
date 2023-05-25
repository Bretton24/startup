// Initialize and add the map
let map;

async function initMap() {
  // The location of provo
  const position = { lat: 40.233845, lng: -111.658531 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");


  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    mapId: "DEMO_MAP_ID",
  });
}

initMap();