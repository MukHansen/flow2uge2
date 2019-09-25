
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
function myFilteredNames(namesArray){
return namesArray.includes('a');
}
var newNames = names.filter((name) => name.includes('a'));
console.log(newNames);

/*
Using the map method:
Use the names-array created above, and, using its map method, create a new array with all names reversed.
*/

function myMappedNames(namesArray){
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
function myFilter(arr, callback){
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)){
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

function myMap(arr, callback){
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

function numbersAdd(numbs){
    for (let i = 0; i < array.length; i++) {
        
    }

    }
 console.log(numbers.map((n => n + n)));