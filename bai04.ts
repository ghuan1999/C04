import { question } from "readline-sync";

let nam:number=Number(question("Moi nhap nam: "));
if((nam%4==0 && nam%100!=0) || nam%400==0){
    console.log("Yes");
}
else console.log("No");