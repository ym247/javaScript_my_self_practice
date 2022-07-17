// display value....//
function disp(val){
    document.getElementById("screen").value+=val;
}

function solve(){
    let x = document.getElementById("screen").value;
    let y = eval(x) 
    document.getElementById("screen").value = y;

}
function clr(){
    document.getElementById("screen").value = "";
}
function equal(){
    var equalexp = document.getElementById("screen").value;
    if(equalexp){
        document.getElementById("screen").value = eval(equalexp);
    }
eval((equalexp));

}
