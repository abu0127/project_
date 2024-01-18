













const telbut = document.getElementById('tel');
const tel_list = document.getElementById('tel_list');

    telbut.addEventListener('click',()=>{
         tel_list.classList.remove("hidden")
         tel_list.style.transition ="all 1s"
    })

const _close = document.getElementById('_close'); 

    _close.addEventListener('click',()=>{
        tel_list.classList.add("hidden")
    })

const navbor = document.getElementById('navbor1');
const check1 = document.getElementById('check1');
const check = document.getElementById('check')

    check.addEventListener('click',()=>{
        navbor.classList.remove("hidden2")
        check.classList.add("hidden2")
        check1.classList.remove("hidden2")
    })
    check1.addEventListener('click',()=>{
        navbor.classList.add("hidden2")
        check.classList.remove("hidden2")
        check1.classList.add("hidden2")
    })

const darck = document.getElementById('darck');
const sun = document.getElementById('sun');
const moons = document.getElementById('moons');

    darck.addEventListener('click',()=>{
        moons.classList.add("hiddenall")
        sun.classList.remove("hiddenall")
    })
const sun_but = document.getElementById('sun_but');

    sun_but.addEventListener('click',()=>{
        moons.classList.remove("hiddenall")
        sun.classList.add("hiddenall")
})

darck.addEventListener('click',()=>{
    body.style.backgroundColor ="#7209b7"
    body.style.transition ="all 1s"
    })

const body = document.getElementById('body') 
   
    sun_but.addEventListener('click',()=>{
        body.style.backgroundColor ="white"
        body.style.transition ="all 1s"
    
    })

//scroii animation
const box_1 = document.querySelectorAll(".box-child-1");
const box_img_1 = document.getElementById("box_img_1");
const boxes = document.querySelectorAll('.box_')

window.addEventListener("scroll",checkboxs);

checkboxs()
        
  function checkboxs(){
    const boxBottom = window.innerHeight /15*4;

    boxes.forEach((box)=>{
        const topbox=box.getBoundingClientRect().top;

        if(topbox<boxBottom){
            box.classList.add("animation");
            
            
        }else{
            box.classList.remove("animation");
        }
    })
    
  };






const textes = document.querySelectorAll('.box_text');

  window.addEventListener("scroll",checktext);

  checktext()
        
  function checktext(){ 
    const textbottom = window.innerHeight /15*4;

    textes.forEach((text)=>{
        const toptext=text.getBoundingClientRect().top;

        if(toptext<textbottom){
            text.classList.add(".text_animation");
        }else{
            text.classList.remove(".text_animation");
        }
    })


  }