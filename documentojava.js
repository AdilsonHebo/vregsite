

var ide=document.getElementById("menux");


window.addEventListener("scroll", function(){

    var ercules =window.pageYOffset
    if(ercules>20){
        ide.classList.add("luz");

     }
    else{
        ide.classList.remove("luz");
      
    }
});


 


{/* <input type="text" placeholder="Digite o Seu Nome" name="" id="ide"> */}







// transitio

// loader

window.addEventListener("load",function(){
var wc=document.querySelector(".loarder");

wc.classList.add("invisivel")


});


// transitio_comredes socias

var twitter=document.querySelector(".tw");

twitter.addEventListener("mousemove",function(){
    var tw=document.querySelector(".Twitter");
    tw.style.opacity=1;
});
twitter.addEventListener("mouseleave",function(){
    var tw=document.querySelector(".Twitter");
    tw.style.opacity=0;
});

// facebook

var face=document.querySelector(".fb");

face.addEventListener("mousemove",function(){
    var tw=document.querySelector(".Facebook");
    tw.style.opacity=1;
});
face.addEventListener("mouseleave",function(){
    var fb=document.querySelector(".Facebook");
    fb.style.opacity=0;
});


// GitHab

var gh=document.querySelector(".gh");

gh.addEventListener("mousemove",function(){
    var t=document.querySelector(".git");
    t.style.opacity=1;
});
gh.addEventListener("mouseleave",function(){
    var g=document.querySelector(".git");
    g.style.opacity=0;
});

// home

var home=document.querySelector(".hm");

home.addEventListener("mousemove",function(){
    var t=document.querySelector(".Home");
    t.style.opacity=1;
});
home.addEventListener("mouseleave",function(){
    var g=document.querySelector(".Home");
    g.style.opacity=0;
});

// whatshap

var wt=document.querySelector(".wt");

wt.addEventListener("mousemove",function(){
    var wt=document.querySelector(".Whatsapp");
    wt.style.opacity=1;
});
wt.addEventListener("mouseleave",function(){
    var wt=document.querySelector(".Whatsapp");
    wt.style.opacity=0;
});

// animacao
var carde=document.getElementById("chm");
var tope=document.getElementById("esq");
var dv=document.getElementById("dirc");

window.addEventListener("scroll", function(){

    var scrollder =window.pageYOffset


    if(scrollder>300){
     
tope.classList.add("esqd")
dv.classList.add("dire")
     }
   else if(scrollder < 600){
    tope.classList.remove("esqd")
    dv.classList.remove("dire")
    carde.classList.remove("card")
     }
     if(scrollder>1100){
     
        tope.classList.remove("esqd")
    dv.classList.remove("dire")
             }

             if(scrollder>600){
     
                carde.classList.add("card")
          
                     }

    
     else{
       
     }
    
});