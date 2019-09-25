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
var revNames = names.reverse();
console.log(revNames);
console.log(names.map(name => name.split("").reverse().join("")));
console.log("2)");
function myFilterFunction(arr, callback){
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(myFilterFunction(names, myFilteredNames));
