const $=q=>document.querySelector(q),choices=[...document.querySelectorAll(".choice")],
msg=$("#msg"),userEl=$("#user-score"),compEl=$("#comp-score"),beats={stone:"scissors",paper:"stone",scissors:"paper"},
names=Object.keys(beats);
let user=0,comp=0,streak=0,high=+localStorage.highScore||0,locked=false;

$(".container").insertAdjacentHTML("beforeend",
`<div class="stats"><span id="streak">Winning Streak: 0</span><span id="high">High Score: ${high}</span></div>`);

const say=(text,type="ready")=>(msg.textContent=text,msg.dataset.type=type);
const stat=()=>{$("#streak").textContent=`Winning Streak: ${streak}`;$("#high").textContent=`High Score: ${high}`};
const pop=el=>{el.classList.add("pop");setTimeout(()=>el.classList.remove("pop"),320)};
const confetti=()=>{for(let i=0;i<22;i++){let c=document.createElement("i");
    c.className="confetti";c.style.left=Math.random()*100+"vw";
    c.style.background=`hsl(${Math.random()*360},80%,55%)`;c.style.animationDuration=1.7+Math.random()*1.4+"s";
    document.body.appendChild(c);setTimeout(()=>c.remove(),3200)}};

function play(choice){
    if(locked)return; locked=true;
    choices.forEach(card=>card.classList.toggle("selected",card.id===choice));
    say("Computer is choosing...","wait");
    setTimeout(()=>{
        const cpu=names[Math.random()*3|0],win=beats[choice]===cpu;
        if(choice===cpu) say(`Draw. Both chose ${choice}.`,"draw");
        else if(win){
            user++;streak++;high=Math.max(high,user);localStorage.highScore=high;
            userEl.textContent=user;pop(userEl);confetti();say(`You win. ${choice} beats ${cpu}.`,"win");
        }else{
            comp++;streak=0;compEl.textContent=comp;pop(compEl);say(`Computer wins. ${cpu} beats ${choice}.`,"lose");
        }
        stat();locked=false;
    },450);
}

choices.forEach(card=>card.onclick=()=>play(card.id));
document.onkeydown=e=>({s:"stone",p:"paper",x:"scissors"}[e.key.toLowerCase()]&&play({s:"stone",p:"paper",x:"scissors"}[e.key.toLowerCase()]));
$("#reset").onclick=()=>{
    user=comp=streak=0;userEl.textContent=compEl.textContent="0";
    choices.forEach(card=>card.classList.remove("selected"));say("Choose your move.");stat();
};
say("Choose Stone, Paper, or Scissors.");
