function numberPicker(){
    pick = Math.floor(Math.random() * 100 + 1)
    return pick
}

const compInput = numberPicker()


function guessInput(){
    let input = document.querySelector("#playerInput").value
    if(input == compInput){
        alert(`The computer chose ${compInput} and you picked ${input}. They are a match! You did it!`)
    }else if(input < compInput){
        alert(`your pick ${input} is too low. Try again`)
    }else if(input > compInput){
        alert(` your pick is too ${input} high. Try again`)
    }
    
}