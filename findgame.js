const storedUsername = localStorage.getItem("userName");
const userNameElement = document.getElementById("us");
userNameElement.innerText = storedUsername;

// Initialize and add the map
let map;
let marker = [];
let geocoder;
let responseDiv;
let response;

async function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: 40.233845, lng:-111.658531 }
    });
    geocoder = new google.maps.Geocoder();

    const inputText = document.createElement("input");

    inputText.placeholder = "Enter only full addresses";

    const submitButton = document.createElement("input");

    submitButton.type = "button";
    submitButton.value - "Geocode";
    submitButton.classList.add("button", "button-primary");

    const clearButton = document.createElement("input");

    clearButton.type = "button";
    clearButton.value = "Clear";
    clearButton.classList.add("button", "button-secondary");
    response = document.createElement("pre");
    response.id = "response";
    response.innerText = "";
    responseDiv = document.createElement("div");
    responseDiv.id = "response-container";
    responseDiv.appendChild(response);

    const instructionsElement = document.createElement("p");

    instructionsElement.id = "instructions";
    instructionsElement.innerHTML =
      "<strong>Instructions</strong>: Enter an address in the textbox to geocode or click on the map to reverse geocode.";
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputText);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(submitButton);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(clearButton);
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(
      //instructionsElement
    );
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(responseDiv);
    marker = new google.maps.Marker({
    map,
    });
    map.addListener("click", (e) => {
    geocode({ location: e.latLng });
    });
    submitButton.addEventListener("click", () =>
    geocode({ address: inputText.value })
    );
    clearButton.addEventListener("click", () => {
    clear();
    });
    clear();
    }

    function clear() {
        marker.setMap(null);
    }

    function geocode(request) {
        clear();
        geocoder
          .geocode(request)
          .then((result) => {
            const { results } = result;
      
            map.setCenter(results[0].geometry.location);
            marker.setPosition(results[0].geometry.location);
            marker.setMap(map);
            response.innerText = JSON.stringify(result, null, 2);
            return results;
          })
          .catch((e) => {
            alert("Geocode was not successful for the following reason: " + e);
          });
      }
      window.initMap = initMap;
  