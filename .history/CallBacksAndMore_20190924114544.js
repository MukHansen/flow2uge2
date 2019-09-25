function myFilter(age){
    return age >= 18;
}



console.log("1)");
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Connie", "Jonna", "Ulla", "Arne"];
console.log(names);
var newNames = names.filter((name) => name.includes('a'));
console.log(newNames);
var revNames = names.reverse();
function myReverseFunction(rev) {
    
    rev.reverse();
  }
console.log(revNames);