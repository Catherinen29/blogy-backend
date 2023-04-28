const express = require("express")
const mongoose = require("mongoose")

// Instantiate a Router (a mini app that only handles routes)
const router = express.Router()

/**
 * When you're building an API, you need to be making comments
 * not just for yourself, but for anyone else that sees your code too
 */

/**
 * Action:          INDEX
 * Method:          GET
 * URI:             /
 * Description:     Get the users to the app
 */

router.get("/", (req, res) => {
    res.json({ message: 'Welcome to Blogy' })
}) 

// Export the Router so we can use itin the 'server.js' file
module.exports = router