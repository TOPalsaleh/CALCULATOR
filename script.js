let temp = "";
const body = document.querySelector("body");

const solution = document.createElement("div");
solution.classList.add("sol")
solution.textContent = "";
body.appendChild(solution);


window.addEventListener('keydown', handleKeyboardInput)

function add0(){
    if(solution.textContent === ""){
        solution.textContent = "0";
    }
    for(let i = 0; i<solution.textContent.length;i++){
        if (solution.textContent.charAt(i)!=0){
            solution.textContent = solution.textContent + "0";
            break;
        }
    }
}
function add1(){
    if(solution.textContent === "0"){
        solution.textContent = "1";
    }
    else
    solution.textContent = solution.textContent + "1";
}
function add2(){
    if(solution.textContent === "0"){
        solution.textContent = "2";
    }
    else
    solution.textContent = solution.textContent + "2";
}
function add3(){
    if(solution.textContent === "0"){
        solution.textContent = "3";
        
    }
    else
    solution.textContent = solution.textContent + "3";
}
function add4(){
    if(solution.textContent === "0"){
        solution.textContent = "4";
    }
    else
    solution.textContent = solution.textContent + "4";
}
function add5(){
    if(solution.textContent === "0"){
        solution.textContent = "5";
    }
    else
    solution.textContent = solution.textContent + "5";
}
function add6(){
    if(solution.textContent === "0"){
        solution.textContent = "6";
    }
    else
    solution.textContent = solution.textContent + "6";
}
function add7(){
    if(solution.textContent === "0"){
        solution.textContent = "7";
    }
    solution.textContent = solution.textContent + "7";
}
function add8(){
    if(solution.textContent === "0"){
        solution.textContent = "8";
    }
    else
    solution.textContent = solution.textContent + "8";
}
function add9(){
    if(solution.textContent === "0"){
        solution.textContent = "9";
    }
    else
    solution.textContent = solution.textContent + "9";
}
function dot(){
    let num = 0;
    let after = 0;
    let found = false;
    for(let i = 0; i < solution.textContent.length;i++){
        temp = solution.textContent.charAt(i)
        if (temp === "."){
            num++;
        }
        else if (temp === "+"||temp=== "*"||temp === "/"||temp === "-"){
            found = true;
        }
    }
    if (num === 0){
        if (solution.textContent === ""){
            solution.textContent = "0."
        }
        else
        solution.textContent+="."
    }
    else if(num === 1){
        if (found){
            solution.textContent+="."
        }
    }
}
function asy(){
    for(let i = 0; i < solution.textContent.length;i++){
        temp = solution.textContent.charAt(i)
        if (temp === "-" &&  i==0){
           
        }
        if (temp === "+"||temp=== "*"||temp === "/"||temp === "-"){
            equals();
            break;
        }
    }
    if (solution.textContent === "" && solution.textContent.charAt(1) != ""){

    }
    else
    solution.textContent = solution.textContent + "+";
}
function ssy(){
    for(let i = 0; i < solution.textContent.length;i++){
        temp = solution.textContent.charAt(i)
        if (temp === "-" &&  i==0){
            
        }
        else if (temp === "+"||temp=== "*"||temp === "/" || temp === "-"){
            
            break;
        }
    }
    if (solution.textContent === "" && solution.textContent.charAt(1) != ""){

    }
    else
    solution.textContent = solution.textContent + "-";
    
}
function msy(){
    for(let i = 0; i < solution.textContent.length;i++){
        temp = solution.textContent.charAt(i)
        if (temp === "-" && i==0){
            
        }
        if (temp === "+"||temp=== "*"||temp === "/" || temp === "-"){
            equals();
            break;
        }
    }
    if (solution.textContent === "" && solution.textContent.charAt(1) != ""){

    }
    else
    solution.textContent = solution.textContent + "*";
}
function dsy(){
    for(let i = 0; i < solution.textContent.length;i++){

        temp = solution.textContent.charAt(i)
        if (temp === "-" && i==0){
            
        }
        else if (temp === "+"||temp=== "*"||temp === "/" || temp === "-" ){
            equals();
            break;
        }
    }
    if (solution.textContent === "" && solution.textContent.charAt(1) != ""){

    }
    else
    solution.textContent = solution.textContent + "/";
}
function CCC(){
    solution.textContent = "";
}

function del(){
    solution.textContent = solution.textContent.slice(0,-1);
}
function equals(){
    let a = "";
    let b = "";
    let operator = "";
    let notfound = true;
    for(let i = 0; i < solution.textContent.length;i++){
        temp = solution.textContent.charAt(i)
        
        if (temp === "+" || temp === "*"||temp === "/" || temp === "-" && i!=0){
            operator+=temp;
            notfound = false
        }
        else if(notfound){
            a+=temp;
        }
        else{
            b+=temp;
        }
    }
    console.log(operate(operator,a,b))

}
function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    if (operator === "+"){
        add(a,b)
    }
    else if(operator === "-"){
        sub(a,b)
    }
    else if(operator === "*"){
       mult(a,b)
    }
    else if(operator === "/"){
        if (b === 0){
            alert("ERROR: you cant divide by 0");
            solution.textContent = "";
            return null;
        }
        else return divide(a, b)
    }
    else{
        return null;
    }
}

function add(a , b){
    solution.textContent = (a+b);
}
function sub(a , b){
    solution.textContent = (a-b);
}
function mult(a,b){
    solution.textContent = (a*b);
}
function divide(a , b){
    solution.textContent =(a/b);
}

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9){
        solution.textContent+=e.key;
    }
    if (e.key === '.') {
        dot();
    }
    if (e.key === '=' || e.key === 'Enter') {
        equals();
    }
    if (e.key === 'Backspace') {
        del();
    }
    if (e.key === 'Escape') {
        CCC()
    }
    if (e.key === '+'){
        asy();
    }
    if (e.key === '-'){
        ssy();
    }
    if (e.key === '*'){
        msy();
    }
    if (e.key === '/'){
        dsy();
    }
  }

//round answers not that important 
//10. add keyboard support