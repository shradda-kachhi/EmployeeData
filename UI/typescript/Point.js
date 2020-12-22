"use strict";
exports.__esModule = true;
exports.varTypes = exports.testVariableDeclare = exports.MyClass = void 0;
var MyClass = /** @class */ (function () {
    //this can be doe directly through consytructor
    // private x: number;
    // private y : number;
    //we cannot have 2 or more constructor but can make params optional with ?
    function MyClass(x, y) {
        this.x = x;
        this.y = y;
        //this.x=x;
        //  this.y=y;
    }
    MyClass.prototype.draw = function () {
        console.log('inside draw X ' + this.x + ' Y ' + this.y);
    };
    //property  for  the higher versions
    MyClass.prototype.getX = function () {
        return this.x;
    };
    MyClass.prototype.setX = function (value) {
        this.x = value;
    };
    return MyClass;
}());
exports.MyClass = MyClass;
function testVariableDeclare() {
    var j = 10;
    var k = 45; //var is visible within the enclosing fuction no matter where it is declared but lot wit let
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('I is visible here also in var but not in let', i);
}
exports.testVariableDeclare = testVariableDeclare;
function varTypes() {
    var a;
    var b;
    var c;
    var d = [1, 2, 3];
    var k;
    var Color;
    (function (Color) {
        Color[Color["RED"] = 0] = "RED";
        Color[Color["BLUE"] = 1] = "BLUE";
    })(Color || (Color = {}));
    ;
    var red;
}
exports.varTypes = varTypes;
