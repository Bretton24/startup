const express = require('express');
const app = express();

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use('/api', apiRouter);

// GetPlayers
apiRouter.get('/players', (req, res) => {
    players = req.body;
    res.send(players);
})

// Return the application's default page if the path is unknown
app.use((req, res) => {
    res.sendFile('index.html', { root: 'public'});
});

//starts the server and listens for any requests
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
