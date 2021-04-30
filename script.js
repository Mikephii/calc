
let resultValue = '';
let numberValue = ''
let n1 = ''
let n2 = ''
let op = ''

let display = document.querySelector('#display');
display.textContent = ''



let buttonsn = document.querySelectorAll('.number');
buttonsn.forEach(button => {button.addEventListener('click',updateNumber)
    
});

let buttonso = document.querySelectorAll('.operator');
buttonso.forEach(button => {button.addEventListener('click',operator)
    
});

let equals= document.querySelector('#equals');
equals.addEventListener('click',equalsResult)


let clear= document.querySelector('#clear');
clear.addEventListener('click',cleardata)

let deletor= document.querySelector('#delete');
deletor.addEventListener('click',deletorfunc)

function deletorfunc(){
    let displayString = display.textContent
    if(numberValue){
        display.textContent=displayString.slice(0,-1);
    }
    numberValue = numberValue.slice(0,-1);
}

function cleardata(){
    display.textContent=''
    n1=''
    n2=''
    op=''
    numberValue=''
}


function equalsResult(){

    if(n1 && numberValue && op){
        n2= numberValue
        display.textContent=operate(n1,n2,op);
        n1=operate(n1,n2,op);
        n2 = ''
        op = ''
        numberValue =''
    }

}

function updateNumber(e){
    if(!(!op&&n1)){
        numberValue+=e.srcElement.id
        display.textContent = display.textContent + e.srcElement.id
    }
}

function operator(e){
    if(!n1 && numberValue){
        n1=numberValue
        op=e.srcElement.id
        display.textContent = display.textContent + e.srcElement.id
        numberValue=''
    }
    if(n1 && op &&numberValue){
        n2 = numberValue
        
        display.textContent=operate(n1,n2,op)+e.srcElement.id;

        n1=operate(n1,n2,op);
        
        op=e.srcElement.id
        n2=''
        numberValue=''
    }

    if(n1 && !numberValue &&!op){
        op=e.srcElement.id;
        display.textContent = display.textContent + e.srcElement.id

    }

}


function operate(n1,n2,argument){

    switch(argument){
        case '+':
        return add(n1,n2);
        break;
        case '-':
        return subtract(n1,n2);
        break;
        case '*':
        return multiply(n1,n2)
        break;
        case '/':
        return divide(n1,n2)
        break;
    }

}




function add (a,b) {
	return Math.round((parseFloat(a,10) + parseFloat(b,10))*100)/100;
}

function subtract (a,b) {
	return Math.round((parseFloat(a,10) - parseFloat(b,10))*100)/100;
}


function multiply (a,b) {
	
	return Math.round((a*b)*100)/100;
}
function divide (a,b) {
	
	return Math.round((a/b)*100)/100;
}