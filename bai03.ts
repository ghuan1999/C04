import { question } from "readline-sync";

let a:number=Number(question("Nhap canh a: "));
let b:number=Number(question("Nhap canh b: "));
let c:number=Number(question("Nhap canh c: "));
if(a<=0 || b<=0 || c<=0){
    console.log("Tam giac khong hop le");
}
else{
    if(a==b || b==c || a==c) console.log("Yes");
    else console.log("No");
}
