const aboutBtn = document.querySelector('.about-btn');
const closeBtn = document.querySelector('.close-btn');

const overlay = document.querySelector('.overlay');
const card = document.querySelector('.card');


aboutBtn.addEventListener('click', ()=>{

    card.style.cssText = 'top:50%; opacity:1; transform: translateY(-50%)' 
    overlay.style.background = 'rgba(0,0,0,0.9)';
});

closeBtn.addEventListener('click', ()=>{
    card.style.cssText='top:-200%; opacity:0';
    overlay.style.background = 'rgba(0,0,0,0.4)';
    
})