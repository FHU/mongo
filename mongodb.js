const mongoose = require('mongoose');

const username = "Kenan";
const password = "AOkXzKLLq0ICgjyV";
const database = "scripturaterDB";

const uri = `mongodb+srv://${username}:${password}@cluster0.oacj6.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose.connect(uri,  {
    useNewUrlParser: true,
  }
  );

const db = mongoose.connection;
db.on('error', err=> {
    console.log(err);
    process.exit(1);
});

db.once('open', ()=> console.log("Connected to mongo"));

const wordSchema = mongoose.Schema( {
    word: String,
    verse: String
});

const Word = mongoose.model("Word", wordSchema, "words");

module.exports = Word;