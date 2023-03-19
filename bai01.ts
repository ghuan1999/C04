import {question} from 'readline-sync';

let dtb:number=Number(question("Nhap diem: "));
if(dtb>=5) console.log("Dau");
else if(dtb<5 && dtb>=0) console.log("Rot");
else if(dtb<0) console.log("Diem khong hop le");