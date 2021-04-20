const express = require('express');
const actionRouter = require('./actions/actions-router')
const projectRoute = require('./projects/projects-router')

// Complete your server here!
// Do NOT `server.listen()` inside this file!

const server = express();

server.use(express.json())

server.use('/api/actions', actionRouter)
server.use('/api/projects', projectRoute)


module.exports = server;
