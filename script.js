const liste = document.querySelector('.liste');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    console.log("Hello les coupaings");
})

const xhr = new XMLHttpRequest();

xhr.open("GET", "http://www.omdbapi.com/?i=tt3896198&apikey=a018a06a");
xhr.responseType = "json" ; 
xhr.onload = function(){
console.log(xhr.response);
}

xhr.send();