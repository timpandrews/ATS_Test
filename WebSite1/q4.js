
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

    var html = "<table><thead>"

    //Build header html
    html += "<tr>"
    for (var i = 0; i < data.headers.length; i++) {
        html += "<th>" + data.headers[i] + "</th>"
    }
    html += "</tr></thead>"

    //Build row html
    html += "<tbody>"
    for (var i = 0; i < data.rows.length; i++) {
        html += "<tr>"
        for (var j = 0; j < data.rows[i].length; j++) {
            html += "<td>" + data.rows[i][j] + "</td>"
        }
        html +="</tr>"
    }

    html += "</tbody></table>"

    container.innerHTML = html

}


