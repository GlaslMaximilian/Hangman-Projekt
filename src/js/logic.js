let counterP
let letters;
let words;
let finalWord;
let compareWord;
let counter = 0;
let letterhint;
let ausgabe;
let divausgabe;
let id;
let letterhintIndex;
let strokes;

let hiddenWord = [];
let indexArray = [];
let previousChars = [];

fetch('js/input/woerter.txt')
    .then(response => response.text())
    .then(data => {
        words = data.split('\n'); 
        compareWord = word_(words).trim().toLowerCase(); 
        let word_ = e => {
            return e[Math.floor(Math.random()*e.length)]
        }
        finalWord = compareWord.split(''); 
        finalWord.forEach( () => {
            hiddenWord.push('______   ') 
        });
        document.getElementById('ausgabe').innerHTML = hiddenWord.join('   '); 
        ausgabe = hiddenWord; 
    });
function checkWord(){
    eingabe = document.getElementById('eingabe').value.toLowerCase();  
    document.getElementById('counter').innerHTML = counter; 
    let n = compareWord.localeCompare(eingabe);
    if (n === 0) {
        counter = 0;
        setTimeout( () => {
            location.reload(); 
        }, 3000);  
    } else {
        displayHangman(); 
    }
}
function hint(){
    displayHangman(); 
    generateRandomIndex(); 
    previousChars.push(finalWord[letterhintIndex]); 
    finalWord.forEach( (e,i) => { 
        if (e.toLowerCase() === finalWord[letterhintIndex]) ausgabe[i] = finalWord[i];   
    }); 
    document.getElementById('ausgabe').innerHTML = ausgabe.join('   ');
    console.log(ausgabe);
}
function displayHangman() { 
    counter++; 
    document.getElementById('counter').innerHTML = counter; 
    if (counter === 1) document.getElementById('stroke-2').style.display = "inline";
    if (counter === 2) document.getElementById('stroke-3').style.display = "inline";
    if (counter === 3) document.getElementById('stroke-4').style.display = "inline";
    if (counter === 4) document.getElementById('ellipse').style.display = "inline";
    if (counter === 5) document.getElementById('stroke-6').style.display = "inline";
    if (counter === 6) document.getElementById('stroke-7').style.display = "inline";
    if (counter === 7) document.getElementById('stroke-8').style.display = "inline";
    if (counter === 8) document.getElementById('stroke-9').style.display = "inline";
    if (counter === 9) { 
        document.getElementById('stroke-10').style.display = "inline"; 
        counter = 0;
        setTimeout( () => {
            location.reload(); 
        }, 3000); 
    }
}
function generateRandomIndex(){
    letterhintIndex = Math.floor(Math.random()*finalWord.length);
    checkNoRecall(); 
}
function checkNoRecall() {
    previousChars.forEach( e => { 
        if (e === finalWord[letterhintIndex]) generateRandomIndex(); 
        else return letterhintIndex; 
    });
}
