# 21565-BEWD-CA1

WEB APPLICATION API

FIRST STEPS

To develop the WEB APPLICATION API it was used Visual Studio IDE (version 1.62.3).
An empty folder was previously created and opened through Visual Studio. 
The API was built by using JavaScript programming language on the code.

BAND API 

A file called band.js was added to this folder. 
On the band.js file was set the rules for the class using Schema. It was defined the class and the variables containing information related to music bands formations (such as band name, music genre, total of albums released, etc.). 
This file requests Mongoose and Schema so the class can be defined, and it also export the class to be used as a model in other files.

Another file was added with the name index.js. 
The terminal was opened so the app could run and be tested on the browser and through other platforms.
The node package was installed (with the command npm init). The name, version, description, entry point, and author name of the API was confirmed and after those steps a package.json file was created. It also created node_modules folder with all downloaded packages from NPM in the computer for the project.

Express.js (API reference 4.x) is another Node.js application framework that was installed through the terminal (with the command npm install express). 
Nodemon.js was also installed in order to make it easier to update and run the application simultaneously after the files being saved (the command used was npm install -g nodemon).

From this point, to make the app run it was typed:
nodemon index.js

POSTMAN

Postman API client was downloaded to allow tests on the application. An account was created, and the localhost could run on the Postman application and the information could be changed, added, manipulated, and updated.

MONGO DB

An account was created on MongoDB platform to retrieve and save the database of the application. A database link was created and added to the code on VisualStudio to allow the connection to the MongoDB platform.

