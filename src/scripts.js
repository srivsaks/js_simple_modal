const openModal1Ele=document.querySelector(".btn1");
const modal1=genModal("1");
modal1.style.display="none";
document.body.appendChild(modal1);
openModal1Ele.addEventListener("click",(e)=>{
const display=modal1.style.display;
if(display==="block"){
modal1.style.display="none";
}else{
modal1.style.display="block";
}
});

function genModal(id){
const overlay=document.createElement("div");
const main=document.createElement("div");
const close=document.createElement("span");
close.textContent="[x]";
overlay.appendChild(main);
const title=document.createElement("div");
title.textContent="Id: "+id;
overlay.classList.add("overlay");
const content=document.createElement("div");
content.textContent="This is My Modal.Its id is "+id;
main.classList.add("main");
main.style.color="blue";
main.style.backgroundColor="red";
close.classList.add("close");
overlay.addEventListener("click",(e)=>{
modal1.style.display="none";
})
close.addEventListener("click",(e)=>{
console.log(e);
modal1.style.display="none";
})
main.appendChild(close);
main.appendChild(title);
main.appendChild(content);
//main.style.display="block";

return overlay;
}