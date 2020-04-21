
let str = "" ;
let a = "";
let b = "";
let flag = 0;
let currentOperator = "";
let pendingOperator = "";

document.getElementById("result").innerHTML = "0";

function toEquation(num){

    if (isNaN(num)){
        
        pendingOperator = currentOperator;
        currentOperator = num;

        if (!b){
            b=a;
            a="";
        }

        console.log("la operacion sera "+currentOperator)
       switch (pendingOperator){
           case "+":
               sum(a,b);
               b=parseInt(a)+parseInt(b);
               a="";
           break;

            case "-":
                subtract(a,b);
                b=parseInt(b)-parseInt(a);
                a="";
            break

            case "*":
                multiply(a,b);
                b=parseInt(a)*parseInt(b);
                a="";
            break
            
            case "/":
            divide(a,b);
            b=parseInt(b)/parseInt(a);
            a="";
            break
        
            case "=":
                switch (pendingOperator){
                    case "+":
                        sum(a,b);
                        b=parseInt(a)+parseInt(b);
                        a="";
                    break;
         
                     case "-":
                         subtract(a,b);
                         b=parseInt(b)-parseInt(a);
                         a="";
                     break
         
                     case "*":
                         multiply(a,b);
                         b=parseInt(a)*parseInt(b);
                         a="";
                     break
                     
                     case "/":
                     divide(a,b);
                     b=parseInt(b)/parseInt(a);
                     a="";
                     break
                }
        } 
    }                 

    
    else if(!isNaN(num)||num=="."){
        a=a+num;
        document.getElementById("result").innerHTML = a;
        console.log("a es "+a);
    }

}

//failed FUNCTION keep it just in case
function beforeExecute(a,b,operator){
    if(operator=="+"){
            sum(a,b);
            b = parseInt(a)+parseInt(b);
            a=0;
            }

    else if(operator=="-"){
            subtract(a,b);
            b = parseInt(b)-parseInt(a);
            a=0;
            }

    else if (operator=="*"){
            multiply(a,b);
            b = parseInt(a)*parseInt(b);
            a=0;
            }

    else if (operator=="/"){            
            divide(a,b);
            b = parseInt(b)/parseInt(a);
            a=0;
            }}

//the functions of the actual operators
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
    pendingOperator = "";
    currentOperator = "";
  
}
/* UNDER CONSTRUCTION keyboard linking
document.addEventListener("keydown", keyPressed(), false);

function keyPressed(e) {
	if (e.keyCode === 97) {
		toEquation(1);
	}
}
*/