"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var x = Number((0, readline_sync_1.question)("Nhap so: "));
var y = Math.floor(x / 100);
if (x < 100)
    console.log("So khong hop le");
else {
    if (y == 9) {
        console.log("Yes");
    }
    else if (y != 9) {
        console.log("No");
    }
}
