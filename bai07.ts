import { question } from "readline-sync";

let a:number=Number(question("moi nhap a: "));
let b:number=Number(question("moi nhap b: "));
let c:number=Number(question("moi nhap c: "));
let delta:number=b*b -4*a*c;
if(a==0 && b==0 && c==0) console.log("VSN");
else if(a==0){
    let x:number=-c/b;
    console.log(x);
}
else{
    if(delta<0) console.log("VN");
    else{
        let x1:number=(-b+Math.sqrt(delta))/(2*a);
        let x2:number=(-b-Math.sqrt(delta))/(2*a);
        console.log(x1, x2);
    }
}