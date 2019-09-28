import 'bootstrap/dist/css/bootstrap.css'

//http://localhost:3333/api/users ------------- All users
//http://localhost:3333/api/users/110 --------- Single user
//http://localhost:3333/api/users/ ------------ Add user
//http://localhost:3333/api/users/{ID} -------- Delete user

document.querySelector("#allbtn").addEventListener("click", getAll);
document.querySelector("#singlebtn").addEventListener("click", getSingle);
document.querySelector("#addbtn").addEventListener("click", addUser);
document.querySelector("#deletebtn").addEventListener("click", deleteUser);

function getAll(e) {
    fetch("http://localhost:3333/api/users")
        .then(res => res.json())
        .then(data => {
            var myTable = [];
            myTable.push('<table border="1"><tbody><tr><th>Id</th><th>Age</th><th>Name</th><th>Gender</th><th>Email</th></tr>');
            data.map(object => myTable.push("<tr><td>" 
            + object.id + "</td><td>"
            + object.age + "</td><td>" 
            + object.name + "</td><td>" 
            + object.gender + "</td><td>" 
            + object.email + "</td><td>"));
            
            myTable.push("</tbody></table>");

            document.querySelector("#tableDiv").innerHTML = myTable.join("");
        });
}

function getSingle(e) {
    var userChoice = document.querySelector("#singleUser").value;
    var singleUser = [];
    fetch("http://localhost:3333/api/users/" + userChoice)
        .then(res => res.json())
        .then(data => {

            singleUser.push("Name: " + data.name);
            singleUser.push("Age: " + data.age);
            singleUser.push("Id: " + data.id);
            singleUser.push("Gender: " + data.gender);
            singleUser.push("Email: " + data.email);

            document.querySelector("#single").innerHTML = singleUser.join(" --- ");
        });
}

function addUser(){
    let options = {
        method: "POST",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          age: document.querySelector("#userAge").value,
          name: document.querySelector("#userName").value,
          gender: document.querySelector("#genderDropdown").value,
          email: document.querySelector("#userEmail").value
        })
     };
     fetch("http://localhost:3333/api/users/",options);
}
function deleteUser(){
    let userToRemove = document.querySelector("#deleteID").value;
    let options = {
        method: "DELETE",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
     };
     fetch("http://localhost:3333/api/users/" + userToRemove,options);
     alert("User with id " + userToRemove + " Removed");
}