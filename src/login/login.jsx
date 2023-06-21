import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';


export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className='container-fluid bg-lightgray text-center'>
      <div>
        {authState !== AuthState.Unknown && <h1>GamesWFriends</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName,AuthState.Unauthenticated)}/>
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
          userName={userName}
          onLogin={(loginUsername) => {
            onAuthChange(loginUsername, AuthState.Authenticated);
          }}
          />
        )}
        
      </div>
    </main>
  );
}