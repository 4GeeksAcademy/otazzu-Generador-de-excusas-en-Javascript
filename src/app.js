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

    frase = who[getRandom(who.length)] + action[getRandom(action.length)] + what[getRandom(what.length)] + when[getRandom(when.length)];

    return frase;
    
}

function getRandom(n){

    return Math.floor(Math.random()*n)

}