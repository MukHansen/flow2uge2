import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");


let QUOTEDIV = document.getElementById("divBtnID");

function getJokeById(){
   var JOKECHOICE = document.querySelector("#textID").value;
   let joke = jokes.getJokeById(JOKECHOICE);
   console.log("joke " +joke);
   console.log("JOKECHOICE",JOKECHOICE);
   document.getElementById("jokes").innerHTML = joke;
}



// Dette betyder så vidt jeg kan forstå at alle kan tilgå dette endpoint
// Access-Control-Allow-Origin: *
function getTodaysJoke() {
    var QUOTEDIV = document.getElementById("divID");
    let url = "https://studypoints.info/jokes/api/jokes/period/hour";
    fetch(url)
        .then(res => res.json()) //in flow1, just do it
        .then(data => {
        
            console.log("data - ", data);
            //  QUOTEDIV.innerHTML = data;
            QUOTEDIV.innerText = data.joke;
        })
        //          .catch(err.status){
        //            err.fullError.then(e=> console.log(e.detail))
        //      }else{console.log("Network error");}
        ;
}
document.querySelector("#myButton").addEventListener("click", getJokeById);
document.querySelector("#myRandomButton").addEventListener("click", getTodaysJoke);

document.querySelector("#north").addEventListener("click", clicked);
document.querySelector("#south").addEventListener("click", clicked);
document.querySelector("#east").addEventListener("click", clicked);
document.querySelector("#west").addEventListener("click", clicked);

function clicked(e){
    alert(e.target.parentElement.id + "!!!!");
    console.log(e.target.parentElement.id)
}

function addJokes() {
    var jokeText = document.getElementById("jokeText").value;
    jokes.addJoke(jokeText);
    document.getElementById("addedJokeGoesHere").innerHTML = jokeText;
  }
  const addJokeButton = document.getElementById("addJokeButton");
  addJokeButton.onclick = function() {
    addJokes();
  };