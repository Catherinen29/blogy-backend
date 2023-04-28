// Require necessary NPM packages
const mongoose = require("mongoose")

// Define article Schema
const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: String,
    author: { type: String, required: true },
    published: { type: Boolean, default: true },
    publishedOn: { type: Date, default: Date.now } // Date.now is the current time!!
}, {
    timestamps: true
})

// Assign/ copmpile/ convert 
// Compile our Model based on the Schema
const Article = mongoose.model("Article", articleSchema)


// Export our Model for use
module.exports = Article