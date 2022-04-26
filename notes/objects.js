// variables 
let name = "Your name"
const lastName = "Allara"
let people = ["Devan", "Cory", "James"]

// OOP - Object Oriented Programing 
// it is a way to store data 

//Example -- Car

//Number of tires
//Transmission 
//Number of doors
// Horn Sound

//Objects work off key value pairs
//Example word: definition 

//Object example

let car = {
    numberOfTires: 4,
    transmission: "Manual",
    numberOfDoors: 4,
    hornSound: "HONK!",
    // the following method will create an utomatic log
    //methods are created with functions.
    logNumberOfTires: function(){
        console.log(`${this.numberOfTires}`)
    },
    // to update information of object as a function
    updateInfo: function(newTransmission){
        this.transmission = newTransmission
    }
}
///we can access part of the object. 
//Example

console.log(car.numberOfTires)
//or
console.log(car['numberOfTires'])
//are ways to get information from objects
// to change values of onject outside of the object
//example

car.numberOfTires = 3
// cna be updated this way. 

// to refrence the method
car.logNumberOfTires()

// Math.random 
const myNum = Math.floor(Math.random() * 3)
// math.floor means to round down.