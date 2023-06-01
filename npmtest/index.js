const giveMeAJoke = require('give-me-a-joke');
giveMeAJoke.getRandomJokeOfTheDay((joke) => {
    console.log(joke);
})