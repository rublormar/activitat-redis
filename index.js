const redis = require('redis');
const express = require('express');

const app = express()
const port = 3000

// const client = redis.createClient(6379);

setResponse = (username, joke) => {
    return `<h2>El chiste de ${username} es: ${joke}</h2>`;
}

function checkCache(req, res, next) {
   
}

async function getJoke(req, res, next) {
    
}

app.get('/joke/:username', checkCache, getJoke);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})