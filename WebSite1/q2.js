function init() {

    alert("q2.js")

    var results = findValue()

    var div = document.getElementById('q2');

    div.innerHTML = div.innerHTML + results;

}

function findValue() {

    var sortedList = [5,15,34,39,66,103,357,444,685,839,1092,1341]
    var index = sortedList.indexOf(344) 

    return index

}