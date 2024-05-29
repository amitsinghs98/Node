const btn = document.querySelector('.btn-country');
const countryContainer = document.querySelector('.countries');

/////////////////////////

const request = new XMLHttpRequest(); // object created for xml http 
request.open('GET','');
request.send();
console.log(request.responseText);

request.addEventListener('load',function(){
    console.log(this.responseText)
})

