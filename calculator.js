'use strict'

document.querySelector('.nr-0').addEventListener("click", function() {
    document.querySelector('.full-p').innerHTML += '0';
});
document.querySelector('.nr-1').addEventListener("click", function() {
    document.querySelector('.full-p').innerHTML += '1';
});
document.querySelector('.nr-2').addEventListener("click", function() {
    document.querySelector('.full-p').innerHTML += '2';
});
document.querySelector('.nr-3').addEventListener("click", function() {
    document.querySelector('.full-p').innerHTML += '3';
});
document.querySelector('.nr-4').addEventListener("click", function() {
    document.querySelector('.full-p').innerHTML += 4;
});
document.querySelector('.nr-5').addEventListener("click", function() {
    document.querySelector('.full-p').innerHTML += 5;
});
document.querySelector('.nr-6').addEventListener("click", function() {
    document.querySelector('.full-p').innerHTML += 6;
});
document.querySelector('.nr-7').addEventListener("click", function() {
    document.querySelector('.full-p').innerHTML += 7;
});
document.querySelector('.nr-8').addEventListener("click", function() {
    document.querySelector('.full-p').innerHTML += 8;
});
document.querySelector('.nr-9').addEventListener("click", function() {
    document.querySelector('.full-p').innerHTML += 9;
});
document.querySelector('.nr-dot').addEventListener("click", function() {
    document.querySelector('.full-p').innerHTML += ".";
});
document.querySelector('.op-add').addEventListener("click", function() {
    document.querySelector('.full-p').innerHTML += " + ";
});
document.querySelector('.op-subst').addEventListener("click", function() {
    document.querySelector('.full-p').innerHTML += " - ";
});
document.querySelector('.op-multi').addEventListener("click", function() {
    document.querySelector('.full-p').innerHTML += " × ";
});
document.querySelector('.op-divid').addEventListener("click", function() {
    document.querySelector('.full-p').innerHTML += " ÷ ";
});


document.querySelector('.btn-clear').addEventListener("click", function() {
    document.querySelector('.full-p').innerHTML = "";
});




