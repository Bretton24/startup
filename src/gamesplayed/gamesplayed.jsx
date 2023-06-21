import React from 'react';
import './gamesplayed.css';

export function Gamesplayed() {
    return(
    <div>
     <h1>Games Played</h1>
      <div id="quote"></div>
      <table class="table table-warning table-striped-columns">
        <thead class="table-dark font">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Last Game Date</th>
          </tr>
        </thead>
        <tbody id="players">
        </tbody>
      </table>
      <img src="sports.jpg" alt="image of various sports"></img>
    </div>
    );
}