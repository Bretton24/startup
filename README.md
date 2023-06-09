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
- **Text** - Each players information is represented by text.
- **Images** - I added an image on the gamesplayed.html to spice up what the application looked like.
- **Login** - Input box and submit button for login.
- **Database** - The different games you can add yourself to represents data being pulled from a database.
- **WebSocket** - The current players in a game represent real time information of who will be at the game. 

## CSS deliverable

For this deliverable I properly styled the application into its final appearance.

- **Header, footer, and main content body**
- **Navigation elements** - I changed the color of the anchor elements and added the function of when you hover over they will bold
- **Responsive to window resizing** - My app looks great on all window sizes and devices
- **Application elements** - Used good contrast and whitespace
- **Application text content** - Consistent fonts
- **Application images** - I made a couple of images into circles to look more like a player profile picture.

## JavaScript deliverable

For this deliverable I made my application functional to track and display a user's three votes.

- **login** - When you press login it takes you to the findgame.html page and then displays your username at the top.
- **database** - Displays the different games that are going on on the map. This is currently saved in local storage but will later use a databse.
- **WebSocket** - I used the map function that allows markers to be placed on the map to simulate the user creating a game.
- **application logic** - when the user clicks on different games in the map it allows the user to add themselves to the game that they have clicked on. 

## Service deliverable

For this deliverable I created an HTTP service to host my frontend and provide backend endpoints.

- **Node.js/Express HTTP service** - done!
- **Static middleware for frontend** - done!
- **Calls to third party endpoints** - Calls random quote generator and displays it on gamesplayed html page. 
- **Backend service endpoints** - Backend service end point that takes player info and alphabetizes it.
- **Frontend calls service endpoints** - Frontend calls end point and displays players names alphabetized.


## DB deliverable

For this deliverable I stored and retrieved data from MongoDB.

- **MongoDB Atlas database created** - done!
- **Endpoints for data** - My endpoints now send players data to Mongo and query players by highest number of wins.
- **Stores data in MongoDB** - done!


## Login deliverable

For this deliverable I added user registration and authentication.

- **User registration** - Creates a new account in the database.
- **existing user** - Verifies the user's name and password from data stored in the database
- **Use MongoDB to store credentials** - done!
- **Restricts functionality** - You cannot access the map until you have logged in.

## WebSocket deliverable

For this deliverable I created a chat that allows players to message back and forth.

- **Backend listens for WebSocket connection** - done!
- **Frontend makes WebSocket connection** - done!
- **Data sent over WebSocket connection** - done!
- **WebSocket data displayed** - displays the messages that are sent between each user as well as usernames.