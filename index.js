const express = require('express');
const knex = require('knex');
const helmet = require ('helmet');

const server = express();




// test .get to make sure the server is working/listening
server.get('/', (req, res) => {
    res.send('Hello World, from Sprint Challenge - Web DB Challenge');
});

const PORT = 9090;
server.listen(PORT, () => {
    console.log(`server is now listening on port ${PORT}!`);
})