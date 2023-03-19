import { question } from "readline-sync";

let ngay:number=Number(question("Moi nhap ngay: "));
let thang:number=Number(question("Moi nhap thang: "));
let nam:number=Number(question("Moi nhap nam: "));
let conf:number=0;
if((nam%4==0 && nam%100!=0) || nam%400==0){
    conf=1;
}
if(thang==2 && conf==1){
    if(ngay<1 || ngay>29) console.log("Unvalid");
    else console.log("Valid");
} 
else if(thang==2 && conf==0){
    if(ngay<1 || ngay>28) console.log("Unvalid");
    else console.log("Valid");
}
else if(ngay<1 || ngay>31 || thang<1 || thang>12) console.log("Unvalid");
else{
    console.log("Valid");
}