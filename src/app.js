window.onload = function(){

    let excusa = getFrase()

    document.getElementById('excuse').innerHTML = excusa

}

function getFrase(){
    let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
    let action = ['ate ', 'peed ', 'crushed ', 'broke '];
    let what = ['my homework ', 'my phone ', 'the car '];
    let when = ['before the class ', 'when I was sleeping ', 'while I was exercising ', 'during my lunch ', 'while I was praying'];

    let frase = " "

    frase = who[getRandom4()] + action[getRandom4()] + what[getRandom3()] + when[getRandom5()]
    return frase
}

function getRandom4(){
    return Math.floor(Math.random()*4)
}

function getRandom5(){
    return Math.floor(Math.random()*5)
}

function getRandom3(){
    return Math.floor(Math.random()*3)
}