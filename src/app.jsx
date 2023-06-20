import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Findgame } from'./findgame/findgame';
import { Gamesplayed } from'./gamesplayed/gamesplayed';


export default function App() {
    return(
        <BrowserRouter>
            <div className='body bg-whitish text-dark'>
                <header class="container-fluid">
                    <nav className="navbar fixed-top ">
                        <a className="navbar-brand font" href="#">GamesWFriends<sup>&reg;</sup></a>
                        <menu className="navbar-dark">
                            <li className="nav-item">
                                <NavLink className="highlightlink nav-link active font" to="">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="highlightlink nav-link active font" to="findgame">Find Game</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="highlightlink nav-link active font" to="gamesplayed">Games Played</NavLink>
                            </li>
                        </menu>
                    </nav>
                </header>

                <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/findgame' element={<Findgame />} />
                    <Route path='/gamesplayed' element={<Gamesplayed />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className="players">
                    <div className="container-fluid">
                        <span className="text-reset">Brett Ashcraft</span>
                        <a className="text-reset" href="https://github.com/Bretton24/startup">GitHub</a>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    )
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  };