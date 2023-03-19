"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var x = (0, readline_sync_1.question)("Moi nhap: ");
if (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90) {
    console.log("Hoa");
}
else if (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122) {
    console.log("Thuong");
}
else if (x.charCodeAt(0) >= 48 && x.charCodeAt(0) <= 57) {
    console.log("So");
}
else
    console.log("DB");
