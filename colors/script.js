function alertMe(){
    alert("Clicked")
}
function changeBkgColor(color){
    document.querySelector('body'). classList.remove('red', 'green', 'blue', 'violet' ,'aqua')
    // color must be removed before adding another color.
    document.querySelector('body'). classList.add(color)
    // document.getElementById grabs the items with the Id on the HTML. 
    // return the first elment of the selector
    // classList just add the classes on 
}