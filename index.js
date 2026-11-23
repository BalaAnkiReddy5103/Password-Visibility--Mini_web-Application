let typechange=document.getElementById("type-change");
let btnchange=document.getElementById("Btn");

function onBtn(){
    if(typechange.type=="password"){
        typechange.type="text";
        btnchange.textContent="Hide Password"
    }else{
        typechange.type="password";
        btnchange.textContent="Show Password"
    }
}