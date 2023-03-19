import { question } from "readline-sync";   

let x:String=question("Moi nhap: ");

if(x.charCodeAt(0)>=65 && x.charCodeAt(0)<=90){
    console.log("Hoa");
}
else if(x.charCodeAt(0)>=97 && x.charCodeAt(0)<=122){
    console.log("Thuong");
}
else if(x.charCodeAt(0)>=48 && x.charCodeAt(0)<=57){
    console.log("So");
}
else console.log("DB");