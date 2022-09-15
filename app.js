const title = document.querySelector('.bigTitle');
const textTitre = "PORSCHE, SET FREE."
let i = 0;

const interva = setInterval(() => {
    title.innerHTML += textTitre[i];
    i++;
    if(i>textTitre.length-1){
        clearInterval(interva);
       
    }
}, 190);

const s1 = document.querySelector('.s1')
const s2 = document.querySelector('.s2')

window.addEventListener('mousemove',(e)=>{
s1.style.left = e.pageX+'px';
s1.style.top = e.pageY+'px';

s2.style.left = e.pageX+'px';
s2.style.top = e.pageY+'px';
});

window.addEventListener('mousedown', (e) => {
    s1.style.transform = "scale(4) translate(-13%, -15%)";
    s2.style.transform = "scale(1) translate(-50%, -50%)";
});

window.addEventListener('mouseup', (e) => {
    s1.style.transform = "scale(0) translate(0%, 0%)";
    s2.style.transform = "scale(1) translate(-50%, -50%)";
});


const contact = document.querySelector('.contact');
const cay = document.querySelector('.cayman');
const pana = document.querySelector('.Panamera');
const the991 = document.querySelector('.the911');
const titres = document.querySelector('.titre')

window.addEventListener('scroll', ()=>{
    if(window.scrollY>150){
        contact.style.transform = "translateY(10px)";
        contact.style.opacity = "1"
    }

    if(scrollY > 1300){
        titres.style.opacity='1';
        titres.style.transform="translateY(0px);"
        cay.style.transform = "translateX(0px)"
        cay.style.transform = "skew(0deg)"
        cay.style.opacity = "1"
    }

    if(scrollY > 1600){
        pana.style.transform = "translateX(0px)"
        pana.style.transform = "skew(0deg)"
        pana.style.opacity = "1"
    }

    if(scrollY > 2000){
        the991.style.transform = "translateX(0px)"
        the991.style.transform = "skew(0deg)"
        the991.style.opacity = "1"
    }
});



