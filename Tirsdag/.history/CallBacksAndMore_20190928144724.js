
/*
1) Using existing functions that takes a callback as an argument
Using the filter method:
Declare a JavaScript array and initialize it with some names 
(Lars, Jan, Peter, Bo, Frederik etc.). 
Use the filter method to create a new array with only names that contains the letter ‘a’.
*/
console.log("1)");
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Connie", "Jonna", "Ulla", "Arne"];
console.log(names);

function myFilteredNames(namesArray) {
    // return filteredArr = namesArray.includes('a');
    var filteredArr = names.filter((name) => name.includes('a'))
    return filteredArr;
}
function myFilteredNames2(names) {
    var newArray = [];
    names.forEach(element => {
        if (myFilteredNames(element)) {
            newArray.push(element);
        }
    });
    names.forEach(element => {

    });
    return newArray;
}

var newNames = names.filter((name) => name.includes('a'));
console.log(newNames);
console.log("TEST" + myFilteredNames(names));

/*
Using the map method:
Use the names-array created above, and, using its map method, create a new array with all names reversed.
*/

function myMappedNames(namesArray) {
    return names.map(name => name.split("").reverse().join(""))
}

var revNames = names.reverse();
console.log(revNames);
console.log(names.map(name => name.split("").reverse().join("")));
/*
2)Implement user defined functions that take callbacks as an argument
a) Implement a function: myFilter(array, callback)that takes an array as the first argument,
 and a callback as the second and returns a new (filtered) array according to the code provided in the callback 
 (this method should provide the same behaviour as the original filter method).
*/
console.log("2)");
function myFilter(arr, callback) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) { // calling a function returning a bolean
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(myFilter(names, myFilteredNames));
/*
b) Implement a function: myMap(array, callback)that, provided an array and a callback, 
provides the same functionality as calling the existing map method on an array.
*/

function myMap(arr, callback) {
    var newArr = [];
    newArr.push(myMappedNames(newArr));
    return newArr;
}
console.log("---------------" + myMap(names, myMappedNames));
console.log("TEST " + myMappedNames(names));

/*
4) Getting really comfortable with filter and map

a) Given this array: var numbers = [1, 3, 5, 10, 11];
Use map + a sufficient callback to map numbers into this array:
var result = [4,8,15,21,11];
*/

var numbers = [1, 3, 5, 10, 11];

function add(n1, n2) {
    return n1 + n2;
}

function numbersAdd(numbs, callback) {
    var newNumbs = [];
    for (let i = 0; i < numbs.length; i++) {
        if (i != numbs.length - 1) {
            newNumbs.push(callback(numbs[i], numbs[i + 1]));
        } else {
            newNumbs.push(numbs[i]);
        }

    }
    return newNumbs;
}
// console.log(numbers.map((n => n + n)));
console.log("4,a) " + numbersAdd(numbers, add));

/*
b) Use map() to create the <a>’s for a navigation set and eventually
 a string like below (use join() to get the string of <a>’s):
 */

/*function newMapfunc(){
   var deezNames = ["Lars", "Peter", "Jan", "Bo"];
   var myNewMap = [];
   for (let i = 0; i < deezNames.length; i++) {
       myNewMap.push('<a href="">' + deezNames[i] + "</a>" );
   };
   myNewMap.unshift("<nav>");
   myNewMap.push("</nav>");
   return myNewMap;
}*/

var deezNames = ["Lars", "Peter", "Jan", "Bo"];
function makeNavfunc(arr) {
    var htmls = [];
    htmls.push("<nav>");
    var htmlA = arr.map(name => '<a href=””>' + name + '<\/a>\n');
    htmls.push(htmlA.join(""));
    htmls.push("</nav>");
    return htmls.join("");;
}

//console.log("4,b)");
//console.log(newMapfunc());
//console.log(newMapfunc().join(""));
console.log("4,b)" + makeNavfunc(deezNames));

/*
c) Use map()+(join + ..) to create a string,
representing a two column table, for the data given below:
var names = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"},
    {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];
*/
var deezGivenNames = [{ name: "Lars", phone: "1234567" },
{ name: "Peter", phone: "675843" },
{ name: "Jan", phone: "98547" },
{ name: "Bo", phone: "79345" }];

/* function newTablefunc(array) {
    var myNewMap = ["<tr>", "<th>name</th>", "<th>phone</th>", "<tr>"];
    for (let i = 0; i < array.length; i++) {
        myNewMap.push("<tr><td>" + array[i].name + "</td></td>" + array[i].phone + "</td></tr>");
    }
    myNewMap.unshift("<table>");
    myNewMap.push("</table");
    return myNewMap;
} 

console.log("4,c)" + newTablefunc(deezGivenNames).join(""));*/

function makeTablefunc(arr) {
    var tableString = [];
    tableString.push("<table><tbody><tr><th>name</th><th>phone</th></tr>")
    console.log(arr);
    arr.map(object => tableString.push("<tr><td>" + object.name + "</td><td>" + object.phone + "</td></tr>"));
    tableString.push("</tbody></table>");
    return tableString.join("");
}
console.log("4,c) " + makeTablefunc(deezGivenNames));
// document.getElementById("tableDiv").innerHTML = newTablefunc().join("");
var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }]

const avgerageAge = members.reduce((acc, p, idx, arr) => {
    if (idx === arr.length - 1) {
        return (acc + p.age) / arr.length;
    }
    return acc + p.age;
}, 0);
console.log("REDUCE " + avgerageAge);

document.getElementById("navDiv").innerHTML = makeNavfunc(deezNames);
document.getElementById("tableDiv").innerHTML = makeTablefunc(deezGivenNames);
console.log(names);
document.querySelector("#h1").innerHTML = "Opgave 4,c";

function click() {
    //   document.querySelector("#tableDiv").innerHTML = newNames;
    //  document.getElementById("tableDiv").innerHTML = newTablefunc().join("");
    document.querySelector("#h1").innerHTML = "Opgave 4,c Yo";
    document.querySelector("#tableDiv").innerHTML = makeTablefunc(myFilteredNames2);

}
;
document.querySelector("#btn").addEventListener("click", click);