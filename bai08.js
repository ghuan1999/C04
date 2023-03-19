"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var ngay = Number((0, readline_sync_1.question)("Moi nhap ngay: "));
var thang = Number((0, readline_sync_1.question)("Moi nhap thang: "));
var nam = Number((0, readline_sync_1.question)("Moi nhap nam: "));
var conf = 0;
if ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0) {
    conf = 1;
}
if (thang == 2 && conf == 1) {
    if (ngay < 1 || ngay > 29)
        console.log("Unvalid");
    else
        console.log("Valid");
}
else if (thang == 2 && conf == 0) {
    if (ngay < 1 || ngay > 28)
        console.log("Unvalid");
    else
        console.log("Valid");
}
else if (ngay < 1 || ngay > 31 || thang < 1 || thang > 12)
    console.log("Unvalid");
else {
    console.log("Valid");
}
