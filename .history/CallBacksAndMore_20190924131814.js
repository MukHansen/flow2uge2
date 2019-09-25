function myFilter(age) {
    return age >= 18;
}



console.log("1)");
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Connie", "Jonna", "Ulla", "Arne"];
console.log(names);
function myFilteredNames(namesArray){
return namesArray.includes('a');
}
var newNames = names.filter((name) => name.includes('a'));
console.log(newNames);

function myMappedNames(namesArray){
    return names.map(name => name.split("").reverse().join(""))
}

var revNames = names.reverse();
console.log(revNames);
console.log(names.map(name => name.split("").reverse().join("")));
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

function myMap(arr, callback){
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(myMappedNames(newArr));
    }
    return newArr;
}
console.log("---------------" + myMap(names, myMappedNames));
console.log("TEST " + myMappedNames(names));