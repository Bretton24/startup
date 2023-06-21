import React from 'react';
import './findgame.css';
export function Findgame() {
  return (
    <main className='container-fluid bg-lightgray text-center'>
      <div className="container">
        <div className="players">
          <h2> Current Player:
          <span id="us"></span></h2>
          <br></br>
          <div>
            <img class="img1" src="mark.jpg" alt="profile picture placeholder"></img>
            <br></br>
            <fieldset>
              <legend>Chat</legend>
              <input id="new-msg" type="text" />
              <button onclick="sendMessage()">Send</button>
            </fieldset>
            <div id="player-messages"></div>
            <br></br>
            <h4>Current Game</h4>
              <table>
                <tbody id="game">
                </tbody>
              </table>
            <br></br>
            <button type="submit" id="join" class="btn btn-primary">Join Game</button>
          </div>
          <div class="map" id="map"></div>
        </div>
      </div>
    </main>
  );
}