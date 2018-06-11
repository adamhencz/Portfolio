// JavaScript Document
var string = "CURRICULUM VITAE";
var str = string.split("");
var el = document.getElementById('strng');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 120);
})();