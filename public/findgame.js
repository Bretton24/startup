
//gets userName from localstorage and outputs it page
const storedUsername = localStorage.getItem("userName");
const userNameElement = document.getElementById("us");
userNameElement.innerText = storedUsername;


// Event messages
const GameEndEvent = 'gameEnd';
const GameStartEvent = 'gameStart';


//player class
class Player {
  constructor(name, skill, wins, losses, lastGame) {
    this.name = name;
    this.skill = skill;
    this.wins = wins;
    this.losses = losses;
    this.lastGame = lastGame;
  }
}



//random number generator for other methods
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//method that will return a random name for players
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

//randomly generates between 3 skills
function generateRandomSkill() {
  const skillLevel = ["Professional", "Amateur", "Beginner"];
  const randomIndex = Math.floor(Math.random() * skillLevel.length);
  return skillLevel[randomIndex];
}

//generates a random number of wins
function generateRandomWins() {
  const minWins = 0;
  const maxWins = 100;
  return Math.floor(Math.random() * (maxWins - minWins + 1)) + minWins;
}

//generates a random number of losses
function generateRandomLosses() {
  const minWins = 0;
  const maxWins = 100;
  return Math.floor(Math.random() * (maxWins - minWins + 1)) + minWins;
}

//generates a random date for last date played for player
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


// Game class
class Game {
  constructor() {
    this.players = [];
    this.allPlayers = [];
  }

  playerNames() {
    return this.players.map(player => player.name);
  }

  //function that adds a Player class to a game
  addPlayer(player) {
    this.players.push(player);
    console.log(`${player.name} has joined the game.`);
    this.printPlayersTable();
  }

  //function that will remove a player from a game
  removePlayer(player) {
     const index = this.players.indexOf(player);
    if (index !== -1) {
      this.players.splice(index, 1);
      console.log(`${player.name} has left the game.`);
    }
  }

  //function that will reset a game
  reset() {
    this.players = [];
    this.isOver = false;
    console.log("The game has been reset.");
  }

  // function that prints the players of a current game to a table on the page
  printPlayersTable() {
    const table = document.getElementById("game");

    //makes sure current game is empty when started
    table.innerHTML = "";

    //creates header row
    const headers = ["Player Name", "Skill", "Wins", "Losses", "Last Game"];
    const headerRow = document.createElement("tr");
    headers.forEach((headerText) => {
      const headerCell = document.createElement("th");
      headerCell.textContent = headerText;
      headerRow.appendChild(headerCell);
    });
    table.appendChild(headerRow);

    //iterates through the players of that class and 
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

}

//function allows the user to join a game
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
        currentGame.savePlayers(currentGame.players);
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
const allPlayers = [];


//initializes the map
async function initMap() {
    //instantiates a google map and then adds it to the map id
  map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: 40.233845, lng:-111.658531 }
    });
    
    //instantiates map geocoder allowing for conversion of address to coordinates
    geocoder = new google.maps.Geocoder();   

    //creates text for the input line
    const inputText = document.createElement("input");
    inputText.placeholder = "Enter only full addresses";

    //submit button is created in input as well
    const submitButton = document.createElement("input");
    submitButton.type = "button";
    submitButton.value = "Add Game";
    submitButton.classList.add("button", "button-primary");

    //creates a clear button for the map
    const clearButton = document.createElement("input");
    clearButton.type = "button";
    clearButton.value = "Clear";
    clearButton.classList.add("button", "button-primary");

    //this allows the user to type their address in input box
    response = document.createElement("pre");
    response.id = "response";
    response.innerText = "";
    responseDiv = document.createElement("div");
    responseDiv.id = "response-container";
    responseDiv.appendChild(response);
    
    //creates a container for all of the controls
    const controlsContainer = document.getElementById("controls");
    controlsContainer.appendChild(inputText);
    controlsContainer.appendChild(submitButton);
    controlsContainer.appendChild(clearButton);

    //listener for the exact location on the map that is clicked
    map.addListener("click", (e) => {
    geocode({ location: e.latLng });
    });

    //event listener for when the submit button is clicked
    submitButton.addEventListener("click", () =>
    geocode({ address: inputText.value })
    );

    //event listener for when the clear button is pushed
    clearButton.addEventListener("click", () => {
    clear();
    });
    clear();
    }

    //clear function that clears all the markers from the map
    function clear() {
        markers.forEach((marker) => {
          marker.setMap(null);
        });
        markers = [];
    }

    //geocode function that helps change address to coordinates
   async function geocode(request) {


      //joinButton is instantiated so when clicked user will be added to the current game
      const joinButton = document.getElementById('join');

      //geocoder is a reference to google library
        geocoder
        //.geocode is a request to google maps library
          .geocode(request)
          .then((result) => {
            const { results } = result;
      
            //set center method sets the result of the pinpointed mark to whatever was just added or clicked
            map.setCenter(results[0].geometry.location);

            // marker creates a marker on the map
            const marker = new google.maps.Marker({
              position: results[0].geometry.location,
              map,
            });

            
            //initializes a game
            const game = new Game();
            for (let i = 0; i < getRandomNumber(3, 10); i++) {
              const player = new Player(
                generateRandomName(),
                generateRandomSkill(),
                generateRandomWins(),
                generateRandomLosses(),
                generateRandomDate()
              );
              
              game.addPlayer(player);
              allPlayers.push(player);
            }
              try {
                const response = fetch('/api/players', {
                  method: 'POST',
                  headers: {'content-type': 'application/json'},
                  body: JSON.stringify(allPlayers),
                })
                .then(response => response.json())
                .then(allPlayers => {
                  const array = JSON.stringify(allPlayers);
                  localStorage.setItem('players', array);
                }) 
              } catch {
                // if there was an error just alphabetize the array locally
                getHighestWins(allPlayers);
              }

              function getHighestWins(allPlayers) {
                const sortedPlayers = allPlayers.slice().sort((a, b) => {
                  return b.wins - a.wins;
                });
              
                localStorage.setItem('players', JSON.stringify(sortedPlayers));
              }
              
              
            
            

            //at each marker a game is saved & added to games array
            marker.game = game;
            markers.push(marker.game);
            games.push(game);
            
            //listener that displays curent game when marker gets clicked
            marker.addListener("click", function() {
              currentGame = marker.game;
              currentGame.printPlayersTable();
              // Let other players know a new game has started
              this.broadcastEvent(this.playerNames(), GameStartEvent, {});
            })
            
            //join function called when join button clicked
            joinButton.addEventListener("click", joinGame);
            

            return results;
           
          })
          .catch((e) => {
            alert("Geocode was not successful for the following reason: " + e);
          });
          
      }

      configureWebSocket() {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
        this.socket.onopen = (event) => {
          this.displayMsg('system', 'game', 'connected');
        };
        this.socket.onclose = (event) => {
          this.displayMsg('system', 'game', 'disconnected');
        };
        this.socket.onmessage = async (event) => {
          const msg = JSON.parse(await event.data.text());
          if (msg.type === GameStartEvent) {
            this.displayMsg('#us', msg.from, `started a new game`);
          }
        };
      }

      displayMsg(cls, from, msg) {
        const chatText = document.querySelector('#player-messages');
        chatText.innerHTML =
          `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
      }
      
      


      window.initMap = initMap;
  