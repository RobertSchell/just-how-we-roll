/**********
 * DATA *
 **********/

//Global empty array variables to push our random numbers into
let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

//get random number function
const getRandomNumber = function(max){
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/

//.querySelector variables

//first die (6 sided)
let imageD6 = document.querySelector("#d6-roll"); //grabbing img for 6 sided die via id from html
let meanD6 = document.querySelector("#d6-rolls-mean");

//second dice (6 sided x 2)
let imageDoubleD61 = document.querySelector("#double-d6-roll-1"); //grabbing img for left 6 sided die via id from html
let imageDoubleD62 = document.querySelector("#double-d6-roll-2"); //grabbing img for right 6 sided die via id from html
let meanDoubleD6 = document.querySelector("#double-d6-rolls-mean");

//third die (12 sided)
let imageD12 = document.querySelector("#d12-roll"); //grabbing img for 12 sided die via id from html
let meanD12 = document.querySelector("#d12-rolls-mean");

//fourth die (20 sided)
let imageD20 = document.querySelector("#d20-roll"); //grabbing img for 20 sided die via id from html
let meanD20 = document.querySelector("#d20-rolls-mean");

//reset button
let resetButton = document.querySelector("#reset-button"); //grabbing img for reset button via id from html

reset();  //calling reset function to make sure our page starts at reset!

/*******************
 * EVENT LISTENERS *
 *******************/

//eventListener for first die click (6 sided)
imageD6.addEventListener("click", function(){
    console.log("D6 clicked!");//verifying eventListeners working in inspect console
    d6RollFunction();// calling our d6RollFunction from "Handling Functions" to run when die is "clicked"
});

//eventListeners for BOTH of third set of dice click (6 sided x 2)
//left die
imageDoubleD61.addEventListener("click", function(){
    console.log("DoubleD61 clicked!");
    dDoubleSixRollFunction();
});
//right die
imageDoubleD62.addEventListener("click", function(){
    console.log("DoubleD62 clicked!");
    dDoubleSixRollFunction();
});

//eventListener for third die click (12 sided)
imageD12.addEventListener("click", function(){
    console.log("D12 clicked!");
    d12RollFunction();
});

//eventListener for fourth die click (20 sided)
imageD20.addEventListener("click", function(){
    console.log("D20 clicked!");
    d20RollFunction();
});

//eventListener for reset button (Reset All Rolls)
resetButton.addEventListener("click", function(){
    console.log("Reset clicked!");//just checking to make sure query/eventListeners working
    reset();//calling our reset function below
});

/******************
 * RESET FUNCTION *
 ******************/

function reset(){
    //global [] variables
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];
    
    //reset images
    //images/start/d6.png //copy relative path (right click image file in explorer)
    imageD6.src = "./images/start/d6.png"; //paste relative path, each slash leads to next folder til we reach img doc type
    imageDoubleD61.src = "./images/start/d6.png";
    imageDoubleD62.src = "./images/start/d6.png";
    imageD12.src = "./images/start/d12.jpeg";
    imageD20.src = "./images/start/d20.jpg";

    //change text of mean calc to N/A upon reset
    meanD6.innerText = "N/A";
    meanDoubleD6.innerText = "N/A";
    meanD12.innerText = "N/A";
    meanD20.innerText = "N/A";
}

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

//create roll function for all dice

//roll function for 6 sided die
function d6RollFunction(){
    let result = getRandomNumber(6); //calling getRandom function to gen random number //max number for 6 sided die 
    console.log(result);//testing in inspect console
    imageD6.src = `./images/d6/${result}.png`; //using string int to assign img result from d6 in explorer based on random number generated by getRandomNumber function
    //./images/d6/1.png //if 1 is rolled, use this image
    //./images/d6/2.png //if 2 is rolled, use this image
    //...
    //./images/d6/6.png //if 6 is rolled, use this image

    //a longer way to do the above is with if/else if statements
    // if(result === 1){
    //    imageD6.src = "./images/d6/1.png";
    // }else if(result === 2){
    //      imageD6.src = "./images/d6/2.png";
    // }else if(etc.)
    //}
    sixes.push(result);//pushing random result number into empty sixes array via getRandNum function
    console.log(sixes);//testing in inspect console
    meanD6.innerText = getMean(sixes); // changing innerText of meanD6 to = mean of [numbers] utilizing getMean function
}

//roll function for 6 sided dice x2
function dDoubleSixRollFunction(){
    let result1 = getRandomNumber(6);
    let result2 = getRandomNumber(6);
    console.log(result1);
    console.log(result2);
    imageDoubleD61.src = `./images/d6/${result1}.png`;
    imageDoubleD62.src = `./images/d6/${result2}.png`;
    doubleSixes.push(result1 + result2);
    console.log(doubleSixes);
    meanDoubleD6.innerText = getMean(doubleSixes);      
}

//roll function for 12 sided die
function d12RollFunction(){
    let result = getRandomNumber(12);
    console.log(result);
    imageD12.src = `./images/numbers/${result}.png`;
    twelves.push(result);
    console.log(twelves);
    meanD12.innerText = getMean(twelves);
}

//roll function for 20 sided die
function d20RollFunction(){
    let result = getRandomNumber(20);
    console.log(result);
    imageD20.src = `./images/numbers/${result}.png`;
    twenties.push(result);
    console.log(twenties);
    meanD20.innerText = getMean(twenties);
}

/****************
 * MATH SECTION *
 ****************/

//FUNCTION FOR GETTING MEAN OF DICE ROLLS

function getMean(array){
    let sum = 0;// counter variable
    for(let i = 0;i < array.length; i++){
        sum += array[i];// adds current sum to array at each index
    }
    return sum / array.length;//return sum divided by array.length to get mean
}
