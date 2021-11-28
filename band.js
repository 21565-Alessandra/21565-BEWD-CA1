// requesting mongoose and Schema so the class can be defined
const mongoose = require('mongoose')
const {Schema} = mongoose;

//setting up the Rules for our class using schema
const bandSchema = new Schema({
    name: String,
    genre: String,
    origin: String,
    members: Number,
    formedIn: Number, //decimal128
    albums: Number,
    stillPlaying: Boolean
})

//constructor for our class 
const Band = mongoose.model('Band', bandSchema);

//export the class, also called a model or a document, to use in different files
module.exports = Band 

