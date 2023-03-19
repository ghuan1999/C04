import {question} from "readline-sync";

let x:number=Number(question("Nhap so: "));
let y:number=Math.floor(x/100);
if(x<100) console.log("So khong hop le");
else{
    if(y==9){
        console.log("Yes");
    }
    else if(y!=9){
        console.log("No");
    }
}
