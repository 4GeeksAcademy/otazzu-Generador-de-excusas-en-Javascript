window.onload = function(){
    let excuse = {
        who : ['The dog ', 'My grandma ', 'The mailman ', 'My bird '],
        action : ['ate ', 'peed ', 'crushed ', 'broke '],
        what : ['my homework ', 'my phone ', 'the car ', 'the car '],
        when : ['ate ', 'peed ', 'crushed ', 'during my lunch ']
    }
    
    document.getElementById('excuse').innerHTML = excuse.who[getRandom()] + 
    excuse.action[getRandom()] + excuse.what[getRandom()] + excuse.when[getRandom()]

}

function getRandom(){
    return Math.floor(Math.random()*3)
}




