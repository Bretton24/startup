const storedUsername = localStorage.getItem("userName");
const userNameElement = document.getElementById("us");
userNameElement.innerText = storedUsername;

// Initialize and add the map
let map;
let markers = [];
let geocoder;
let responseDiv;
let response;

markers = [];

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
    submitButton.value = "Add Game";
    submitButton.classList.add("button", "button-primary");

    const clearButton = document.createElement("input");

    clearButton.type = "button";
    clearButton.value = "Clear";
    clearButton.classList.add("button", "button-primary");
    response = document.createElement("pre");
    response.id = "response";
    response.innerText = "";
    responseDiv = document.createElement("div");
    responseDiv.id = "response-container";
    responseDiv.appendChild(response);

    const controlsContainer = document.getElementById("controls");
    controlsContainer.appendChild(inputText);
    controlsContainer.appendChild(submitButton);
    controlsContainer.appendChild(clearButton);
  
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(responseDiv);
    

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
        markers.forEach((marker) => {
          marker.setMap(null);
        });
        markers = [];
    }

    function geocode(request) {
        //clear();
        geocoder
          .geocode(request)
          .then((result) => {
            const { results } = result;
      
            map.setCenter(results[0].geometry.location);

            const marker = new google.maps.Marker({
              position: results[0].geometry.location,
              map,
            });
            markers.push(marker);

            return results;
          })
          .catch((e) => {
            alert("Geocode was not successful for the following reason: " + e);
          });
      }

      window.initMap = initMap;
  