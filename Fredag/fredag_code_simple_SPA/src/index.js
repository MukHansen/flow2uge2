document.querySelector("#svg2").addEventListener("click", getFunc);

var previous;

function getFunc(e) {
    console.log("clicked target id = " + e.target.id);

    document.querySelector("#pID").innerHTML = e.target.id;
    fetch("http://restcountries.eu/rest/v1/alpha?codes=" + e.target.id)
        .then(res => res.json())
        .then(data => {
            let myList = [];
            myList.push("Country " + data[0].name + "<br/>")
            myList.push("Population " + data[0].population + "<br/>")
            myList.push("Area " + data[0].callingCodes + "<br/>")
            myList.push("Borders " + data[0].borders + "<br/>")

            document.querySelector("#pID").innerHTML = myList.join("");

            if (!previous) {
                e.target.style.fill = "red";
                previous = e.target;
            } else {
                previous.style.fill = "#c0c0c0";
                e.target.style.fill = "red";
                previous = e.target;
            };
        });
}