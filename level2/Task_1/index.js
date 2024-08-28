const input=document.getElementById("txtInput");

const result=document.getElementById("txtOutput");

function handleClickButton(el){

    if(el.innerHTML!="AC"||el.innerHTML!='='){

    const exp=input.value + el.innerHTML;
    input.value=exp;

    if(['+','-','*','/','%'].includes(el.innerHTML)) {
                 return;
    }
}
}

function reset(){
    input.value=""
    result.value="";
}

function equal(){
    result.value=eval(input.value);
    input.value="";
}
