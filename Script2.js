// JavaScript source code
function jsTest() {
    console.log('hello world');
    var index = 0;
    var counter = 0;
    var obj = {};

    obj.index = index;

    var func = function () {
        for (index = 0; index < 10; index++) {
            counter += 2;
        }
        obj.index++;
    };

    obj.func = func;
    this.index++;

    return index;

}
