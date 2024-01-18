const navbor = document.getElementById('navbor1');
const check_clos = document.getElementById('check_clos');
const menu = document.getElementById('menu')

menu.addEventListener('click',()=>{
        navbor.classList.remove("hidden2")
        menu.classList.add("hidden2")
        check_clos.classList.remove("hidden2")
    })
    check_clos.addEventListener('click',()=>{
        navbor.classList.add("hidden2")
        menu.classList.remove("hidden2")
        check_clos.classList.add("hidden2")
    })

const darck2 = document.getElementById('darck2');
const sun2 = document.getElementById('sun2');
const moons2 = document.getElementById('moons2');

    darck2.addEventListener('click',()=>{
        moons2.classList.add("hiddenall")
        sun2.classList.remove("hiddenall")
    })
const sun_but2 = document.getElementById('sun_but2');

    sun_but2.addEventListener('click',()=>{
        moons2.classList.remove("hiddenall")
        sun2.classList.add("hiddenall")
})

darck2.addEventListener('click',()=>{
    body2.style.backgroundColor ="#7209b7"
    body2.style.transition ="all 1s"
    })

const body2 = document.getElementById('body2') 
   
    sun_but2.addEventListener('click',()=>{
        body2.style.backgroundColor ="white"
        body2.style.transition ="all 1s"
    
    })