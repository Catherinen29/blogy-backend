// Set up your dependencies!
// Require necessary NPM packages
const express = require("express")
const mongoose = require("mongoose")

// Require Route files
const indexRouter = require("./routes/index")

// Instantiate the express application:
const app = express()

// You don't really want to hard code your port!
// Define the PORT for the API to run on
const port = process.env.PORT || 5000 
        // if the port can't be found in teh environment, 
        // 5000 is the fall back port

/**
 * Routes
 * Mount the imported Routers
 */
app.use(indexRouter)


// Start the server and listen for requests on the given port
app.listen(port, () => console.log(`blogy is listening on port ${port}`))
    // logging is imporant when you are deploying to a server 
    // so you know what is going on. They are the only way you
    // can know whats going on

