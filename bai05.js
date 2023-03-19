"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var kW = Number((0, readline_sync_1.question)("Moi nhap so dien: "));
var x = 0;
if (kW < 100) {
    x = 2000;
}
else if (kW >= 100 && kW < 200) {
    x = 2500;
}
else if (kW >= 200) {
    x = 3500;
}
var tienDien = kW * x;
console.log(tienDien);
