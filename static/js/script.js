let categorybtns = document.getElementById('categorybtns').querySelectorAll('button'); //get all buttons
categorybtns.forEach( btn => {
    btn.addEventListener('click', categoryfunc);
})

let positionbtns = document.getElementById('positionbtns').querySelectorAll('button'); //get all buttons
positionbtns.forEach( btn => {
    btn.addEventListener('click', positionfunc);
})

let partbtns = document.getElementById('partbtns').querySelectorAll('button'); //get all buttons
partbtns.forEach( btn => {
    btn.addEventListener('click', partfunc);
})

let labelsbtns = document.getElementById('labelsbtns').querySelectorAll('button'); //get all buttons
labelsbtns.forEach( btn => {
    btn.addEventListener('click', labelsfunc);
})

let genderbtns = document.getElementById('genderbtns').querySelectorAll('button'); //get all buttons
genderbtns.forEach( btn => {
    btn.addEventListener('click', genderfunc);
})

function categoryfunc(ev) {
    let id = ev.currentTarget.id;
    let btn = document.getElementById(id);
    alert(id);
}

function positionfunc(ev) {
    let id = ev.currentTarget.id;
    let btn = document.getElementById(id);
    alert(id);
}

function partfunc(ev) {
    let id = ev.currentTarget.id;
    let btn = document.getElementById(id);
    alert(id);
}

function labelsfunc(ev) {
    let id = ev.currentTarget.id;
    let btn = document.getElementById(id);
    alert(id);
}

function genderfunc(ev) {
    let id = ev.currentTarget.id;
    let btn = document.getElementById(id);
    alert(id);
}
