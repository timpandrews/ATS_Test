
function jsonTable() {
    
    var data = {
        headers: ["First Name", "Last Name", "Age"],
        rows: [
            ["John", "Doe", 30],
            ["Jane", "Doe", 27],
            ["Mac", "Smith", 52]
        ]
    };
    var container = document.getElementById("tableContainer");
    //add code here to build a table in the container

    var html = "<table id='dataTable'>"

    html += "<tr>"
    for (var i = 0; i < data.headers.length; i++) {
        html += "<th>" + data.headers[i] + "</th>"
    }
    html += "</tr>"

    for (var i = 0; i < data.rows.length; i++) {
        alert(i)
    }

    html += "</table>"

    alert(html)

    container.innerHTML = html

}


