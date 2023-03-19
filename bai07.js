"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var a = Number((0, readline_sync_1.question)("moi nhap a: "));
var b = Number((0, readline_sync_1.question)("moi nhap b: "));
var c = Number((0, readline_sync_1.question)("moi nhap c: "));
var delta = b * b - 4 * a * c;
if (a == 0 && b == 0 && c == 0)
    console.log("VSN");
else if (a == 0) {
    var x = -c / b;
    console.log(x);
}
else {
    if (delta < 0)
        console.log("VN");
    else {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(x1, x2);
    }
}
