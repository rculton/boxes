console.log("javascript is loaded")

function sayHello(name){
    return "Hello " + (name || "anonymous person")
}

function setH1(string){
    var h1 = document.querySelectorAll('h1')[1]
    h1.innerText = string

}

function showGreeting(){
    setH1(sayHello("Ryan"))
}

var button = document.querySelector('button')

button.addEventListener('click', function(){
    setH1(sayHello("Ryan!"))
})