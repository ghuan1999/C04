import { question } from "readline-sync";

let kW:number=Number(question("Moi nhap so dien: "));
let x:number=0;
if(kW<100){
    x=2000;
}
else if(kW>=100 && kW<200){
    x=2500;
}
else if(kW>=200){
    x=3500;
}
let tienDien:number=kW*x;
console.log(tienDien);