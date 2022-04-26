function addToCount(value){
    //get the starting value
    let total = document.querySelector("#count").innerHTML
    //innerHTML teel you what is between the tags. 
    //Increment by one
    total = parseInt(total)+ value
    //display the updated value
    document.querySelector("#count").innerHTML = total
}
console.log(parseInt('1')+ 1)
//parseInt convers a string into an interger. 
