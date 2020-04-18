
let str = "" ;
document.getElementById("result").innerHTML = 0;

function toEquation(num){
    str = str + num; 
    console.log(str)
    document.getElementById("equation").innerHTML +=num;
}

function clearEquation(){
    document.getElementById("equation").innerHTML ="";
    return str = "";
}

function operate(){
    const total = str
    console.log(total);
    return document.getElementById("result").innerHTML = total
}
console.log(str);