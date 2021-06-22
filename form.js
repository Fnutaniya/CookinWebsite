
 document.getElementById("fname").addEventListener("focus",function(){
    this.style.background="aliceblue";
});
document.getElementById("mailid").addEventListener("focus",function(){
    this.style.background="aliceblue";
});
document.getElementById("textar").addEventListener("focus",function(){
   this.style.background="aliceblue";
});



let u=document.getElementById("fname");
let p=document.getElementById("pass");
let flag=1;
function formValidation(){
if(u.value ==""){
document.getElementById("error1").innerHTML="Username is empty";
flag=0;
}
else if(p.value.length <3){
    document.getElementById("error2").innerHTML="Password must be greater than 3 character";
    flag=0;
}
else{
    document.getElementById("error1").innerHTML="";
    flag=1;
    document.getElementById("error2").innerHTML="";
    flag=1;
}
if(flag==1){
return true;
}
else{
    return false;
}


}

