console.log("Hello! We've got objects!");

//objects have properties, with a lot of elements in it. 
//they have keys and properties.

//Object literal

const baseballHat = {
    type: 'cap',
    color: 'black',
    size: 'XL'
}

const sunHat = {
    type: 'sun',
    color: 'yellow',
    size: 'L'
}

console.log('baseballHat', baseballHat);
// one below doesn't work well in console. it returns 
//object object.
console.log(`The baseballHat is: ${baseballHat}`);

//console.log(`The baseballHat is ${baseballHat.color} in size` ${baseballHat.size});

// const w/ objects
// can I do this????

sunHat.size = 'XL'
console.log('After setting size:', sunHat);

// the code below won't work cause you can't change the actual object,

// sunHat = {
//     type: 'sun',
//     color: 'white',
//     size: 'S'
// }
// console.log('set to a new hat?', sunHat);

let penguins = [
    {
        name: 'Emperor',
        colors: ['Black', 'White', 'Yellow'],
        size: 1.0,
        isCute: true
    },
    {
        name: 'Little',
        colors: ['Slate-blue', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Rockhopper',
        colors: ['Black', 'White', 'Yellow'],
        size: 0.75,
        isCute: true
    },
    {
        name: 'African',
        colors: ['Black', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Gentoo',
        colors: ['Black', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Sea Gull',
        colors: ['Gray'],
        size: 0.25,
        isCute: false
    },
    {
        name: 'Chinstrap',
        colors: ['Black', 'White'],
        size: 0.25,
        isCute: true
    },
    {
        name: 'Macaroni',
        colors: ['Black', 'White', 'Yellow'],
        size: 0.5,
        isCute: true
    },
];

let penguinCute = [];
// function whoIsCute(pop){
//    for(let i=0; i<penguins.length; i++){ //This was the code I was developing
//     if(penguins[i].isCute === true)      //before we went over it in class.
//     penguinCute.push(pop);
//    }
//     return false// end else
// }// end function

function findCuteOnes(inputArray){
    let outputArray= [];//declred new variable with empty array
    for(let thing of inputArray){// for of loop, thing is the random alias
        console.log('a thing', thing);
        if(thing.isCute === true)
        outputArray.push(thing);
    }
    return outputArray;
}
console.log('We have cute ones!', findCuteOnes(penguins));

function findCuteTwo(inputArray){
for (let i=0; i<inputArray.length; i++){
    let thing = inputArray[i];// because the other function was declred 
    if(thing.isCute === true){// we just set thing = inputArray[i] for easier use.
        outputArray.push(thing);
    }
    return outputArray;
}
}

// object constructor functions shortens up the syntax for making new things with less code

function Hat(myType,myColor,mySize){
    this.type = myType;
    this.color = myColor;
    this.size = mySize;
}
const fancyHat = new Hat('fancy', 'gold', 'M');
            // must use new otherwise it won't
            //reconize the Hat function
console.log(fancyHat);
