# GameMeetupApp

## Description deliverable

### Elevator pitch

Have you ever had a really hard time trying to find a group of people to play sports with? You never know when games are going on and you always end up playing with people who are either way above or below your skill level. What if there was a wesbite that showed you when and where games are taking place near you. You wouldn't have to wonder if people are as good as you or what sport you'll be playing, the app will tell you. 

### Design

![Map]()

Here is a sequence diagram that shows how to people would interact with the backend to vote.

![Voting sequence diagram](votingSequenceDiagram.png)

### Key features

- Secure login over HTTPS
- Ability to add yourself to a game
- Displays a map where games are taking place
- Totals from all users displayed in realtime
- Displays player skill level at each game
- Ability for user to create and delete games

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Two HTML pages. One for login and one with map where games can be created. Hyperlinks to choice artifact.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **JavaScript** - Provides login, choice display, display other users games, backend endpoint calls.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving game information
  - creating games
- **DB** - Store users, games played, and personal information.
- **Login** - Register and login users. Credentials securely stored in database. Can't add user to game unless authenticated.
- **WebSocket** - As each user joins a game, this will be shown to other users.
- **React** - Application ported to use the React web framework.
