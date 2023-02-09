let hamby = document.getElementById('hamburger');
let sub5 = document.getElementById('sub5');
let sidey = document.getElementsByClassName("sidechick")[0];
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
    activeTheme('/img/AlkelanGreen.png','--hGreen','--hGold','--hGreenLt','--bl','--wh','--hGreen');
}
theme1=()=>{
    highlight(0);
    activeTheme('/img/AlkelanRed.png','--hGold','--hRed','--hGold','--wh','--bl','--hGold');
}
theme2=()=>{
    highlight(1);
    activeTheme('/img/AlkelanGreen.png','--hGreenLt','--hGold','--hGreen','--bl','--wh','--hGreenLt');
}
theme3=()=>{
    highlight(2);
    activeTheme('/img/AlkelanGreen.png','--hGreen','--hRed','--hGreenLt','--wh','--wh','--hGreen');
}
theme4=()=>{
    highlight(3);
    activeTheme('/img/AlkelanGreen.png','--hRed','--hGreen','--hGold','--wh','--wh','--hRed');
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
        evolve.innerText=n;
    }, t);
}
function descend(n){
    setTimeout(() => {
        evolve.style.top='52%';
    }, n);
}

function evolAnima(){
    evolve.style.transition='0.5s';
    ascend('Writing',100);    
    descend(1200);
    ascend('Editing',2400);
    descend(3600);
    ascend('Publishing',4400);
    descend(5600);
    setTimeout(()=>evolAnima(),6000);
}

evolAnima();