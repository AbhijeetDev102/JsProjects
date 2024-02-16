const curser= document.querySelector(".crs");
const bodyelement= document.querySelector("body")
const head = document.querySelector(".head"); 
const image=document.querySelector("img");

bodyelement.addEventListener("mousemove", (mouse)=>{
        curser.style.left=mouse.x+"px";
        curser.style.top=mouse.y+"px";
})

head.addEventListener("mousemove", (mouse1)=>{
        image.style.left=mouse1.x +"px";
        image.style.top=mouse1.y-30+"px";
        image.style.transform="scale(2)";
        curser.style.transform="scale(0)";
})

head.addEventListener("mouseleave", ()=>{
    image.style.transform="scale(0)"
    curser.style.transform="scale(1)";

})
