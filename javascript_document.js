let box=document.querySelectorAll('.xactive');


function menu_prepare(e){


    box.forEach((box_menu)=>
    
    box_menu.classList.remove('class_menu'));
    this.classList.add('class_menu');

}


box.forEach((menur)=>{
    menur.addEventListener('click',menu_prepare)
});


var labbox=document.querySelector('#labelbox')

labbox.addEventListener('click',()=>{
    labbox.classList.toggle('labelboxer')
})


// tratamento carossel one
let valores=0;
// var btn=document.querySelectorAll(".visivel");
let btn_proximo=document.getElementById("btn_next").addEventListener("click",function(){
valores++;
if(valores>6){
    valores=6;
}
    var carossel=document.querySelectorAll(".visivel");
    
    carossel.forEach(slider=>{
        slider.classList.remove("ver")

    })
   
    carossel[valores].classList.add("ver")

})



// var btn=document.querySelectorAll(".visivel");
let voltar=document.getElementById("btn_v").addEventListener("click",function(){
valores--;

if(valores<0){
    valores=0;
}
    var carossel2=document.querySelectorAll(".visivel");
    carossel2.forEach(slider=>{
        slider.classList.remove("ver")

    })
   
    carossel[valores].classList.add("ver")

})



