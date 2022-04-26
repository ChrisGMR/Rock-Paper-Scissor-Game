function Ai(){
    pick = Math.floor(Math.random() * 3)
    if(pick === 0){
        return 'Rock'
    }else if(pick === 1){
        return 'Paper'
    }else if(pick === 2){
        return 'Scissors'
    }
}

let compInput= Ai()

function selected(button){
    if(compInput === 'Rock' && button === 'Rock'){
        confirm(`The computer picked ${compInput} and you picked ${button} it is a tie`)
        location.reload();
        
    }else if(compInput === 'Scissors' && button === 'Rock'){
        confirm(`The computer picked ${compInput } and you picked ${button} you Won!`)
        location.reload(); 
        
    }else if(compInput === 'Paper' && button === 'Rock'){
        confirm(`The computer picked ${compInput} and you picked ${button} you lost`)
        location.reload();
        
    }else if(compInput === 'Paper' && button === 'Paper'){
        confirm(`The computer picked ${compInput} and you picked ${button} it is a tie`)
        location.reload();
        
    }else if(compInput === 'Scissors' && button === 'Paper'){
        confirm(`The computer picked ${compInput } and you picked ${button} you lost`)
        location.reload();
        
    }else if(compInput === 'Rock' && button === 'Paper'){
        confirm(`The computer picked ${compInput} and you picked ${button} you Won!`)
        location.reload();
        
    }else if(compInput === 'Paper' && button === 'Scissors'){
        confirm(`The computer picked ${compInput} and you picked ${button} you Won!`)
        location.reload();
        
    }else if(compInput === 'Rock' && button === 'Scissors'){
        confirm(`The computer picked ${compInput } and you picked ${button} you lost`)
        location.reload();
        
    }else if(compInput === 'Scissors' && button === 'Scissors'){
        confirm(`The computer picked ${compInput} and you picked ${button} it is a tie`)
        location.reload(); 
    }else{
        alert("Someting went wrong. Try reloading the page.")
        
    }
    
}


// let colorArray = ['red', 'blue','yellow']
// function chBackcolor() {
//     let randomNum = Math.floor(Math.random() * colorArray.length);
//     document.body.style.background = colorArray[randomNum];
//     window.setTimeout("chBackColor()",1000);
// }



