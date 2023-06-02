async function loadScores() {
  try {
    const playersText = localStorage.getItem('players');
    if (playersText) {
      const players = JSON.parse(playersText);
      displayScores(players);
    } else {
      console.log('No player data found in local storage');
    }
  } catch (error) {
    console.error('Error loading players:', error);
  }
}

  function displayScores(players) {
    const tableBodyEl = document.querySelector('#players');
  
    if (players.length) {
      for (const [i, player] of players.entries()) {
        const positionTdEl = document.createElement('td');
        const nameTdEl = document.createElement('td');
        const winsTdEl = document.createElement('td');
        const lossesTdEl = document.createElement('td');
        const lastGameTdEl = document.createElement('td');
  
        positionTdEl.textContent = i + 1;
        nameTdEl.textContent = player.name;
        winsTdEl.textContent = player.wins;
        lossesTdEl.textContent = player.losses;
        lastGameTdEl.textContent = player.lastGame;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(positionTdEl);
        rowEl.appendChild(nameTdEl);
        rowEl.appendChild(winsTdEl);
        rowEl.appendChild(lossesTdEl);
        rowEl.appendChild(lastGameTdEl);
  
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
    }
  }
    

  function displayQuote(data) {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#quote');
  
        const quoteEl = document.createElement('p');
        quoteEl.classList.add('quote');
        const authorEl = document.createElement('p');
        authorEl.classList.add('author');
  
        quoteEl.textContent = data.content;
        authorEl.textContent = data.author;
  
        containerEl.appendChild(quoteEl);
        containerEl.appendChild(authorEl);
      });
  }


  displayQuote();
 loadScores();
  