let hcount = 0;
function hinc1(){
    hcount+=1
    document.getElementById("screen1").textContent=hcount  
}
function hinc2(){
    hcount+=2
    document.getElementById("screen1").textContent=hcount  
}
function hinc3(){
    hcount+=3
    document.getElementById("screen1").textContent=hcount  
}
let gcount=0
function ginc1(){
    gcount+=1
    document.getElementById("screen2").textContent=gcount  
}
function ginc2(){
    gcount+=2
    document.getElementById("screen2").textContent=gcount  
}
function ginc3(){
    gcount+=3
    document.getElementById("screen2").textContent=gcount  
}
function final(){
    if (gcount > hcount)
    {
        document.getElementById("res").textContent = "WInner is GUEST TEAM"
    }
    else if (hcount > gcount) {
        document.getElementById("res").textContent = "WInner is HOME TEAM"
    } 
    else{
        document.getElementById("res").textContent = "DRAW MATCH"
    }
    gcount=0
    hcount=0
    document.getElementById("screen2").textContent=0
    document.getElementById("screen1").textContent=0
}
