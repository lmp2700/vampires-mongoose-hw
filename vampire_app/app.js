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

// Find all the vampires that that are females
// Vampire.find({gender: 'f'}, (err, foundVampire) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampire);
//     }
// })

// have greater than 500 victims
// Vampire.find({victims: {$gte:500}}, (err, foundVampire) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampire);
//     }
// })

// have fewer than or equal to 150 victims
// Vampire.find({victims: {$lte:150}}, (err, foundVampire) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampire);
//     }
// })

// have a victim count is not equal to 210234
// Vampire.find({victims: {$nin:210234}}, (err, foundVampire) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampire);
//     }
// })

// have greater than 150 AND fewer than 500 victims
// Vampire.find({$and: [{victims:{$gt:150}}, {victims:{$lt:500}}]}, (err, foundVampire) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampire);
//     }
// })

// Select all the vampires that:
// have a title property
// Vampire.find({title:{$exists:true}}, (err, foundVampire) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampire);
//     }
// })

// do not have a victims property
// Vampire.find({victims:{$exists:false}}, (err, foundVampire) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampire);
//     }
// })

// have a title AND no victims
// Vampire.find({$and:[{victims:{$exists:false}},{title:{$exists:true}}]},(err, foundVampire)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log(foundVampire)
//     }
// })

// have victims AND the victims they have are greater than 1000
// Vampire.find({$and:[{victims:{$exists:true}},{victims:{$gt:1000}}]},(err, foundVampire)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log(foundVampire)
//     }
// })


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
