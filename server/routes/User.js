//routers go here

const express = require('express')
const app = express()

const UserController = require('../controllers/User')

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  UserController.find
})

//make an express server