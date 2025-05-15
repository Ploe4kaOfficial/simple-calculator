'usestrict';
let lastSym=0;
function input(input){
    if((input=='+'||input=='-'||input=='*'||input=='/') && lastSym==1){
        document.getElementById('pTextIn').innerText = (document.getElementById('pTextIn').innerText).slice(0, -1)+input;
    }   else{
        document.getElementById('pTextIn').innerText = document.getElementById('pTextIn').innerText+input;
    }
    (input=='+'||input=='-'||input=='*'||input=='/') ? lastSym=1:lastSym=0;
    // alert(lastSym);
}
function inputClear(){
    document.getElementById('pTextIn').innerText = '';
}
function returnInput(){
    document.getElementById('pTextIn').innerText = eval(document.getElementById('pTextIn').innerText)
}
function deleteLast(){
    docLenght=document.getElementById('pTextIn').innerText.length;
    document.getElementById('pTextIn').innerText = (document.getElementById('pTextIn').innerText).slice(0, -1);
}