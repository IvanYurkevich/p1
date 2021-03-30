
// OPEN WINDOW
document.querySelectorAll('.m1').forEach(function(element){
    element.onclick = showModal;
} );
// CLOSE WINDOW
document.querySelectorAll('.m12').forEach(function (element) {
    element.onclick = closeModal;
});

function showModal(){
    let a = document.querySelector('.modal');
    a.parentElement.classList.remove('hide');
    a.classList.remove('hide');
}

function closeModal (){
    let a = document.querySelector('.modal');
    a.parentElement.classList.add('hide');
    a.classList.add('hide');
}


// OPEN WINDOW2
document.querySelectorAll('.m2').forEach(function(element){
    element.onclick = showModal2;
} );
// CLOSE WINDOW2
document.querySelectorAll('.m22').forEach(function (element) {
    element.onclick = closeModal2;
});

function showModal2(){
    let a = document.querySelector('.modal2');
    a.parentElement.classList.remove('hide2');
    a.classList.remove('hide2');
}

function closeModal2 (){
    let a = document.querySelector('.modal2');
    a.parentElement.classList.add('hide2');
    a.classList.add('hide2');
}




