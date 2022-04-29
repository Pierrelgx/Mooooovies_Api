const liste = document.querySelector('.liste');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    console.log("Hello les coupaings");
})

const xhr = new XMLHttpRequest();

xhr.open("GET", "http://www.omdbapi.com/?i=tt3896198&apikey=a018a06a");
xhr.responseType = "json" ; 
console.log(xhr.response);

xhr.onload = function(){
    console.log(xhr.response);
    for (i = 0; i < xhr.lengts; i ++) {
        
        let newLi = document.createElement('li');
        let newTitreCarte = document.createElement('h2');
        let newBodyCarte = document.createElement('p');

        newTitreCarte.innerText = xhr.response[i].title;
        newBodyCarte.innerText = xhr.response[i].body;
        
    }

}

xhr.send();