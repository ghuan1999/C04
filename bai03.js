"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var a = Number((0, readline_sync_1.question)("Nhap canh a: "));
var b = Number((0, readline_sync_1.question)("Nhap canh b: "));
var c = Number((0, readline_sync_1.question)("Nhap canh c: "));
if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Tam giac khong hop le");
}
else {
    if (a == b || b == c || a == c)
        console.log("Yes");
    else
        console.log("No");
}
