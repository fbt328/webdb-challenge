const express = require('express');
const knex = require('knex');
const helmet = require ('helmet');

const server = express();

// const knexConfig = {
//     client: 'sqlite3',
//     connection: {
//         filename: './data/projects.db3'
//     },  
//     useNullAsDefault: true,
//   }
  
  const dbConfig = require('./knexfile.js')
  const db = knex(dbConfig.developement);


// test .get to make sure the server is working/listening
server.get('/', (req, res) => {
    res.send('Hello World, from Sprint Challenge - Web DB Challenge');
});



// actions post endpoint
server.post('/api/actions', async (req, res) => {
    try {
        const newAction  = await db('actions').insert(req.body);
        res.status(200).json(newAction);
        console.log('post success')
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'There was an error when adding your action'})
    }
})
server.post('/api/projects/', async (req, res) => {
    try {
            const newProject = await db('projects').insert(req.body);
            res.status(200).json(newProject);
            console.log('post success')
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'There was an error adding your project'})
    }
})



// Projects Endpoints
// get endpoint
server.get('/api/projects/', async (req, res) => {
    try {
        const projects = await db('projects')
        res.status(200).json(projects);
        console.log('get project success')
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'There was an error getting your projects'})
    }
})

server.get('/api/projects/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const projectbyID = await db('projects')
        res.status(200).json(projectbyID);
        console.log('get by id success')
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'There was an error getting your project, are you sure the ID is correct?'})
    }
})



// post
server.post('/api/projects/', async (req, res) => {
    try {
            const newProject = await db('projects').insert(req.body);
            res.status(200).json(newProject);
            console.log('post success')
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'There was an error adding your project'})
    }
})


  const PORT = 9090;
  server.listen(PORT, () => {
      console.log(`server is now listening on port ${PORT}!`);
  })

  // [ ] Build the database and tables using knex migrations. **Seeding is not needed**.
// - [ ] Build the API with the following endpoints:

//   - [ ] POST for adding projects.
//   - [ ] POST for adding actions.
//   - [ ] GET for retrieving a `project` by its `id` that returns an object with the following structure:

//     ```js
//     {
//       id: 1,
//       name: 'project name here',
//       description: 'the project description',
//       completed: false, // or true, the database will return 1 for true and 0 for false
//       actions: [
//         {
//           id: 1,
//           description: 'action description',
//           notes: 'the action notes',
//           completed: false // or true
//         },
//         {
//           id: 7,
//           description: 'another action description',
//           notes: 'the action notes',
//           completed: false // or true
//         }
//       ]
//     }