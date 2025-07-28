var btn=document.querySelector(".add");
var istatus=document.querySelector("h3");
var flag=0;
var con=document.querySelector(".outer img");
var like=document.querySelector("i");

con.addEventListener("dblclick",function(){
    like.style.transform="translate(-50%,-50%) scale(1.01)";
    setTimeout(function(){
        like.style.opacity=0;
    },1000)
    setTimeout(function(){
        like.style.transform="translate(-50%,-50%) scale(0)";     
    },2000)
})

btn.addEventListener("click",function(){
    if(flag==0)
    {
        btn.style.backgroundColor="red";
        btn.innerHTML="Remove Friend";
        istatus.style.color="green";
        flag=1;
        istatus.innerHTML="Friends";
    }
    else{
        btn.style.backgroundColor="aquamarine";
        btn.innerHTML="Add Friend";
        istatus.innerHTML="Friend";
        istatus.innerHTML="Stranger";
        istatus.style.color="red";
        flag=0;

    }
})