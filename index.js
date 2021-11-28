//CONTINUOUS ASSESSMENT I - BSC30921
//STUDENT ID: 21565
//STUDENT NAME: ALESSANDRA SILVA DOS REIS


//declarations and imports 
const express = require('express')                    //for server and routes
const bodyParser = require('body-parser')             //for x-www-urlencoded (html form like) variables
const app = express()                                 //defining the app to manage the requests and commands (such as get, push, post, put, delete...)
const port = 3000
const mongoose = require('mongoose')                  //requesting the driver to allow the connection to the database    
const Band = require('./band.js')                     //calling and accessing the class constructor from another file
const { findByIdAndDelete } = require('./band.js')    //To allow access to change data in another file

//bodyParser being called/used by the app
app.use(bodyParser.urlencoded({ extended: false }))

//API ROUTES

//show the bands from database through the GET request
app.get('/band', (req, res) => {

    //with the data found and stored in the result variable
    //the Model on band.js will be used to obtain all bands information entered from the database
    Band.find((err, result) => {

        // in case of an error on the input, a message will be sent to the user 
        if (err) {
            res.send("Error occured no band retrieved")
            return
        }

        //in case of no error, the input will be sent
        res.send(result)
        //the result will also be logged and showed on the terminal
        console.log(result)
    })
})

// FIND ONE BY ID
//GET request and A PARAMETER (that in this case is ID) will be used to to find/get the id
app.get('/band/:id', (req, res) => {
    const id = req.params.id; // it will print only one element

    Band.findById(id, (err, band) => {
        // in case of not indentifying the input, a message will be sent to the user 
        if (err) {
            res.send("Band not found")
        }

        //the user will get the information back
        res.send(band)
        //it will also log the band in the console 
        console.log(band)
    })
})

// POST 
// insert request to add band into the database

app.post('/band', (req, res) => {
    console.log("Inserting a band in the database")
    //add band in the database
    
    let stillPlaying = false;
    if (req.body.stillPlaying === 'true') {
        stillPlaying = true;
    }

    let band = new Band({

        name: req.body.name, // String
        genre: req.body.genre, // String
        origin: req.body.origin, // String
        members: parseInt(req.body.members), //Number
        formedIn: parseInt(req.body.formedIn) || "No information inserted", //Number
        albums: parseInt(req.body.albums), //Number
        stillPlaying: req.body.stillPlaying // Boolean

    });

    //insert a band and check if is there any error in the input
    band.save(err => {

        //in case of an error the message below will be sent to the user
        if (err) { 
            res.send('Band not inserted into the database')
        }

        //the message below is sent when the input is correct
        res.send('Band inserted into the database')
        //the message below will also be logged on the console
        console.log("Band is in the database")
    })
})

//PUT
//request to update, correct or change any information that was previously inserted and that is retrieved on the database
app.put('/band/:id', (req, res) => {

    // the attempt to change will be logged on the console
    console.log("Trying to edit band")

    //the data that can be found and put available for changes
    Band.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            genre: req.body.genre,
            origin: req.body.origin,
            members: parseInt(req.body.members),
            formedIn: parseInt(req.body.formedIn),
            albums: parseInt(req.body.albums),
            stillPlaying: req.body.stillPlaying

        }, err => {

            //in case of errors the command below will let the user knows what is wrong with the input
            if (err) {
                res.send("It didn't edit. The error is: " + err)
                return;
            }

            //message to let the user know that the input has modified
            res.send("It was successfully edited")
        })
})

//DELETE
//request to remove a band by using DELETE  and a PARAMETER (that in this case is ID)
app.delete('/band/:id', (req, res) => {

    Band.findByIdAndDelete(req.params.id, err => {
        
        //in case of error the message will be sent to the user
        if (err) {
            res.send("The band was not deleted")
            return
        }

        //when the band is deleted the message below will be shown to the user
        res.send("Band deleted")
        //the message with the specific id of the band will be logged on the console
        console.log(`Band with id ${req.params.id} is deleted`)

    })
})

//start the server
app.listen(port, () => {
    //my database link from mongodb
    mongoose.connect('mongodb+srv://admin:admin@bandapi.t6azh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').
        catch(error => console.log(error));
    console.log(`Example app listening at http://localhost:${port}`)
})

