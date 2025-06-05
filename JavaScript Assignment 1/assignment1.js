// Arrays for the words for each button
const purple = ["The turkey ", "Mom ", "Dad ", "The dog ", "My teacher ", "The elephant ", "The cat "];
const blue = [" Sat on ", " ate ", " danced with ", " saw ", " doesn't like ", " kissed "];
const lime = [" a funny ", " a scary ", " a goofy ", " a slimy ", " a barking ", " a fat "];
const orange = [" goat ", " monkey ", " fish ", " cow ", " frog ", " bug ", " worm "];
const pink = [" on the moon", " on the chair", " in my spaghetti", " in my soup", " on the grass", " in my shoes"];

// get variables for positions in arrays
let purplePos = 0;
let bluePos = 0;
let limePos = 0;
let orangePos = 0;
let pinkPos = 0;

document.getElementById("p1").innerHTML = purple[purplePos];
document.getElementById("p2").innerHTML = blue[bluePos];
document.getElementById("p3").innerHTML = lime[limePos];
document.getElementById("p4").innerHTML = orange[orangePos];
document.getElementById("p5").innerHTML = pink[pinkPos];

// Add a event listener to the purple button so that when it is clicked, the word changes to the next word in the array.
const purpleButton = document.getElementById('purple1');
purpleButton.addEventListener('click', function() {
    purplePos += 1;
    if (purplePos > 6) {purplePos = 0;}
    document.getElementById("p1").innerHTML = purple[purplePos];
});

// Add a event listener to the blue button so that when it is clicked, the word changes to the next word in the array.
const blueButton = document.getElementById('blue2');
blueButton.addEventListener('click', function() {
    bluePos += 1;
    if (bluePos > 5) {bluePos = 0;}
    document.getElementById("p2").innerHTML = blue[bluePos];
});

// Add a event listener to the blue button so that when it is clicked, the word changes to the next word in the array.
const limeButton = document.getElementById('lime3');
limeButton.addEventListener('click', function() {
    limePos += 1;
    if (limePos > 5) {limePos = 0;}
    document.getElementById("p3").innerHTML = lime[limePos];
});

// Add a event listener to the blue button so that when it is clicked, the word changes to the next word in the array.
const orangeButton = document.getElementById('orange4');
orangeButton.addEventListener('click', function() {
    orangePos += 1;
    if (orangeButton > 6) {orangeButton = 0;}
    document.getElementById("p4").innerHTML = orange[orangePos];
});

// Add a event listener to the blue button so that when it is clicked, the word changes to the next word in the array.
const pinkButton = document.getElementById('pink5');
pinkButton.addEventListener('click', function() {
    pinkPos += 1;
    if (pinkPos > 5) {pinkPos = 0;}
    document.getElementById("p5").innerHTML = pink[pinkPos];
});

// Add a event listener to the blue button so that when it is clicked, all the paragraphs are set to random words
const redButton = document.getElementById('red1');
redButton.addEventListener('click', function() {
    document.getElementById("p1").innerHTML = purple[Math.floor(Math.random() * 7)]
    document.getElementById("p2").innerHTML = blue[Math.floor(Math.random() * 6)]
    document.getElementById("p3").innerHTML = lime[Math.floor(Math.random() * 6)]
    document.getElementById("p4").innerHTML = orange[Math.floor(Math.random() * 7)]
    document.getElementById("p5").innerHTML = pink[Math.floor(Math.random() * 6)]
});