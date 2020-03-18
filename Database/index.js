let mongoose = require('mongoose');

const server = process.env.NODE_ENV === 'production'? `augani:0277427898@cluster0-x1ogt.mongodb.net`: 'localhost:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'huka';     // REPLACE WITH YOUR DB NAME




class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true, useUnifiedTopology:  true })
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error'+err)
       })
  }
}

module.exports = new Database()