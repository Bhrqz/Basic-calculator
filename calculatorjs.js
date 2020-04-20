
let str = "" ;
let a = "";
let b = "";
let flag = 0;

document.getElementById("result").innerHTML = "0";

function toEquation(num){

    if (isNaN(num)){
        //si es un operador
    num == "=" ? 2 : operator = num 
        console.log("operator es "+operator)
        switch(num){
        
            case "+" : 
            if(b!==""){
                sum(a,b);
                b = parseInt(a)+parseInt(b);
                a=0;

            }else{ 
                b=a;
                a=0}
                
            break;



            case "-" : 
            if(b!==""){
                subtract(a,b);
                b = parseInt(b)-parseInt(a);
                a=0;
            }else{ 
                b=a;
                a=0}
                
            break;



            case "*" : 
            if(b!==""){
                multiply(a,b);
                b = parseInt(a)*parseInt(b);
                a=0;
            }else{ 
                b=a;
                a=0
                } 
            break;



            case "/" : 
            if(b!==""){
                divide(a,b);
                b = parseInt(b)/parseInt(a);
                a=0;
            }else{ 
                b=a;
                a=0
                } 
            break;
            

            case "=" : 
            
            if(operator=="+"){
                if(b!==""){
                    sum(a,b);
                    b = parseInt(a)+parseInt(b);
                    a=0;
                    }}
            
            else if(operator=="-"){
                if(b!==""){
                    subtract(a,b);
                    b = parseInt(b)-parseInt(a);
                    a=0;
                    }}

            else if (operator=="*"){
                    if(b!==""){
                    multiply(a,b);
                    b = parseInt(a)*parseInt(b);
                    a=0;
                    }}
            
            else if (operator=="/"){            
                if(b!==""){
                    divide(a,b);
                    b = parseInt(b)/parseInt(a);
                    a=0;
                    }}
                break;
                }}
                
                    

    
    else if(!isNaN(num)){
        a=a+num;
        document.getElementById("result").innerHTML = a;
        console.log("a es "+a);
    }

}



function sum (a, b){
    document.getElementById("result").innerHTML = parseInt(a)+parseInt(b);
    
}

function subtract (a, b){
    document.getElementById("result").innerHTML = parseInt(b)-parseInt(a);
    
}

function multiply (a, b){
    document.getElementById("result").innerHTML = parseInt(a)*parseInt(b);
   
}

function divide (a, b){
    document.getElementById("result").innerHTML = parseInt(b)/parseInt(a);
   
}



function clearEquation(){
    
    document.getElementById("result").innerHTML ="0";
    a="";
    b="";
    return str = "";
}
//FAILED FUNCTION keep it just in case, for some reason str dont erase
function erase(str){
    let erased = str.slice(0,-1);
    document.getElementById("equation").innerHTML = erased;
   
    return erased
}



function operate(a, b){
    //HERE goes all the javascript thing s to execute math
    let total = str
    str= "";
    document.getElementById("equation").innerHTML =str;
    console.log(total);
    return document.getElementById("result").innerHTML = total
}
console.log(str);


/* UNDER CONSTRUCTION keyboard linking
document.addEventListener("keydown", keyPressed(), false);

function keyPressed(e) {
	if (e.keyCode === 97) {
		toEquation(1);
	}
}
*/