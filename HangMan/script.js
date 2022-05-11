window.onload = function (){
    
}

let categories = ["Fruits", "Furniture", "Films","Books", "Artists", "Holidays"]
let hints = ["Morning juice", "greatest empire which reigned for more than 600 years", "scifi movie from 1979 ... Ripley", "'Here's Johnny'", "famously cut his own ear", "where are my milk and cookies"]
let answer = ["ORANGE", "OTTOMAN", "ALIEN","SHINNING", "VANGOGH", "CHRISTMAS"]


const showHint = document.querySelector('#hint')

function selectCategory(){
    categoryChosen = categories[Math.floor(Math.random() * categories.length)]
    const showCategories = document.createElement('p')
    showCategories.textContent = (`The category chosen : ${categoryChosen}`)
    document.querySelector('#categories').appendChild(showCategories)
    return categoryChosen
}
selectCategory()


function getHint(){
    document.getElementById('hintButton').disabled = true;
    if(categoryChosen === categories[0]){
        const showHint = document.createElement('p')
        showHint.textContent = (`Hint: ${hints[0]}`)
        document.querySelector('#hint').appendChild(showHint)
        
    }else if(categoryChosen === categories[1]){
        const showHint = document.createElement('p')
        showHint.textContent = (`Hint: ${hints[1]}`)
        document.querySelector('#hint').appendChild(showHint)
        
    }else if(categoryChosen === categories[2]){
        const showHint = document.createElement('p')
        showHint.textContent = (`Hint: ${hints[2]}`)
        document.querySelector('#hint').appendChild(showHint)
        
    }else if(categoryChosen === categories[3]){
        const showHint = document.createElement('p')
        showHint.textContent = (`Hint: ${hints[3]}`)
        document.querySelector('#hint').appendChild(showHint)
        
    }else if(categoryChosen === categories[4]){
        const showHint = document.createElement('p')
        showHint.textContent = (`Hint: ${hints[4]}`)
        document.querySelector('#hint').appendChild(showHint)
        
    }else if(categoryChosen === categories[5]){
        const showHint = document.createElement('p')
        showHint.textContent = (`Hint: ${hints[5]}`)
        document.querySelector('#hint').appendChild(showHint)
        
    }

}

function selectAnswer(){
    if(categoryChosen === categories[0]){
        const newAnswer = answer[0]
        return newAnswer
        
    }else if(categoryChosen === categories[1]){
        const newAnswer = answer[1]
        return newAnswer
        
    }else if(categoryChosen === categories[2]){
        const newAnswer = answer[2]
        return newAnswer
        
    }else if(categoryChosen === categories[3]){
        const newAnswer = answer[3]
        return newAnswer
        
    }else if(categoryChosen === categories[4]){
        const newAnswer = answer[4]
        return newAnswer
        
    }else if(categoryChosen === categories[5]){
        const newAnswer = answer[5]
        return newAnswer
    }
}

function disbaleButton(){
    document.getElementById(button).disabled = true;
}

// converts the word into dashed for display within inner HTML
function wordConverter(){
    let newWord = document.createElement('p')
    newWord.id = "blankWord"
    newWord.textContent = selectAnswer().toUpperCase().replace(" ", "--").replace(/[A-Z]/g, '_ ')
    document.querySelector('#answer').appendChild(newWord)
}
wordConverter()
// let bttn 
// what type of object were we getting from the HTML before converting it to toString.
function selected(button){ //button :A
    // console.log(button)
    // bttn = button // 
    // console.log(bttn)
    compare(button)
    
}

let stringAnswer =selectAnswer()
///splits the selected answer within an array. 
function splitAnswer(){
    let wordCheck = stringAnswer.split('')   
    return wordCheck
}


let n = 0 
let guesses = []
// compares the letter to word. 
function compare(bttn){
    let word = splitAnswer()
    let wrongChoice = word.indexOf(bttn)
    for (let i = 0; i < word.length; i++) {
        if(word[i] == bttn){
            let guess = bttn
            guesses.push(guess)
            for(let i = 0; i < word.length; i++) {
                if(guesses.includes(word[i])){
                    
                }else if(word[i].includes(' ')){
                    word[i] = '- '
                }else {
                    word[i] = '_ '
                }
            };
           document.querySelector('#answer').innerHTML = word.join(' ')
            
        }

    }
    if (wrongChoice === -1){
        //count each time that a selection does not match the word.
        n = n + 1 
       switchImage(n)
    }
    // determines win 
    if(guesses.length  === word.length){
        document.getElementById('image').src="./images/Won.gif"
    }
    
}

// animates depending on result of n=== whihc it attemps allowed. 
function switchImage(){
    switch (n) {
        case 0:
            document.getElementById('image').src="./images/hangmananimations/startgame.gif"
            break;
        case 1:
            document.getElementById('image').src="./images/hangmananimations/stroke1.gif"
            break;
        case 2:
            document.getElementById('image').src="./images/hangmananimations/stroke2.gif"
            break;
        case 3:
            document.getElementById('image').src="./images/hangmananimations/stroke3.gif"
            break;
        case 4:
            document.getElementById('image').src="./images/hangmananimations/stroke4.gif"
            break;
        case 5:
            document.getElementById('image').src="./images/hangmananimations/stroke5.gif"
            break;
        case 6:
            document.getElementById('image').src="./images/hangmananimations/stroke6.gif"
            break;
        case 7:
            document.getElementById('image').src="./images/hangmananimations/stroke7.gif"
            break;
        case 8:
            document.getElementById('image').src="./images/hangmananimations/stroke8.gif"
            break;
        case 9:
            document.getElementById('image').src="./images/hangmananimations/stroke9.gif"
            break;
        case 10:
            document.getElementById('image').src="./images/hangmananimations/stroke10.gif"
            break;
        case 11:
            document.getElementById('image').src="./images/hangmananimations/gameover3.gif"
            break;
        default:
            break;
    }
    
}
switchImage()

// In your if on lines 120 - 126, you’re checking to see if there’s letters in guesses, BUT maybe you want a case for when you have a space
// Commas - word (word is an array, so it’s giving you commas - find a better way to convert an Array to a String

// indicator outside the for loop that determines if a match was made or not. 





// Fruits category, hint morning juice, answer Orange
// furniture category, hint greatest empire which reigned for more than 600 years, answer Ottoman 
// Films category, hint scifi movie from 1997 ... Mul-ti-pass, answer the fifth element
// Books, hint 'Here's Johnny', answer The Shinning 
//Artist category, hint famously cut his own ear, answer Vincent Van Gogh
// Holidays category, hint marks the end of a new beggining, answer New years. 

function playAgain(){
    location.reload()
}
