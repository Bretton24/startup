const storedUsername = localStorage.getItem("userName");
const userNameElement = document.getElementById("us");
userNameElement.innerText = storedUsername;
class Player {
  constructor(name, skill, wins, losses, lastGame) {
    this.name = name;
    this.skill = skill;
    this.wins = wins;
    this.losses = losses;
    this.lastGame = lastGame;
  }
}

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function generateRandomName() {
  const names = [ "John Smith",
  "Michael Jones",
  "Michael Jordan",
  "Lebron James",
  "David West",
  "Steve Smith",
  "Dwayne Wade",
  "Kobe Bryant",
  "Stephen Curry",
  "Kevin Durant",
  "Chris Paul",
  "James Harden",
  "Anthony Davis",
  "Kawhi Leonard",
  "Damian Lillard",
  "Paul George",
  "Russell Westbrook",
  "Giannis Antetokounmpo",
  "Luka Doncic",
  "Joel Embiid",
  "Nikola Jokic",
  "Devin Booker",
  "Jayson Tatum",
  "Jimmy Butler",
  "Kyrie Irving",
  "Klay Thompson",
  "Draymond Green",
  "Ben Simmons",
  "Zion Williamson",
  "Trae Young",
  "Carmelo Anthony",
  "Blake Griffin",
  "Dirk Nowitzki",
  "Tim Duncan",
  "Shaquille O'Neal",
  "Allen Iverson",
  "Larry Bird",
  "Magic Johnson",
  "Kareem Abdul-Jabbar",
  "Wilt Chamberlain",
  "Bill Russell",
  "Hakeem Olajuwon",
  "Scottie Pippen",
  "Charles Barkley",
  "Patrick Ewing",
  "Dennis Rodman",
  "Clyde Drexler",
  "Jerry West",
  "David Robinson",
  "Dominique Wilkins",
  "George Gervin"]; // Example names
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

function generateRandomSkill() {
  const skillLevel = ["Professional", "Amateur", "Beginner"];
  const randomIndex = Math.floor(Math.random() * skillLevel.length);
  return skillLevel[randomIndex];
}

function generateRandomWins() {
  const minWins = 0;
  const maxWins = 100;
  return Math.floor(Math.random() * (maxWins - minWins + 1)) + minWins;
}

function generateRandomLosses() {
  const minWins = 0;
  const maxWins = 100;
  return Math.floor(Math.random() * (maxWins - minWins + 1)) + minWins;
}

function generateRandomDate() {
  const currentDate = new Date(); // Get the current date
  const currentYear = currentDate.getFullYear(); // Get the current year
  const twoYearsAgo = currentYear - 2; // Calculate the year two years ago
  const randomYear = Math.floor(Math.random() * (currentYear - twoYearsAgo + 1)) + twoYearsAgo; // Generate a random year within the last two years
  const randomMonth = Math.floor(Math.random() * 12) + 1; // Generate a random month (1-12)
  const randomDay = Math.floor(Math.random() * 28) + 1; // Generate a random day (1-28)

  // Define month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // Create a formatted date string
  const formattedDate = `${monthNames[randomMonth - 1]} ${randomDay}, ${randomYear}`;

  return formattedDate;
}

class Game {
  constructor() {
    this.players = [];
  }

  addPlayer(player) {
    this.players.push(player);
    console.log(`${player.name} has joined the game.`);
    this.printPlayersTable();
  }

  removePlayer(player) {
     const index = this.players.indexOf(player);
    if (index !== -1) {
      this.players.splice(index, 1);
      console.log(`${player.name} has left the game.`);
    }
  }

  reset() {
    this.players = [];
    this.isOver = false;
    console.log("The game has been reset.");
  }

  printPlayersTable() {
    const table = document.getElementById("game");

    table.innerHTML = "";
    const headers = ["Player Name", "Skill", "Wins", "Losses", "Last Game"];
    const headerRow = document.createElement("tr");
    headers.forEach((headerText) => {
      const headerCell = document.createElement("th");
      headerCell.textContent = headerText;
      headerRow.appendChild(headerCell);
    });
    table.appendChild(headerRow);

    this.players.forEach((player) => {
      const playerRow = document.createElement("tr");
      const playerData = [player.name, player.skill, player.wins, player.losses, player.lastGame];
      playerData.forEach((data) => {
        const playerCell = document.createElement("td");
        playerCell.textContent = data;
        playerRow.appendChild(playerCell);
      });
      table.appendChild(playerRow);
    });
  }

  async savePlayers(players){
    const game = {players};
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(game),
      });
      const allPlayers = await response.json();
      localStorage.setItem('players', JSON.stringify(allPlayers));
  }
}


function joinGame() {
  if (currentGame) {
    const storedUsername = localStorage.getItem("userName");
    if (storedUsername) {
      const isPlayerAdded = currentGame.players.some((player) => {
        return player.name === storedUsername;
      });
      if (!isPlayerAdded) {
        const player = new Player(
          storedUsername,
          generateRandomSkill(),
          generateRandomWins(),
          generateRandomLosses(),
          generateRandomDate()
        );
        currentGame.addPlayer(player);
        currentGame.printPlayersTable();
      } else {
        alert("You are already added to the game.");
      }
    } else {
      alert("Please set your username before joining a game.");
    }
  } else {
    alert("Please select a game before joining.");
  }
};


  

// Initialize and add the map
let map;
let markers = [];
let geocoder;
let responseDiv;
let response;
let currentGame;
let games = [];

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
      const joinButton = document.getElementById('join');
        geocoder
          .geocode(request)
          .then((result) => {
            const { results } = result;
      
            map.setCenter(results[0].geometry.location);

            const marker = new google.maps.Marker({
              position: results[0].geometry.location,
              map,
            });
            const game = new Game();
            games.push(game);
            for (let i = 0; i < getRandomNumber(3,10); i++) {
              const player = new Player(generateRandomName(), generateRandomSkill(), generateRandomWins(),generateRandomLosses(),generateRandomDate());
              game.addPlayer(player);
            }

            marker.game = game;

            markers.push(marker);

            marker.addListener("click", function() {
              currentGame = marker.game;
              currentGame.printPlayersTable();
            })
            
         joinButton.addEventListener("click", joinGame);

         game.savePlayers(game.players);

            return results;
          })
          .catch((e) => {
            alert("Geocode was not successful for the following reason: " + e);
          });
      }

      window.initMap = initMap;
  