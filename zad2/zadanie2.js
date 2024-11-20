function kalkulator(){
    let pierwszaLiczba = 0;
    let drugaLiczba = 0;
    let podana = "";

    function add(a,b){
        return a+b;
    }
    function substruct(a,b){
        return a-b
    }
    function multipy(a,b){
        return a*b
    }
    function divide(a,b){
        if(b===0){
            return "nie dziel przez zero cholero"
        }else{
            return a / b
        }
    }

    
    //pierwszaLiczba = prompt("Podaj 1 liczbe: ");
    pierwszaLiczba = 100;
    //drugaLiczba = prompt("Podaj 2 liczbe: ");
    drugaLiczba = 2;
    //podana = prompt("Wybierz (+, -, *, %): ");
    podana = "%";
    switch (podana)
    {
        case "+":
            console.log("Wynik dodania: "+add(pierwszaLiczba, drugaLiczba));
            break;
        case "-":
            console.log("Wynik odejmowania: "+substruct(pierwszaLiczba, drugaLiczba));
            break;
        case "*":
            console.log("Wynik mnożenia: "+multipy(pierwszaLiczba, drugaLiczba));
            break;
        case "%":
            console.log("Wynik dzielenia: "+divide(pierwszaLiczba, drugaLiczba));
            break;
        default:
            console.log("nasz kalkulator nie obsługuje takie działania!!");

    }
}
kalkulator()