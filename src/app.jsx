import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className='body bg-whitish text-dark'>
        <header class="container-fluid">
            <nav className="navbar fixed-top ">
                <a className="navbar-brand font" href="#">GamesWFriends<sup>&reg;</sup></a>
                <menu className="navbar-dark">
                    <li className="nav-item">
                        <a className="highlightlink nav-link active font" href="index.html">Home</a>
                    </li>
                </menu>
            </nav>
        </header>

        <main>App components go here</main>

        <footer className="players">
            <div className="container-fluid">
                <span className="text-reset">Brett Ashcraft</span>
                <a className="text-reset" href="https://github.com/Bretton24/startup">GitHub</a>
            </div>
        </footer>
    </div>
  ) 
}