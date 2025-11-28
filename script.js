
function startCandyFall(){
  for(let i=0; i<40; i++){
    let candy = document.createElement("div");
    candy.classList.add("candy");
    candy.innerHTML = "🍬";
    candy.style.left = Math.random() * 100 + "vw";
    candy.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(candy);
    setTimeout(()=>{ candy.remove(); },5000);
  }
}
