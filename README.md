# GameMeetupApp

## Description deliverable

### Elevator pitch

Do you ever find it difficult to find people who share the same interest in sports that you do? This was the problem I faced when I came to college. So i developed an application that would allow you to connect with someone who shares your love of playing sports. This app allows you to create an account and then go to a map of your area to see who is playing a game and at what time. The benefit of this app is because there are so many users we can run ads and don't even have to charge the users to use the app. It's a win win for us and the users. 

### Design
Here are diagrams of what the login page as well as the maps page look like.
![Screenshot 2023-05-09 233025](https://github.com/Bretton24/startup/assets/103625821/8ad2d5e5-729a-4d0e-a714-b97f10194353)
![Screenshot 2023-05-09 231016](https://github.com/Bretton24/startup/assets/103625821/c26c0348-1da1-484f-bedc-30b4da4a446b)


### Key features

- Secure login over HTTPS
- Ability to add yourself to a game
- Displays an interactive map where games are taking place
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

## HTML deliverable

For this deliverable I added the application structure.

- **HTML pages** - Three HTML pages that represent the ability to login, add yourself to a local game on a map, and look at your friends and your record.
- **Links** - The login page links to the findgame page. There are links to every html page within each page. 
- **Text** - Each of the voting choices is represented by a textual description.
- **Images** - I added an image on the gamesplayed.html to spice up what the application looked like.
- **Login** - Input box and submit button for login.
- **Database** - The different games you can add yourself to represents data being pulled from a database.
- **WebSocket** - The current players in a game represent real time information of who will be at the game. 
