let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = [' ate', ' peed', ' crushed', ' broke'];
let what = [' my homework', ' my phone', ' the car'];
let when = [' before the class', ' when I was sleeping', ' while I was exercising', ' during my lunch', ' while I was praying'];

function getRandomInt(Array) {
    return Math.floor(Math.random() * Array.length);}


let Quien = who[getRandomInt(who)]
let Accion = action[getRandomInt(action)]
let Que = what[getRandomInt(what)]
let Cuando = when[getRandomInt(when)]

//let Quien = who[indiceQuien]
//let Accion = action[indiceAccion]
//let Que = what[indiceQue]
//let Cuando = when[indiceCuando]

let excusa = Quien + Accion + Que + Cuando

console.log(excusa)