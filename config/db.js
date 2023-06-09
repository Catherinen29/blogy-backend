// Define the database for the development environment
const localDB = "mongodb://localhost:27017/blogy"

// Environment variable MONGODB_URI will be available in
// Heroku production environment. Otherwise use the 
// development database. 
const currentDB = process.env.MONGODB_URI || localDB

// Export the appropriate database based on the current environment
module.exports = currentDB
// This is so the server knows which environment to run on. 