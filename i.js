let hamby = document.getElementById('hamburger');
let sub5 = document.getElementById('sub5');
let sidey = document.getElementsByClassName("sidechick")[0];
let logo = document.getElementsByClassName("logo")[0];
let themebox = document.getElementsByClassName("theme")[0];
let themeOne = document.getElementById("themeOne");
let themeTwo = document.getElementById("themeTwo");
let themeThree = document.getElementById("themeThree");
let themeFour = document.getElementById("themeFour");
let themeDone = document.getElementById("themeDone");
let themeDef = document.getElementById("themeDefault");
let alk = document.getElementById('alk');


hamby.addEventListener("click", openMenu);
function openMenu(){
    this.classList.toggle('flip');
    sidey.classList.toggle('unfold');
};
function enableTheme(){
    themebox.style.display='block';
    setTimeout(() => {
       themebox.style.opacity='1'; 
    }, 300);
}
function disableTheme(){
    themebox.style.opacity='0';
    setTimeout(() => {
        themebox.style.display='none';
     }, 1000);}

sub5.addEventListener("click",enableTheme);
themeDone.addEventListener("click", disableTheme);


let hero=document.getElementsByClassName('hero')[0];
let homeC=document.getElementsByClassName('homeC')[0];
let side=document.getElementsByClassName('sidechick')[0];
let end=document.getElementsByClassName('end')[0];
let middle=document.getElementsByClassName('middle')[0];
let thmm=document.getElementsByClassName('thmm');


themeDefault=()=>{
    highlight(4);
    activeTheme('/img/AlkelanGreen.png','--hGreen','--alkGold','--hGreenLt','--bl','--wh','--hGreen');
}
theme1=()=>{
    highlight(0);
    activeTheme('/img/AlkelanRed.png','--alkGold','--hRed','--alkGreen','--wh','--bl','--alkGold');
}
theme2=()=>{
    highlight(1);
    activeTheme('/img/AlkelanGreen.png','--hGreenLt','--alkGold','--hGreen','--bl','--wh','--hGreenLt');
}
theme3=()=>{
    highlight(2);
    activeTheme('/img/AlkelanGreen.png','--hGreen','--hRed','--hGreenLt','--wh','--wh','--hGreen');
}
theme4=()=>{
    highlight(3);
    activeTheme('/img/AlkelanGreen.png','--hRed','--hGreen','--alkGreen','--wh','--wh','--hRed');
}

function highlight(n){
    for(i=0;i<thmm.length;i++){
        thmm[i].style.backgroundColor='#000';
        thmm[i].style.color='#fff';
        thmm[n].style.backgroundColor='yellow';
        thmm[n].style.color='#000';
    }
}

function setCol(y,b){
    y.style.color=getComputedStyle(document.documentElement).getPropertyValue(b);
}

function setProps(x,a){
    x.style.background=getComputedStyle(document.documentElement).getPropertyValue(a);
}

function activeTheme(pp,he,sd,en,sdclr,dbclr,hcclr){
    alk.setAttribute('src',pp);
    setProps(hero,he);
    setProps(side,sd);
    setProps(end,en);
    setCol(side,sdclr);
    setCol(hero,dbclr);
    setProps(homeC,hcclr);
}

themeOne.addEventListener("click",theme1);
themeTwo.addEventListener("click",theme2);
themeThree.addEventListener("click",theme3);
themeFour.addEventListener("click",theme4);
themeDef.addEventListener("click",themeDefault);

let evolve = document.getElementsByClassName('evolveText')[0];

function ascend(n,t){
    setTimeout(() => {
        evolve.style.top='0%';
        evolve.innerHTML=n;
    }, t);
}
function descend(n){
    setTimeout(() => {
        evolve.style.top='60%';
    }, n);
}

function evolAnima(){
    evolve.style.transition='0.5s';
    ascend('African',100);    
    descend(1200);
    ascend('Myth',2400);
    descend(3600);
    ascend('Fantasy',4400);
    descend(5600);
    ascend('Folktales',6400);
    descend(7600);
    ascend('Writing',8400);
    descend(9600);
    ascend('Culture',10800);
    descend(12000);
    setTimeout(()=>evolAnima(),12500);
}

evolAnima();

reload = ()=> window.location.replace("/");
alk.addEventListener("click",reload);

const scListen = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        const fonef=entry.target.querySelector('.fonef');
        const ftwof=entry.target.querySelector('.ftwof');
        const fthreef=entry.target.querySelector('.fthreef');
        const ffourf=entry.target.querySelector('.ffourf');

        if (entry.isIntersecting){
            fonef.classList.add('fonefAnim');
            ftwof.classList.add('fonefAnim2');
            fthreef.classList.add('fonefAnim3');
            ffourf.classList.add('fonefAnim4');
            return;
        }
        fonef.classList.remove('fonefAnim');
        ftwof.classList.remove('fonefAnim2');
        fthreef.classList.remove('fonefAnim3');
        ffourf.classList.remove('fonefAnim4');
    });
});

scListen.observe(document.querySelector('.features'));