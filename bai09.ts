import { question } from "readline-sync";

let x:number=Number(question("Nhap so: "));
if(x>99) console.log("So khong hop le");
else{
    if(x>=0 && x<=10){
        switch(x){
                case 1:
                console.log("Mot");
                break;
                case 2:
                console.log("Hai");
                break;
                case 3:
                console.log("Ba");
                break;
                case 4:
                console.log("Bon");
                break;
                case 5:
                console.log("Nam");
                break;

                case 6:
                console.log("Sau");
                break;
                case 7:
                console.log("Bay");
                break;
                case 8:
                console.log("Tam");
                break;
                case 9:
                console.log("Chin");
                break;
                case 10:
                console.log("Muoi");
                break;
    }
    if(x>10 && x<20){
        let y:String="Muoi";
        switch(x%10){
            case 1:
                y+="mot";
                console.log(y);
        }

    }

}
}