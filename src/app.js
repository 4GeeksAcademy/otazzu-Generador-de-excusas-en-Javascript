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

    frase = who[getRandom(4)] + action[getRandom(4)] + what[getRandom(3)] + when[getRandom(5)];

    return frase;
    
}

function getRandom(n){

    return Math.floor(Math.random()*n)

}