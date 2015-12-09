function init() {
    
    index = jsTest()

    var html
    html = "<h3>" + index + "</h3>"

    var div = document.getElementById('results');

    div.innerHTML = div.innerHTML + html;

}

function jsTest() {

    alert("jsTest")

    var index = 0; //creats var index sets to 0
    var counter = 0; //creats var counter sets to 0
    var obj = {}; //creats empty object named obj

    obj.index = index; //creats obj propertie index sets to zero
    alert("obj.index: " + obj.index)

    var func = function () {
        alert("func")
        for (index = 0; index < 10; index++) {
            alert("inside.index:"+index)
            counter += 2;
            alert("inside.counter:"+counter)
        }
        obj.index++;
    };
    alert("after func:"+index)

    obj.func = func;
    alert("11: " + index)
    this.index++;
    alert("this.index:"+this.index)
    alert("22: " + index)

    alert("end: "+index)
    return index;

}
