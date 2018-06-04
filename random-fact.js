"use strict"; 

function displayRandom () {  // declaring a function called displayRandom is returning a random quote
    const randomFacts = [
        "The heart of a shrimp is located in its head.", 
        "A snail can sleep for three years.", 
        "The fingerprints of a koala are so indistinguishable from humans that they have on occasion been confused at a crime scene.", 
        "Nearly three percent of the ice in Antarctic glaciers is penguin urine.", 
        "Bats always turn left when leaving a cave.", 
        "Giraffes have no vocal chords.", 
        "Great white sharks can detect a drop of blood in 25 gallons of water and can even sense tiny amounts of blood from three miles away.", 
        "Oysters can change gender multiple times during their life.", 
        "Seahorses are monogamous and mate for life.", 
        "All clownfish are born male, and will only change sex to become a dominant female."
    ]; 

    let fact = randomFacts[Math.floor(Math.random()*randomFacts.length)]; // giving you random quote from the array 
    return fact; // we need to return quote, or we will not have access to the randomized quotes 
}

// console.log(quote);  // verfied it worked so get rid of it 
module.exports = displayRandom; // exports the function 

// best practice would be to break up additional function in separate script files and require them in server.js 
