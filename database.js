const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const playerCollection = db.collection('players');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1});
})().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});




async function addPlayers(allPlayers) {
    const result = await playerCollection.insertMany(allPlayers);
    return result;
}

function getHighestWins() {
    const query = { wins : { $gt: 0, $lt: 900 } };
    const options = {
        sort: { wins: -1},
        limit: 10,
    };
    const cursor = playerCollection.find(query, options);
    return cursor.toArray();
}

module.exports = { 
    getUser,
    getUserByToken,
    createUser,
    addPlayers,
    getHighestWins 
    };