displayContent = document.getElementById("calc_view");

display = [];

function inputNumber(a){
    display.push(a);
    displayContent.textContent = display.join("");
}

function clearDisplay(){
    display = [];
    displayContent.textContent = [0]
}

function operate (num1,num2,op){
    if (op === "+"){
        return addition(num1,num2);
    }
    if (op === "-"){
        return subtraction(num1,num2);
    }
    if (op === "*"){
        return multiplication(num1,num2);
    }
    if (op === "/"){
        return division(num1,num2);
    }
}

function addition(x,y){
    sum = +x + +y;
    return sum;
    display = [sum.toFixed(2)];
    displayContent.textContent = [sum.toFixed(2)]
}
function subtraction(x,y){
    sum = +x - +y;
    return sum;
    display = [sum.toFixed(2)];
    displayContent.textContent = [sum.toFixed(2)]
}
function multiplication(x,y){
    sum = +x * +y;
    return sum;
    display = [sum.toFixed(2)];
    displayContent.textContent = [sum.toFixed(2)]
}
function division(x,y){
    sum = +x / +y;
    return sum;
    display = [sum.toFixed(2)];
    displayContent.textContent = [sum.toFixed(2)]
}


function saveAndCreateNew(){
    //save the operator
    let op = 'x';

    let savedNum = ""

    if (savedNum === ""){
        savedNum = display.join("").toString();

        console.log("Saved number is: " + savedNum);

        clearDisplay();
        return savedNum;
    }
    else{
        displayContent.textContent = "Didnt work bozo"
    }
}

function testNumberSaving(){
    let currentNum = display.join("").toString();
    let testSavedNum = saveAndCreateNew();

    console.log("This is meant to be the saved number: " + testSavedNum);
    console.log("This is meant to be the second number: " + currentNum);
    console.log("This should add the two numbers together: " + operate(testSavedNum,currentNum,'+'))
}