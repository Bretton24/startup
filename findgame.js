const storedUsername = localStorage.getItem("userName");
const userNameElement = document.getElementById("us");
userNameElement.innerText = storedUsername;

// Initialize and add the map
let map;

async function initMap() {
  // The location of Provo
  const position = { lat: 40.233845, lng: -111.658531 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Provo
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Provo",
  });
}

initMap();