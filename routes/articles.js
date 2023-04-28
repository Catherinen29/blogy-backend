// Require necessary NPM packages
const express = require("express")

// Import the article model here too
// Require Mongoose Model for Article
const Article = require("../models/article") // ../ is cd'ing up twice!

// Instantiate a Router (a mini app that only handles routes)
const router = express.Router()

// Comments to describe what routes you're doing to your routes

/**
 * Action:          INDEX
 * Method:          GET
 * URI:             /api/articles
 * Description:     Get All Articles
 */
router.get("/api/articles", (req, res) => {
    Article.find() 
    // above: use mongoose to retrieve all articles in the db as an array
    .then((allArticles) => {
        res.json({ articles: allArticles }) // give it a key name this time
            // this helps you check that the right data is being returned, based on the key
    // Catch any errors that might occur
    .catch((error) => {
        res.status(500).json({ error: error }) // send an internal error (500)
    })
    // the keys help you check that the right data is being returned, based on the key
    })
}) // this should now return an empty array (with key articles)
    // because we haven't created any objects yet

/**
 * Action:          SHOW
 * Method:          GET
 * URI:             /api/articles/42
 * Description:     Get an Article by Article ID
 */

/**
 * Action:          DESTROY
 * Method:          DELETE
 * URI:             /api/articles/42
 * Description:     Delete an Article by Article ID
 */

/**
 * Action:          UPDATE
 * Method:          PUT/PATCH
 * URI:             /api/articles/42
 * Description:     Update an Article by Article ID
 */

/**
 * Action:          CREATE
 * Method:          POST
 * URI:             /api/articles/
 * Description:     Create a new Article
 */



// Export the Router so we can use it in the server.js file
module.exports = router