function loadScores() {
    let players = [];
    const playersText = localStorage.getItem('players');
    if (playersText) {
      players = JSON.parse(playersText);
    }
  
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
  
  loadScores();
  