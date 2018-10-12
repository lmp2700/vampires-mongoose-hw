// 1. Require your node modules
const vampireArray = require('./populateVampires');
// const connectionString = ('mongodb://localhost/test');
const mongoose = require('mongoose');
// const Vamp = require('../test/model-tests');
const Vampire = require('./models/vampire');
const vampireApp = require('./vampire_app')

Vampire.collection.insertMany(vampireArray, (err, data) => {
    console.log(vampireArray)
    mongoose.connection.close();
  });

Vampire.create({
    name: 'Vlad',
    hair_color: 'black',
    eye_color: 'black',
    dob: new Date(1448, 2, 13, 7, 47),
    loves: ['blood','stakes'],
    location: 'Romania',
    gender: 'm',
    victims: 2000,
}, (err, createdVampire) => {
    if(err) {
        console.log(err);
    } else {
        console.log(createdVampire)
    }
});
Vampire.create({
    name: 'Radu',
    hair_color: 'black',
    eye_color: 'black',
    dob: new Date(1452, 2, 13, 7, 47),
    loves: ['food','boys'],
    location: 'Romania',
    gender: 'm',
    victims: 243,
}, (err, createdVampire) => {
    if(err) {
        console.log(err);
    } else {
        console.log(createdVampire)
    }
});
Vampire.create({
    name: 'Meng Die',
    hair_color: 'black',
    eye_color: 'brown',
    dob: new Date(542, 2, 13, 7, 47),
    loves: ['blood','power'],
    location: 'Shanghai, China',
    gender: 'f',
    victims: 768,
}, (err, createdVampire) => {
    if(err) {
        console.log(err);
    } else {
        console.log(createdVampire)
    }
});
Vampire.create({
    name: 'Gretchen',
    hair_color: 'blonde',
    eye_color: 'green',
    dob: new Date(1763, 2, 13, 7, 47),
    loves: ['flight','chains'],
    location: 'German, Europe',
    gender: 'f',
    victims: 567,
}, (err, createdVampire) => {
    if(err) {
        console.log(err);
    } else {
        console.log(createdVampire)
    }
});



// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// ### Add some new vampire data

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
