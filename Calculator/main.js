let spans = document.querySelector("span");
let allBTN = document.querySelectorAll('button')
let buttons = document.querySelectorAll(".nums button")
let signs = document.querySelectorAll(".signV button")
let remove = document.querySelectorAll(".remove button")
let answer = document.querySelector('.equal-to');
let VA = document.querySelector('#answer')
let squareR = document.querySelector('#sqr')
let advance = document.querySelector('.advancedI button')
let reverseA = document.querySelector('#ad2 button');
let calcB = document.querySelector('.numsV');
let brackets = document.querySelectorAll('.brac')
let percent = document.querySelector('#percentage')
let square = document.querySelector('#square')
let sine = document.querySelector('#sine');
let cosine = document.querySelector('#cos')
let tangent = document.querySelector('#tan');
let logarithm = document.querySelector('#log')
let hisB = document.querySelector('.his')
let history = document.querySelector('.history')
let clear = document.querySelector('.history button')
let signN ="";
let sRT;
let c = "";
let mainAns = "";
let arr = "";
let pre = "";
let kk = "";
let sqAns = "";
let bracS = "";
let mad = 0;
let signL;
let sqrV = "";
let lastB;
let lastBV;
//sine variables
let sinA = "";
let kkS = "";
let kkS2 = "";
let sinAns = "";
let mad2S = 0;
let ST;
//cosine variables
let cosA = "";
let kkC = "";
let kkC2 = "";
let cosAns = "";
let mad2C = 0;
let CT;
//tangent variables
let tanA = "";
let kkT = "";
let kkT2 = "";
let tanAns = "";
let mad2T = 0;
let TT;
//logarithm variables
let logA = "";
let kkL = "";
let logAns = "";
let mad2L = 0;
let LT;
//bracket variables
let bracA = "";
let kkB = "";
let bracAns = "";
let mad2B = 0;
let BT;


let h4V = [{
    h: JSON.parse(localStorage.getItem('h4')),
    h3: JSON.parse(localStorage.getItem('h3'))
}
] 


window.addEventListener('DOMContentLoaded',function(){
let kpor = document.querySelector('.opor');
let display = h4V.map(function(item){
    for(i=0;i<item.h.length;i++){
        for(i=0;i<item.h3.length;i++){
            kpor.innerHTML += '<div class = "mad"><h4>'+item.h[i]+'</h4><h3>'+item.h3[i]+'</h3></div>'
        }
    }
    
});
})


// eventlisteners
for(i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", numbers)
}

document.addEventListener('keydown', boss)


clear.addEventListener('click',clearH)

hisB.addEventListener('click', historyB)

logarithm.addEventListener('click',log)

sine.addEventListener('click', sin)

cosine.addEventListener('click', cos)

tangent.addEventListener('click',tan)

brackets[0].addEventListener("click", brac1)

answer.addEventListener('click', showans);

remove[0].addEventListener("click", deleteN)

remove[1].addEventListener("click", cancel)

squareR.addEventListener("click", squareRoot)

calcB.addEventListener("click", removeSLide)

advance.addEventListener('click', slide)

reverseA.addEventListener("click", slideR)

//advance slide 
function slide(){
    hisB.addEventListener('click', historyC)
    document.querySelector('.advanced').style.width = "300px";
    document.querySelector('.advanced').style.transition = "1s";
    document.querySelector('.calF').style.opacity = "0.9";
    setTimeout(() => {
        document.querySelector('.firstA').style.display = "inline-block";
        document.querySelector('.firstA').style.display = "flex";
        document.querySelector('.firstA').style.transition = "1s";
        document.querySelector('.secondA').style.display = "inline-block";
        document.querySelector('.secondA').style.display = "flex";
        document.querySelector('.secondA').style.transition = "1s";
        document.querySelector('.thirdA').style.display = "inline-block";
        document.querySelector('.thirdA').style.display = "flex";
        document.querySelector('.thirdA').style.transition = "1s";
        document.querySelector('#ad2').style.display = "inline-block";
        document.querySelector('#ad2').style.width = "30px";   
    }, 500);
}
function historyC(e) {
    slideR()  
}

//reverse slide 
function slideR() {
    document.querySelector('.advanced').style.width = "0px";
    document.querySelector('.advanced').style.transition = "1s";
    document.querySelector('.calF').style.opacity = "1";
    setTimeout(() => {
        document.querySelector('.firstA').style.display = "none";
        document.querySelector('.firstA').style.transition = "1s";
        document.querySelector('.secondA').style.display = "none";
        document.querySelector('.secondA').style.transition = "1s";
        document.querySelector('.thirdA').style.display = "none";
        document.querySelector('.thirdA').style.transition = "1s";
        document.querySelector('#ad2').style.display = "none";
        document.querySelector('#ad2').style.width = "0px";
        
    }, 200);
    S2 = false;
    
}
function removeSLide() {
    slideR()
}
//key 
function boss(e){
    if (e.key === "1") {
        spans.textContent += "1";
        c+= "1"
    }else if(e.key === "2"){
        spans.textContent += "2";
        c+= "2"
    }else if(e.key === "3"){
        spans.textContent += "3";
        c+= "3"
    }else if(e.key === "4"){
        spans.textContent += "4";
        c+= "4"
    }else if(e.key === "5"){
        spans.textContent += "5";
        c+= "5"
    }else if(e.key === "6"){
        spans.textContent += "6";
        c+= "6"
    }else if(e.key === "7"){
        spans.textContent += "7";
        c+= "7"
    }else if(e.key === "8"){
        spans.textContent += "8";
        c+= "8"
    }else if(e.key === "9"){
        spans.textContent += "9";
        c+= "9"
    }else if(e.key === "0"){
        spans.textContent += "0";
        c+= "0"
    } 
    for(i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", numbers)
    } 
    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signsV)
    }
    
    mainAns = eval(c)
    VA.textContent = mainAns; 

    
    squareR.addEventListener("click", squareRoot)

    square.addEventListener('click', sqr)

    
    percent.addEventListener('click', percentage)


    
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs3)
    }
}


//numbers
function numbers(e) {
    spans.textContent += e.target.textContent
    c += e.target.textContent

        
    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signsV)
    }

    mainAns = eval(c)
    VA.textContent = mainAns

    
    squareR.addEventListener("click", squareRoot)

    square.addEventListener('click', sqr)

    
    percent.addEventListener('click', percentage)


    
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs3)
    }

    signN = spans.textContent.lastIndexOf(e.target.textContent)+1;
    
    
}
//normal signs
function signsV(e) {
    spans.textContent += e.target.textContent
    c += e.target.textContent;

    if(c.includes("x")){
        let evX = c.replace(/[x]/g, "*")
        c = evX;

    }

    
  
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signsV)
    }

    VA.style.display = "inline-block"

    squareR.addEventListener("click", squareRoot)

    for(i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", numbers)
    }
    
    document.addEventListener('keydown', boss)

    
    square.removeEventListener('click', sqr)

    
    percent.removeEventListener('click', percentage)
    

    signL = spans.textContent.lastIndexOf(e.target.textContent)+1;


}
//squareroot
function squareRoot(e){
    if(c.slice(c.length-1,c.length) === "1" || c.slice(c.length-1,c.length) === "2" || c.slice(c.length-1,c.length) === "3" || c.slice(c.length-1,c.length) === "4" || c.slice(c.length-1,c.length) === "5" || c.slice(c.length-1,c.length) === "6" || c.slice(c.length-1,c.length) === "7" || c.slice(c.length-1,c.length) === "8" || c.slice(c.length-1,c.length) === "9" || c.slice(c.length-1,c.length) === "0" ){
        spans.textContent += "x√(";
        sRT = true;
    }else if(c.slice(c.length-1,c.length) === "+" || c.slice(c.length-1,c.length) === "-" || c.slice(c.length-1,c.length) === "*" || c.slice(c.length-1,c.length) === "/"){
        spans.textContent += '√(';      
    }else{
        spans.textContent += '√(';  
    } 


    squareR.removeEventListener("click", squareRoot)
        
    document.removeEventListener('keydown', boss)
        
    document.addEventListener('keydown', boss2)
      
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signsV)
    }
    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers)
    }
    for(i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", numbers2)
    }  
    sine.removeEventListener('click', sin)
    cosine.removeEventListener('click',cos);
    tangent.removeEventListener('click',tan)
    squareR.removeEventListener('click',squareRoot)
    logarithm.removeEventListener('click',log)
    brackets[0].removeEventListener("click", brac1)

    VA.textContent = "";

    mainAns = "";
    
    lastBV = true;

    
    brackets[1].removeEventListener("click", brac2)


    if(mad > 0){
        arr = "";
    }


}
function boss2(e) {
    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signs2)
    }
    
    brackets[1].addEventListener("click", brac2)
    if (e.key === "1") {
        spans.textContent += "1";
        arr+= "1"
    }else if(e.key === "2"){
        spans.textContent += "2";
        arr+= "2"
    }else if(e.key === "3"){
        spans.textContent += "3";
        arr+= "3"
    }else if(e.key === "4"){
        spans.textContent += "4";
        arr+= "4"
    }else if(e.key === "5"){
        spans.textContent += "5";
        arr+= "5"
    }else if(e.key === "6"){
        spans.textContent += "6";
        arr+= "6"
    }else if(e.key === "7"){
        spans.textContent += "7";
        arr+= "7"
    }else if(e.key === "8"){
        spans.textContent += "8";
        arr+= "8"
    }else if(e.key === "9"){
        spans.textContent += "9";
        arr+= "9"
    }else if(e.key === "0"){
        spans.textContent += "0";
        arr+= "0"
    } 
    
    kk = Math.sqrt(eval(arr));

    if (sRT) {
        pre = c;
        pre += `*${kk}`;
        sqAns = eval(pre)
        VA.textContent = sqAns
    }
    else if (spans.textContent.slice(spans.textContent.lastIndexOf('√')-1,spans.textContent.lastIndexOf('√')) === "+") {
        pre = c.slice(0,c.length-1)
        sqAns = eval(eval(pre) + kk)
        VA.textContent = sqAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('√')-1,spans.textContent.lastIndexOf('√')) === "-"){  
        pre = c.slice(0,c.length-1)
        sqAns = eval(eval(pre) - kk)
        VA.textContent = sqAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('√')-1,spans.textContent.lastIndexOf('√')) === "x"){  
        pre = c.slice(0,c.length-1)
        pre += `*${kk}`;
        sqAns = eval(pre)
        VA.textContent = sqAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('√')-1,spans.textContent.lastIndexOf('√')) === "/"){  
        pre = c.slice(0,c.length-1)
        pre += `/${kk}`;
        sqAns = eval(pre)
        VA.textContent = sqAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('√')-1,spans.textContent.lastIndexOf('√')) === ""){  
        pre = c.slice(0,c.length-1)
        sqAns = eval(kk)
        VA.textContent = sqAns
    }
    for(i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", numbers2)
    }
}

//square numbers
function numbers2(e){
    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signs2)
    }
    
    brackets[1].addEventListener("click", brac2)

    spans.textContent += e.target.textContent
    arr += e.target.textContent
    kk = Math.sqrt(eval(arr));

    if (sRT) {
        pre = c;
        pre += `*${kk}`;
        sqAns = eval(pre)
        VA.textContent = sqAns
    }
    else if (spans.textContent.slice(spans.textContent.lastIndexOf('√')-1,spans.textContent.lastIndexOf('√')) === "+") {
        pre = c.slice(0,c.length-1)
        sqAns = eval(eval(pre) + kk)
        VA.textContent = sqAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('√')-1,spans.textContent.lastIndexOf('√')) === "-"){  
        pre = c.slice(0,c.length-1)
        sqAns = eval(eval(pre) - kk)
        VA.textContent = sqAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('√')-1,spans.textContent.lastIndexOf('√')) === "x"){  
        pre = c.slice(0,c.length-1)
        pre += `*${kk}`;
        sqAns = eval(pre)
        VA.textContent = sqAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('√')-1,spans.textContent.lastIndexOf('√')) === "/"){  
        pre = c.slice(0,c.length-1)
        pre += `/${kk}`;
        sqAns = eval(pre)
        VA.textContent = sqAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('√')-1,spans.textContent.lastIndexOf('√')) === ""){  
        pre = c.slice(0,c.length-1)
        sqAns = eval(kk)
        VA.textContent = sqAns
    }
    

}

//squareroot signs 
function signs2 (e){
    spans.textContent += e.target.textContent;
    arr += e.target.textContent;
    if(arr.includes("x")){
        let evX = arr.replace(/[x]/g, "*")
        arr = evX;
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs2)
    }

    
}
function brac2(e){
        spans.textContent += e.target.textContent;

        c = sqAns;

        
    mad ++;

    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers2)
    }
    

    document.removeEventListener('keydown', boss2)
    
    brackets[1].removeEventListener("click", brac2)

    
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs2)
    }
    
    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signs3)
    }
}

function signs3(e) {
    spans.textContent += e.target.textContent
    c += e.target.textContent;
    signL = spans.textContent.lastIndexOf(e.target.textContent)

    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs3)
    }
    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers2)
    }
    
    document.removeEventListener('keydown', boss2)
    
    document.addEventListener('keydown', boss)

    for(i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", numbers)
    }

    
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs2)
    }
    
    square.removeEventListener('click', sqr)

    
    if(c.includes("x")){
        let evX = c.replace(/[x]/g, "*")
        c = evX;

    }
    squareR.addEventListener("click", squareRoot)
    sine.addEventListener('click', sin)
    cosine.addEventListener('click',cos);
    tangent.addEventListener('click',tan)
    squareR.addEventListener('click',squareRoot)
    logarithm.addEventListener('click',log)
    brackets[0].addEventListener("click", brac1)


}

//percentage
function percentage(e){
    spans.textContent += e.target.textContent
    sqrV = spans.textContent.slice(signL,spans.textContent.lastIndexOf("%"))
    let percentVP = sqrV.replace(/[x]/g, "")
    let PP = c.slice(0,c.lastIndexOf(signL));
    let PE = eval(percentVP * 1/100)
    c = PP;
    c += PE

    VA.textContent = eval(c);
    
    percent.removeEventListener('click', percentage)
    
    square.removeEventListener('click', sqr)

}

//square
function sqr(){
    spans.textContent += "^(2)";
    
    squareR.removeEventListener("click", squareRoot)

    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers)
    }

    square.removeEventListener('click', sqr)
    
    if(spans.textContent.includes('^')){
        sqrV = spans.textContent.slice(signL,spans.textContent.lastIndexOf("^"))
        let sqrVP = sqrV.replace(/[x]/g, "")
        let SS = c.slice(0,c.lastIndexOf(signL))
        let sR = Math.pow(sqrVP,2)
        c = SS
        c += sR
       VA.textContent = eval(c);
       console.log(SS)
    }
}
// sine
function sin(e){
    if(c.slice(c.length-1,c.length) === "1" || c.slice(c.length-1,c.length) === "2" || c.slice(c.length-1,c.length) === "3" || c.slice(c.length-1,c.length) === "4" || c.slice(c.length-1,c.length) === "5" || c.slice(c.length-1,c.length) === "6" || c.slice(c.length-1,c.length) === "7" || c.slice(c.length-1,c.length) === "8" || c.slice(c.length-1,c.length) === "9" || c.slice(c.length-1,c.length) === "0" ){
        spans.textContent += "xsin(";
        ST = true;
    }else if(c.slice(c.length-1,c.length) === "+" || c.slice(c.length-1,c.length) === "-" || c.slice(c.length-1,c.length) === "*" || c.slice(c.length-1,c.length) === "/"){
        spans.textContent += 'sin(';      
    }else{
        spans.textContent += 'sin(';  
    }


    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers)
    }
    for(i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", numbers3)
    } 
    
    
    document.removeEventListener('keydown', boss)
        
    document.addEventListener('keydown', boss3)
    
    squareR.removeEventListener("click", squareRoot)
    
    cosine.removeEventListener('click',cos)

    sine.removeEventListener('click',sin)

    tangent.removeEventListener('click',tan)
    
    logarithm.removeEventListener('click',log)

    brackets[0].removeEventListener("click", brac1)

    
    brackets[1].removeEventListener("click", brac2)

    
    brackets[1].removeEventListener("click", brac2Sin)


    if(mad2S > 0){
        sinA = "";
    }
}
function boss3(e) {
    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signs4)
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signsV)
    }
    brackets[1].addEventListener("click", brac2Sin)
    if (e.key === "1") {
        spans.textContent += "1";
        sinA+= "1"
    }else if(e.key === "2"){
        spans.textContent += "2";
        sinA+= "2"
    }else if(e.key === "3"){
        spans.textContent += "3";
        sinA+= "3"
    }else if(e.key === "4"){
        spans.textContent += "4";
        sinA+= "4"
    }else if(e.key === "5"){
        spans.textContent += "5";
        sinA+= "5"
    }else if(e.key === "6"){
        spans.textContent += "6";
        sinA+= "6"
    }else if(e.key === "7"){
        spans.textContent += "7";
        sinA+= "7"
    }else if(e.key === "8"){
        spans.textContent += "8";
        sinA+= "8"
    }else if(e.key === "9"){
        spans.textContent += "9";
        sinA+= "9"
    }else if(e.key === "0"){
        spans.textContent += "0";
        sinA+= "0"
    } 
    kkS = (Math.PI/180)*eval(sinA)
    kkS2 = Math.sin(kkS)

    if (ST) {
        pre = c;
        pre += `*${kkS2}`;
        sinAns = eval(pre)
        VA.textContent = sinAns
    }
    else if (spans.textContent.slice(spans.textContent.lastIndexOf('sin')-1,spans.textContent.lastIndexOf('sin')) === "+") {
        pre = c.slice(0,c.length-1)
        sinAns = eval(eval(pre) + kkS2)
        VA.textContent = sinAns;
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('sin')-1,spans.textContent.lastIndexOf('sin')) === "-"){  
        pre = c.slice(0,c.length-1)
        sinAns = eval(eval(pre) - kkS2)
        VA.textContent = sinAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('sin')-1,spans.textContent.lastIndexOf('sin')) === "x"){  
        pre = c.slice(0,c.length-1)
        pre += `*${kkS2}`;
        sinAns = eval(pre)
        VA.textContent = sinAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('sin')-1,spans.textContent.lastIndexOf('sin')) === "/"){  
        pre = c.slice(0,c.length-1)
        pre += `/${kkS2}`;
        sinAns = eval(pre)
        VA.textContent = sinAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('sin')-1,spans.textContent.lastIndexOf('sin')) === ""){  
        pre = c.slice(0,c.length-1)
        sinAns = eval(kkS2)
        VA.textContent = sinAns
    }
}
function numbers3(e){ 
    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signs4)
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signsV)
    }
    brackets[1].addEventListener("click", brac2Sin)

    spans.textContent += e.target.textContent;
    sinA += e.target.textContent;
    kkS = (Math.PI/180)*eval(sinA)
    kkS2 = Math.sin(kkS)

    if (ST) {
        pre = c;
        pre += `*${kkS2}`;
        sinAns = eval(pre)
        VA.textContent = sinAns
    }
    else if (spans.textContent.slice(spans.textContent.lastIndexOf('sin')-1,spans.textContent.lastIndexOf('sin')) === "+") {
        pre = c.slice(0,c.length-1)
        sinAns = eval(eval(pre) + kkS2)
        VA.textContent = sinAns;
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('sin')-1,spans.textContent.lastIndexOf('sin')) === "-"){  
        pre = c.slice(0,c.length-1)
        sinAns = eval(eval(pre) - kkS2)
        VA.textContent = sinAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('sin')-1,spans.textContent.lastIndexOf('sin')) === "x"){  
        pre = c.slice(0,c.length-1)
        pre += `*${kkS2}`;
        sinAns = eval(pre)
        VA.textContent = sinAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('sin')-1,spans.textContent.lastIndexOf('sin')) === "/"){  
        pre = c.slice(0,c.length-1)
        pre += `/${kkS2}`;
        sinAns = eval(pre)
        VA.textContent = sinAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('sin')-1,spans.textContent.lastIndexOf('sin')) === ""){  
        pre = c.slice(0,c.length-1)
        sinAns = eval(kkS2)
        VA.textContent = sinAns
    }
}

function signs4(e) {
    spans.textContent += e.target.textContent;
    sinA += e.target.textContent;
    if(sinA.includes("x")){
        let evX = sinA.replace(/[x]/g, "*")
        sinA = evX;
    }
    console.log(sinA)
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs4)
    }
}

function brac2Sin(e) {
    spans.textContent += e.target.textContent;
    c = sinAns;

    mad2S ++;
    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers3)
    }
    
    document.removeEventListener('keydown', boss3)
    
    brackets[1].removeEventListener("click", brac2Sin)

    
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs4)
    }  
    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signs5)
    }

}
function signs5(e) {
    spans.textContent += e.target.textContent
    c += e.target.textContent;
    signL = spans.textContent.lastIndexOf(e.target.textContent)

    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs5)
    }
    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers3)
    }
    for(i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", numbers)
    }

    document.addEventListener('keydown', boss)
        
    document.removeEventListener('keydown', boss3)

    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs4)
    }
    
    square.removeEventListener('click', sqr)
    if(c.includes("x")){
        let evX = c.replace(/[x]/g, "*")
        c = evX;

    }
    sine.addEventListener('click', sin)
    cosine.addEventListener('click',cos);
    tangent.addEventListener('click',tan)
    squareR.addEventListener('click',squareRoot)
    logarithm.addEventListener('click',log)
    brackets[0].addEventListener("click", brac1)
}
//cosine
function cos(e) {
    if(c.slice(c.length-1,c.length) === "1" || c.slice(c.length-1,c.length) === "2" || c.slice(c.length-1,c.length) === "3" || c.slice(c.length-1,c.length) === "4" || c.slice(c.length-1,c.length) === "5" || c.slice(c.length-1,c.length) === "6" || c.slice(c.length-1,c.length) === "7" || c.slice(c.length-1,c.length) === "8" || c.slice(c.length-1,c.length) === "9" || c.slice(c.length-1,c.length) === "0" ){
        spans.textContent += "xcos(";
        CT = true;
    }else if(c.slice(c.length-1,c.length) === "+" || c.slice(c.length-1,c.length) === "-" || c.slice(c.length-1,c.length) === "*" || c.slice(c.length-1,c.length) === "/"){
        spans.textContent += 'cos(';      
    }else{
        spans.textContent += 'cos(';  
    }

    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers)
    }
    for(i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", numbers4)
    } 
    
    document.removeEventListener('keydown', boss)
        
    document.addEventListener('keydown', boss4)

    cosine.removeEventListener('click',cos)
    
    squareR.removeEventListener("click", squareRoot)

    sine.removeEventListener('click',sin)
    
    tangent.removeEventListener('click',tan)
    
    logarithm.removeEventListener('click',log)
    
    brackets[0].removeEventListener("click", brac1)

    
    brackets[1].removeEventListener("click", brac2)

    
    brackets[1].removeEventListener("click", brac2Sin)

    
    brackets[1].removeEventListener("click", brac2cos)

    
    if(mad2C > 0){
        cosA = "";
    }
}
function boss4(e) {
    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signs6)
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs4)
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signsV)
    }
    brackets[1].addEventListener("click", brac2cos)
    if (e.key === "1") {
        spans.textContent += "1";
        cosA+= "1"
    }else if(e.key === "2"){
        spans.textContent += "2";
        cosA+= "2"
    }else if(e.key === "3"){
        spans.textContent += "3";
        cosA+= "3"
    }else if(e.key === "4"){
        spans.textContent += "4";
        cosA+= "4"
    }else if(e.key === "5"){
        spans.textContent += "5";
        cosA+= "5"
    }else if(e.key === "6"){
        spans.textContent += "6";
        cosA+= "6"
    }else if(e.key === "7"){
        spans.textContent += "7";
        cosA+= "7"
    }else if(e.key === "8"){
        spans.textContent += "8";
        cosA+= "8"
    }else if(e.key === "9"){
        spans.textContent += "9";
        cosA+= "9"
    }else if(e.key === "0"){
        spans.textContent += "0";
        cosA+= "0"
    } 
    kkC = (Math.PI/180)*eval(cosA)
    kkC2 = Math.cos(kkC)

    if (CT) {
        pre = c;
        pre += `*${kkC2}`;
        cosAns = eval(pre)
        VA.textContent = cosAns
    }
    else if (spans.textContent.slice(spans.textContent.lastIndexOf('cos')-1,spans.textContent.lastIndexOf('cos')) === "+") {
        pre = c.slice(0,c.length-1)
        cosAns = eval(eval(pre) + kkC2)
        VA.textContent = cosAns;
        console.log(sinAns)
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('cos')-1,spans.textContent.lastIndexOf('cos')) === "-"){  
        pre = c.slice(0,c.length-1)
        cosAns = eval(eval(pre) - kkC2)
        VA.textContent = cosAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('cos')-1,spans.textContent.lastIndexOf('cos')) === "x"){  
        pre = c.slice(0,c.length-1)
        pre += `*${kkC2}`;
        cosAns = eval(pre)
        VA.textContent = cosAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('cos')-1,spans.textContent.lastIndexOf('cos')) === "/"){  
        pre = c.slice(0,c.length-1)
        pre += `/${kkC2}`;
        cosAns = eval(pre)
        VA.textContent = cosAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('cos')-1,spans.textContent.lastIndexOf('cos')) === ""){  
        pre = c.slice(0,c.length-1)
        cosAns = eval(kkC2)
        VA.textContent = cosAns
    }
}

function numbers4(e){ 
    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signs6)
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs4)
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signsV)
    }
    brackets[1].addEventListener("click", brac2cos)
    spans.textContent += e.target.textContent;
    cosA += e.target.textContent;
    kkC = (Math.PI/180)*eval(cosA)
    kkC2 = Math.cos(kkC)

    if (CT) {
        pre = c;
        pre += `*${kkC2}`;
        cosAns = eval(pre)
        VA.textContent = cosAns
    }
    else if (spans.textContent.slice(spans.textContent.lastIndexOf('cos')-1,spans.textContent.lastIndexOf('cos')) === "+") {
        pre = c.slice(0,c.length-1)
        cosAns = eval(eval(pre) + kkC2)
        VA.textContent = cosAns;
        console.log(sinAns)
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('cos')-1,spans.textContent.lastIndexOf('cos')) === "-"){  
        pre = c.slice(0,c.length-1)
        cosAns = eval(eval(pre) - kkC2)
        VA.textContent = cosAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('cos')-1,spans.textContent.lastIndexOf('cos')) === "x"){  
        pre = c.slice(0,c.length-1)
        pre += `*${kkC2}`;
        cosAns = eval(pre)
        VA.textContent = cosAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('cos')-1,spans.textContent.lastIndexOf('cos')) === "/"){  
        pre = c.slice(0,c.length-1)
        pre += `/${kkC2}`;
        cosAns = eval(pre)
        VA.textContent = cosAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('cos')-1,spans.textContent.lastIndexOf('cos')) === ""){  
        pre = c.slice(0,c.length-1)
        cosAns = eval(kkC2)
        VA.textContent = cosAns
    }
}
function signs6(e) {
    spans.textContent += e.target.textContent;
    cosA += e.target.textContent;
    if(cosA.includes("x")){
        let evX = cosA.replace(/[x]/g, "*")
        cosA = evX;
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs6)
    }

}

function brac2cos(e) {
    spans.textContent += e.target.textContent;
    c = cosAns;

    mad2C ++;
    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers4)
    }
    
    document.removeEventListener('keydown', boss4)
      
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs6)
    }
    
    brackets[1].removeEventListener("click", brac2cos)

    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signs7)
    }

}

function signs7(e) {
    spans.textContent += e.target.textContent
    c += e.target.textContent;
    signL = spans.textContent.lastIndexOf(e.target.textContent)

    
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs7)
    }

    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs6)
    }
    
    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers4)
    }

    for(i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", numbers)
    }
    
    
    document.removeEventListener('keydown', boss4)
        
    document.addEventListener('keydown', boss)

    square.removeEventListener('click', sqr)
    if(c.includes("x")){
        let evX = c.replace(/[x]/g, "*")
        c = evX;

    }
    sine.addEventListener('click', sin)
    squareR.addEventListener('click',squareRoot)
    cosine.addEventListener('click',cos);
    tangent.addEventListener('click',tan)
    logarithm.addEventListener('click',log)
    brackets[0].addEventListener("click", brac1)
}
//tangent
function tan(e) {
    if(c.slice(c.length-1,c.length) === "1" || c.slice(c.length-1,c.length) === "2" || c.slice(c.length-1,c.length) === "3" || c.slice(c.length-1,c.length) === "4" || c.slice(c.length-1,c.length) === "5" || c.slice(c.length-1,c.length) === "6" || c.slice(c.length-1,c.length) === "7" || c.slice(c.length-1,c.length) === "8" || c.slice(c.length-1,c.length) === "9" || c.slice(c.length-1,c.length) === "0" ){
        spans.textContent += "xtan(";
        TT = true;
    }else if(c.slice(c.length-1,c.length) === "+" || c.slice(c.length-1,c.length) === "-" || c.slice(c.length-1,c.length) === "*" || c.slice(c.length-1,c.length) === "/"){
        spans.textContent += 'tan(';      
    }else{
        spans.textContent += 'tan(';  
    }


    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers)
    }

    for(i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", numbers5)
    } 
    
    document.removeEventListener('keydown', boss)
        
    document.addEventListener('keydown', boss5)

    cosine.removeEventListener('click',cos)
    
    squareR.removeEventListener("click", squareRoot)

    sine.removeEventListener('click',sin)

    tangent.removeEventListener('click',tan)

    logarithm.removeEventListener('click',log)

    brackets[0].removeEventListener("click", brac1)

    
    brackets[1].removeEventListener("click", brac2)

    
    brackets[1].removeEventListener("click", brac2Sin)

    
    brackets[1].removeEventListener("click", brac2cos)


    brackets[1].removeEventListener("click", brac2tan)

    
    if(mad2T > 0){
        tanA = "";
    }
}
function boss5(e) {
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs6)
    }
    
    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signs8)
    }

    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs4)
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signsV)
    }
    brackets[1].addEventListener("click", brac2tan)
    if (e.key === "1") {
        spans.textContent += "1";
        tanA+= "1"
    }else if(e.key === "2"){
        spans.textContent += "2";
        tanA+= "2"
    }else if(e.key === "3"){
        spans.textContent += "3";
        tanA+= "3"
    }else if(e.key === "4"){
        spans.textContent += "4";
        tanA+= "4"
    }else if(e.key === "5"){
        spans.textContent += "5";
        tanA+= "5"
    }else if(e.key === "6"){
        spans.textContent += "6";
        tanA+= "6"
    }else if(e.key === "7"){
        spans.textContent += "7";
        tanA+= "7"
    }else if(e.key === "8"){
        spans.textContent += "8";
        tanA+= "8"
    }else if(e.key === "9"){
        spans.textContent += "9";
        tanA+= "9"
    }else if(e.key === "0"){
        spans.textContent += "0";
        tanA+= "0"
    } 
    kkT = (Math.PI/180)*eval(tanA)
    kkT2 = Math.tan(kkT)

    if (TT) {
        pre = c;
        pre += `*${kkT2}`;
        tanAns = eval(pre)
        VA.textContent = tanAns
    }
    else if (spans.textContent.slice(spans.textContent.lastIndexOf('tan')-1,spans.textContent.lastIndexOf('tan')) === "+") {
        pre = c.slice(0,c.length-1)
        tanAns = eval(eval(pre) + kkT2)
        VA.textContent = tanAns;
        console.log(tanAns)
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('tan')-1,spans.textContent.lastIndexOf('tan')) === "-"){  
        pre = c.slice(0,c.length-1)
        tanAns = eval(eval(pre) - kkT2)
        VA.textContent = tanAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('tan')-1,spans.textContent.lastIndexOf('tan')) === "x"){  
        pre = c.slice(0,c.length-1)
        pre += `*${kkT2}`;
        tanAns = eval(pre)
        VA.textContent = tanAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('tan')-1,spans.textContent.lastIndexOf('tan')) === "/"){  
        pre = c.slice(0,c.length-1)
        pre += `/${kkT2}`;
        tanAns = eval(pre)
        VA.textContent = tanAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('tan')-1,spans.textContent.lastIndexOf('tan')) === ""){  
        pre = c.slice(0,c.length-1)
        tanAns = eval(kkT2)
        VA.textContent = tanAns
    }
}
function numbers5(e) {
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs6)
    }
    
    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signs8)
    }

    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs4)
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signsV)
    }
    brackets[1].addEventListener("click", brac2tan)
    spans.textContent += e.target.textContent;
    tanA += e.target.textContent;
    kkT = (Math.PI/180)*eval(tanA)
    kkT2 = Math.tan(kkT)

    if (TT) {
        pre = c;
        pre += `*${kkT2}`;
        tanAns = eval(pre)
        VA.textContent = tanAns
    }
    else if (spans.textContent.slice(spans.textContent.lastIndexOf('tan')-1,spans.textContent.lastIndexOf('tan')) === "+") {
        pre = c.slice(0,c.length-1)
        tanAns = eval(eval(pre) + kkT2)
        VA.textContent = tanAns;
        console.log(tanAns)
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('tan')-1,spans.textContent.lastIndexOf('tan')) === "-"){  
        pre = c.slice(0,c.length-1)
        tanAns = eval(eval(pre) - kkT2)
        VA.textContent = tanAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('tan')-1,spans.textContent.lastIndexOf('tan')) === "x"){  
        pre = c.slice(0,c.length-1)
        pre += `*${kkT2}`;
        tanAns = eval(pre)
        VA.textContent = tanAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('tan')-1,spans.textContent.lastIndexOf('tan')) === "/"){  
        pre = c.slice(0,c.length-1)
        pre += `/${kkT2}`;
        tanAns = eval(pre)
        VA.textContent = tanAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('tan')-1,spans.textContent.lastIndexOf('tan')) === ""){  
        pre = c.slice(0,c.length-1)
        tanAns = eval(kkT2)
        VA.textContent = tanAns
    }
}
function signs8(e){
    spans.textContent += e.target.textContent;
    tanA += e.target.textContent;
    if(tanA.includes("x")){
        let evX = tanA.replace(/[x]/g, "*")
        tanA = evX;
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs8)
    }
}
function brac2tan(e) {
    spans.textContent += e.target.textContent;
    c = tanAns;

    mad2T ++;
    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers5)
    }
    
    document.removeEventListener('keydown', boss5)
      
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs8)
    }
    
    brackets[1].removeEventListener("click", brac2tan)

    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signs9)
    }
    
}
function signs9(e) {
    spans.textContent += e.target.textContent
    c += e.target.textContent;
    signL = spans.textContent.lastIndexOf(e.target.textContent)

    
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs8)
    }

    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs9)
    }
    
    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers5)
    }

    for(i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", numbers)
    }
    
    document.removeEventListener('keydown', boss5)
        
    document.addEventListener('keydown', boss)
    
    square.removeEventListener('click', sqr)
    if(c.includes("x")){
        let evX = c.replace(/[x]/g, "*")
        c = evX;

    }
    sine.addEventListener('click', sin)
    squareR.addEventListener('click',squareRoot)
    cosine.addEventListener('click',cos);
    tangent.addEventListener('click',tan) 
    logarithm.addEventListener('click',log)
    brackets[0].addEventListener("click", brac1)
}
//logarith
function log(e) {
    if(c.slice(c.length-1,c.length) === "1" || c.slice(c.length-1,c.length) === "2" || c.slice(c.length-1,c.length) === "3" || c.slice(c.length-1,c.length) === "4" || c.slice(c.length-1,c.length) === "5" || c.slice(c.length-1,c.length) === "6" || c.slice(c.length-1,c.length) === "7" || c.slice(c.length-1,c.length) === "8" || c.slice(c.length-1,c.length) === "9" || c.slice(c.length-1,c.length) === "0" ){
        spans.textContent += "xlog(";
        LT = true;
    }else if(c.slice(c.length-1,c.length) === "+" || c.slice(c.length-1,c.length) === "-" || c.slice(c.length-1,c.length) === "*" || c.slice(c.length-1,c.length) === "/"){
        spans.textContent += 'log(';      
    }else{
        spans.textContent += 'log(';  
    }
    

    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers)
    }

    for(i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", numbers6)
    } 
    
    document.removeEventListener('keydown', boss)
        
    document.addEventListener('keydown', boss6)

    cosine.removeEventListener('click',cos)
    
    squareR.removeEventListener("click", squareRoot)

    sine.removeEventListener('click',sin)

    tangent.removeEventListener('click',tan)

    logarithm.removeEventListener('click',log)

    brackets[0].removeEventListener("click", brac1)

    
    brackets[1].removeEventListener("click", brac2)

    
    brackets[1].removeEventListener("click", brac2Sin)

    
    brackets[1].removeEventListener("click", brac2cos)


    brackets[1].removeEventListener("click", brac2tan)

    
    brackets[1].removeEventListener("click", brac2log)

    
    if(mad2L > 0){
        logA = "";
    }
    
}
function boss6(e) {
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs6)
    }
    
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs8)
    }
    
    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signs10)
    }

    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs4)
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signsV)
    }
    brackets[1].addEventListener("click", brac2log)
    if (e.key === "1") {
        spans.textContent += "1";
        logA+= "1"
    }else if(e.key === "2"){
        spans.textContent += "2";
        logA+= "2"
    }else if(e.key === "3"){
        spans.textContent += "3";
        logA+= "3"
    }else if(e.key === "4"){
        spans.textContent += "4";
        logA+= "4"
    }else if(e.key === "5"){
        spans.textContent += "5";
        logA+= "5"
    }else if(e.key === "6"){
        spans.textContent += "6";
        logA+= "6"
    }else if(e.key === "7"){
        spans.textContent += "7";
        logA+= "7"
    }else if(e.key === "8"){
        spans.textContent += "8";
        logA+= "8"
    }else if(e.key === "9"){
        spans.textContent += "9";
        logA+= "9"
    }else if(e.key === "0"){
        spans.textContent += "0";
        logA+= "0"
    } 
    logA += e.target.textContent;
    kkL = Math.log10(eval(logA))

    if (LT) {
        pre = c;
        pre += `*${kkL}`;
        logAns = eval(pre)
        VA.textContent = logAns
    }
    else if (spans.textContent.slice(spans.textContent.lastIndexOf('log')-1,spans.textContent.lastIndexOf('log')) === "+") {
        pre = c.slice(0,c.length-1)
        logAns = eval(eval(pre) + kkL)
        VA.textContent = logAns;
        console.log(logAns)
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('log')-1,spans.textContent.lastIndexOf('log')) === "-"){  
        pre = c.slice(0,c.length-1)
        logAns = eval(eval(pre) - kkL)
        VA.textContent = logAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('log')-1,spans.textContent.lastIndexOf('log')) === "x"){  
        pre = c.slice(0,c.length-1)
        pre += `*${kkL}`;
        logAns = eval(pre)
        VA.textContent = logAns;
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('log')-1,spans.textContent.lastIndexOf('log')) === "/"){  
        pre = c.slice(0,c.length-1)
        pre += `/${kkL}`;
        logAns = eval(pre)
        VA.textContent = logAns;
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('log')-1,spans.textContent.lastIndexOf('log')) === ""){  
        pre = c.slice(0,c.length-1)
        logAns = eval(kkL)
        VA.textContent = logAns
    }
}
function numbers6(e) {
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs6)
    }
    
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs8)
    }
    
    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signs10)
    }

    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs4)
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signsV)
    }
    brackets[1].addEventListener("click", brac2log)
    spans.textContent += e.target.textContent;
    logA += e.target.textContent;
    kkL = Math.log10(eval(logA))

    if (LT) {
        pre = c;
        pre += `*${kkL}`;
        logAns = eval(pre)
        VA.textContent = logAns
    }
    else if (spans.textContent.slice(spans.textContent.lastIndexOf('log')-1,spans.textContent.lastIndexOf('log')) === "+") {
        pre = c.slice(0,c.length-1)
        logAns = eval(eval(pre) + kkL)
        VA.textContent = logAns;
        console.log(logAns)
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('log')-1,spans.textContent.lastIndexOf('log')) === "-"){  
        pre = c.slice(0,c.length-1)
        logAns = eval(eval(pre) - kkL)
        VA.textContent = logAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('log')-1,spans.textContent.lastIndexOf('log')) === "x"){  
        pre = c.slice(0,c.length-1)
        console.log(pre)
        pre += `*${kkL}`;
        logAns = eval(pre)
        VA.textContent = logAns;
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('log')-1,spans.textContent.lastIndexOf('log')) === "/"){  
        pre = c.slice(0,c.length-1)
        pre += `/${kkL}`;
        logAns = eval(pre)
        VA.textContent = logAns;
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('log')-1,spans.textContent.lastIndexOf('log')) === ""){  
        pre = c.slice(0,c.length-1)
        logAns = eval(kkL)
        VA.textContent = logAns
    }
}
function signs10(e) {
    spans.textContent += e.target.textContent;
    logA += e.target.textContent;
    if(logA.includes("x")){
        let evX = logA.replace(/[x]/g, "*")
        logA = evX;
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs10)
    }
    
}
function brac2log(e) {
    spans.textContent += e.target.textContent;
    c = logAns;

    mad2L ++;
    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers6)
    }
    
    document.removeEventListener('keydown', boss6)
      
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs10)
    }
    
    brackets[1].removeEventListener("click", brac2log)

    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signs11)
    }  
}
function signs11(e) {
    spans.textContent += e.target.textContent
    c += e.target.textContent;
    signL = spans.textContent.lastIndexOf(e.target.textContent)

    
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs10)
    }

    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs11)
    }
    
    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers6)
    }

    for(i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", numbers)
    }
    
    document.removeEventListener('keydown', boss6)
        
    document.addEventListener('keydown', boss)
    
    square.removeEventListener('click', sqr)
    if(c.includes("x")){
        let evX = c.replace(/[x]/g, "*")
        c = evX;

    }
    sine.addEventListener('click', sin)
    squareR.addEventListener('click',squareRoot)
    cosine.addEventListener('click',cos);
    tangent.addEventListener('click',tan) 
    logarithm.addEventListener('click',log)
    brackets[0].addEventListener("click", brac1)
    
}
//brackets
function brac1(){
    if(c.slice(c.length-1,c.length) === "1" || c.slice(c.length-1,c.length) === "2" || c.slice(c.length-1,c.length) === "3" || c.slice(c.length-1,c.length) === "4" || c.slice(c.length-1,c.length) === "5" || c.slice(c.length-1,c.length) === "6" || c.slice(c.length-1,c.length) === "7" || c.slice(c.length-1,c.length) === "8" || c.slice(c.length-1,c.length) === "9" || c.slice(c.length-1,c.length) === "0" ){
        spans.textContent += "x(";
        BT = true;
    }else if(c.slice(c.length-1,c.length) === "+" || c.slice(c.length-1,c.length) === "-" || c.slice(c.length-1,c.length) === "*" || c.slice(c.length-1,c.length) === "/"){
        spans.textContent += '(';      
    }else{
        spans.textContent += '(';  
    }  
    
    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers)
    }

    for(i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", numbers7)
    } 
    
    document.removeEventListener('keydown', boss)
        
    document.addEventListener('keydown', boss7)

    cosine.removeEventListener('click',cos)

    squareR.removeEventListener("click", squareRoot)

    sine.removeEventListener('click',sin)

    tangent.removeEventListener('click',tan)

    logarithm.removeEventListener('click',log)

    brackets[0].removeEventListener("click", brac1)

    brackets[1].removeEventListener("click", brac2)


    brackets[1].removeEventListener("click", brac2Sin)


    brackets[1].removeEventListener("click", brac2cos)


    brackets[1].removeEventListener("click", brac2tan)


    brackets[1].removeEventListener("click", brac2log)

    
    brackets[1].removeEventListener("click", brac2brac)


    if(mad2B > 0){
        bracA = "";
    }

}
function boss7(e) {
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs6)
    }
    
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs8)
    }
    
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs10)
    }

    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signs12)
    }

    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs4)
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signsV)
    }
    brackets[1].addEventListener("click", brac2brac)
    if (e.key === "1") {
        spans.textContent += "1";
        bracA+= "1"
    }else if(e.key === "2"){
        spans.textContent += "2";
        bracA+= "2"
    }else if(e.key === "3"){
        spans.textContent += "3";
        bracA+= "3"
    }else if(e.key === "4"){
        spans.textContent += "4";
        bracA+= "4"
    }else if(e.key === "5"){
        spans.textContent += "5";
        bracA+= "5"
    }else if(e.key === "6"){
        spans.textContent += "6";
        bracA+= "6"
    }else if(e.key === "7"){
        spans.textContent += "7";
        bracA+= "7"
    }else if(e.key === "8"){
        spans.textContent += "8";
        bracA+= "8"
    }else if(e.key === "9"){
        spans.textContent += "9";
        bracA+= "9"
    }else if(e.key === "0"){
        spans.textContent += "0";
        bracA+= "0"
    }

    kkB = eval(bracA)

    if (BT) {
        pre = c;
        pre += `*${kkB}`;
        bracAns = eval(pre)
        VA.textContent = bracAns
    }
    else if (spans.textContent.slice(spans.textContent.lastIndexOf('(')-1,spans.textContent.lastIndexOf('(')) === "+") {
        pre = c.slice(0,c.length-1)
        bracAns = eval(eval(pre) + kkB)
        VA.textContent = bracAns;
        console.log(bracAns)
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('(')-1,spans.textContent.lastIndexOf('(')) === "-"){  
        pre = c.slice(0,c.length-1)
        bracAns = eval(eval(pre) - kkB)
        VA.textContent = bracAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('(')-1,spans.textContent.lastIndexOf('(')) === "x"){  
        pre = c.slice(0,c.length-1)
        pre += `*${kkB}`;
        bracAns = eval(pre)
        VA.textContent = bracAns;
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('(')-1,spans.textContent.lastIndexOf('(')) === "/"){  
        pre = c.slice(0,c.length-1)
        pre += `/${kkB}`;
        bracAns = eval(pre)
        VA.textContent = bracAns;
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('(')-1,spans.textContent.lastIndexOf('(')) === ""){  
        pre = c.slice(0,c.length-1)
        bracAns = eval(kkB)
        VA.textContent = bracAns
    }
}
function numbers7(e) {
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs6)
    }
    
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs8)
    }
    
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs10)
    }

    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signs12)
    }

    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs4)
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signsV)
    }
    brackets[1].addEventListener("click", brac2brac)
    spans.textContent += e.target.textContent;
    bracA += e.target.textContent;
    kkB = eval(bracA)

    if (BT) {
        pre = c;
        pre += `*${kkB}`;
        bracAns = eval(pre)
        VA.textContent = bracAns
    }
    else if (spans.textContent.slice(spans.textContent.lastIndexOf('(')-1,spans.textContent.lastIndexOf('(')) === "+") {
        pre = c.slice(0,c.length-1)
        bracAns = eval(eval(pre) + kkB)
        VA.textContent = bracAns;
        console.log(bracAns)
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('(')-1,spans.textContent.lastIndexOf('(')) === "-"){  
        pre = c.slice(0,c.length-1)
        bracAns = eval(eval(pre) - kkB)
        VA.textContent = bracAns
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('(')-1,spans.textContent.lastIndexOf('(')) === "x"){  
        pre = c.slice(0,c.length-1)
        pre += `*${kkB}`;
        bracAns = eval(pre)
        VA.textContent = bracAns;
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('(')-1,spans.textContent.lastIndexOf('(')) === "/"){  
        pre = c.slice(0,c.length-1)
        pre += `/${kkB}`;
        bracAns = eval(pre)
        VA.textContent = bracAns;
    }else if (spans.textContent.slice(spans.textContent.lastIndexOf('(')-1,spans.textContent.lastIndexOf('(')) === ""){  
        pre = c.slice(0,c.length-1)
        bracAns = eval(kkB)
        VA.textContent = bracAns
    }
}
function signs12(e) {
    spans.textContent += e.target.textContent;
    bracA += e.target.textContent;
    if(bracA.includes("x")){
        let evX = bracA.replace(/[x]/g, "*")
        bracA = evX;
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs12)
    }
    
}
function brac2brac(e) {
    spans.textContent += e.target.textContent;
    c = bracAns;

    mad2B ++;
    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers7)
    }
    
    document.removeEventListener('keydown', boss7)
      
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs12)
    }
    
    brackets[1].removeEventListener("click", brac2brac)

    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signs13)
    }  
    
}
function signs13(e) {
    spans.textContent += e.target.textContent
    c += e.target.textContent;
    signL = spans.textContent.lastIndexOf(e.target.textContent)

    console.log(bracA)

    
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs12)
    }

    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs13)
    }
    
    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers7)
    }

    for(i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", numbers)
    }
    
    document.removeEventListener('keydown', boss7)
        
    document.addEventListener('keydown', boss)
    
    square.removeEventListener('click', sqr)
    if(c.includes("x")){
        let evX = c.replace(/[x]/g, "*")
        c = evX;

    }
    sine.addEventListener('click', sin)
    squareR.addEventListener('click',squareRoot)
    cosine.addEventListener('click',cos);
    tangent.addEventListener('click',tan) 
    logarithm.addEventListener('click',log)
    brackets[0].addEventListener("click", brac1)
    
}
//history
function historyB(e) {
    advance.addEventListener('click', sliderR)
    if (hisB.classList.contains('hisR')) {
        hisB.classList.remove('hisR')
        history.style.height = "0px";
        history.style.transition = "1s"
        hisB.textContent = "HISTORY";
    }else{
        hisB.classList.add('hisR')
        history.style.height = "415px";
        history.style.transition = "1s"
        hisB.textContent = "KEYPAD";
    }

}
function sliderR(e) {       
    if (hisB.classList.contains('hisR')) {
    hisB.classList.remove('hisR')
    history.style.height = "0px";
    history.style.transition = "1s"
    hisB.textContent = "HISTORY";
    } 
}
//clear
function clearH(e) {
    localStorage.clear()
    let dd = document.querySelectorAll('.mad');
    for (let i = 0; i < dd.length; i++) {
        dd[i].style.display = 'none';
    }
    if (hisB.classList.contains('hisR')) {
        hisB.classList.remove('hisR')
        history.style.height = "0px";
        history.style.transition = "1s"
        advance.addEventListener('click', slide)
        hisB.textContent = "HISTORY";
    }else{
        hisB.classList.add('hisR')
        history.style.height = "415px";
        history.style.transition = "1s"
        hisB.textContent = "KEYPAD";
        advance.removeEventListener('click', slide)
    }
}
//delete
function deleteN() {
    let del1 = spans.textContent
    del1 = del1.substring(0, del1.length - 1);
    spans.textContent = del1

    
    for(i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", numbers)
    }
    
    document.addEventListener('keydown', boss)

    try {
        c = spans.textContent
        let del2 = c
        del2 = del2.substring(0, del2.length - 1);
        c = del2
        c = spans.textContent
        mainAns = eval(c)
        VA.textContent = mainAns;
        
        let del3 = arr
        del3 = del3.substring(0, del3.length - 1);
        arr = del3
        kk = Math.sqrt(eval(arr));

     
        console.log(kk)
        
        
    } catch (error) {
        VA.textContent = "";
    }

}

//cancel
function cancel(e) {
    window.location.reload()
}
function showans() {
    let cre = document.createElement('div')
    let creChild1 = document.createElement('h4')
    let creChild2 = document.createElement('h3')
    cre.append(creChild1)
    creChild1.append(spans.textContent)
    cre.append(creChild2)
    creChild2.append(VA.textContent)
    cre.classList.add('mad')
    history.append(cre)

    let newD = spans.textContent
    let newD2 = VA.textContent;
    if(localStorage.getItem('h4')=== null){
        localStorage.setItem('h4','[]')
    }
    
    let oldD  = JSON.parse(localStorage.getItem('h4'))
    oldD.push(newD)

    localStorage.setItem('h4', JSON.stringify(oldD))

    
    if(localStorage.getItem('h3')=== null){
        localStorage.setItem('h3','[]')
    }
    
    let oldD2  = JSON.parse(localStorage.getItem('h3'))
    oldD2.push(newD2)

    localStorage.setItem('h3', JSON.stringify(oldD2))


    spans.textContent = VA.textContent;
    c = VA.textContent;
    for(i=0; i<signs.length; i++){
        signs[i].addEventListener("click", signsV)
    }
    for(i=0; i<buttons.length; i++){
        buttons[i].removeEventListener("click", numbers)
    }
        
    document.removeEventListener('keydown', boss)

    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs3)
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs5)
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs7)
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs9)
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs11)
    }
    for(i=0; i<signs.length; i++){
        signs[i].removeEventListener("click", signs13)
    }

    sine.removeEventListener('click', sin)
    cosine.removeEventListener('click',cos);
    tangent.removeEventListener('click',tan)
    squareR.removeEventListener('click',squareRoot)
    logarithm.removeEventListener('click',log)
    percent.removeEventListener('click', percentage)
    brackets[0].removeEventListener("click", brac1)
    VA.style.display = "none";

}