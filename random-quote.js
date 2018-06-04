"use strict"; 

function displayRandom () {
    const randomQuotes = [
        "If it bleeds, you can kill it", 
        "Embrace the suck", 
        "Just Do it", 
        "What I do is not up to you", 
        "Doubt kills more dreams than failure ever will", 
        "Truth is on the side of the oppressed"
    ]; 

    let quote = randomQuotes[Math.floor(Math.random()*randomQuotes.length)];
    return quote; // we need to return quote, or we will not have access to the randomized quotes 
}
// console.log(quote);  // verfied it worked so get rid of it 
module.exports = displayRandom; // you can import this from server.js