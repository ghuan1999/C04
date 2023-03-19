"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var dtb = Number((0, readline_sync_1.question)("Nhap diem: "));
if (dtb >= 5)
    console.log("Dau");
else if (dtb < 5 && dtb >= 0)
    console.log("Rot");
else
    console.log("Diem khong hop le");
