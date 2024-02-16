const box1=document.querySelector(".box1");
const box2=document.querySelector(".box2");
const box3=document.querySelector(".box3");
const box4=document.querySelector(".box4");
const box5=document.querySelector(".box5");
const box6=document.querySelector(".box6");
const box7=document.querySelector(".box7");
const box8=document.querySelector(".box8");
const box9=document.querySelector(".box9");

const winner=document.querySelector(".container h1");

let box1move=0;
let box2move=0;
let box3move=0;
let box4move=0;
let box5move=0;
let box6move=0;
let box7move=0;
let box8move=0;
let box9move=0;

var number_of_move=1;

function win(boxname){
    console.log(boxname);
    if(
        (box1move==2 && box2move==2 && box3move==2)||
        (box4move==2 && box5move==2 && box6move==2)||
        (box7move==2 && box8move==2 && box9move==2)||
        (box1move==2 && box5move==2 && box9move==2)||
        (box7move==2 && box5move==2 && box3move==2)||
        (box1move==2 && box4move==2 && box7move==2)||
        (box2move==2 && box5move==2 && box8move==2)||
        (box3move==2 && box6move==2 && box9move==2)
        ){
            winner.innerHTML="Winner: Player2";
            box1move=3;box2move=3;box3move=3;box4move=3;box5move=3;box6move=3;box7move=3;box8move=3;box9move=3;
    }
    else if (
        (box1move==1 && box2move==1 && box3move==1)||
        (box4move==1 && box5move==1 && box6move==1)||
        (box7move==1 && box8move==1 && box9move==1)||
        (box1move==1 && box5move==1 && box9move==1)||
        (box7move==1 && box5move==1 && box3move==1)||
        (box1move==1 && box4move==1 && box7move==1)||
        (box2move==1 && box5move==1 && box8move==1)||
        (box3move==1 && box6move==1 && box9move==1)
    ) {
        winner.innerHTML="Winner: Player1";
            box1move=3;box2move=3;box3move=3;box4move=3;box5move=3;box6move=3;box7move=3;box8move=3;box9move=3;
    }
}

box1.addEventListener("click", ()=>{
    if(box1move==0){
        if(number_of_move%2==0){
            number_of_move++;
            box1move=2;
            const image=document.querySelector(".box1 .circle");
            image.style.opacity=10;
        }
        else{
            number_of_move++;
            box1move=1;
            const image=document.querySelector(".box1 .cross");
            image.style.opacity=10;
        }
    }
            win(box1move);
})
box2.addEventListener("click", ()=>{
    if(box2move==0){
        if(number_of_move%2==0){
            number_of_move++;
            box2move=2;
            const image=document.querySelector(".box2 .circle");
            image.style.opacity=10;
        }
        else{
            number_of_move++;
            box2move=1;
            const image=document.querySelector(".box2 .cross");
            image.style.opacity=10;
        }
    }
    win(box2move);
})
box3.addEventListener("click", ()=>{
    if(box3move==0){
        if(number_of_move%2==0){
            number_of_move++;
            box3move=2;
            const image=document.querySelector(".box3 .circle");
            image.style.opacity=10;
        }
        else{
            number_of_move++;
            box3move=1;
            const image=document.querySelector(".box3 .cross");
            image.style.opacity=10;
        }
    }
    win(box3move);
})
box4.addEventListener("click", ()=>{
    if(box4move==0){
        if(number_of_move%2==0){
            number_of_move++;
            box4move=2;
            const image=document.querySelector(".box4 .circle");
            image.style.opacity=10;
        }
        else{
            number_of_move++;
            box4move=1;
            const image=document.querySelector(".box4 .cross");
            image.style.opacity=10;
        }
    }
    win(box4move);
})
box5.addEventListener("click", ()=>{
    if(box5move==0){
        if(number_of_move%2==0){
            number_of_move++;
            box5move=2;
            const image=document.querySelector(".box5 .circle");
            image.style.opacity=10;
        }
        else{
            number_of_move++;
            box5move=1;
            const image=document.querySelector(".box5 .cross");
            image.style.opacity=10;
        }
    }
    win(box5move);
})
box6.addEventListener("click", ()=>{
    if(box6move==0){
        if(number_of_move%2==0){
            number_of_move++;
            box6move=2;
            const image=document.querySelector(".box6 .circle");
            image.style.opacity=10;
        }
        else{
            number_of_move++;
            box6move=1;
            const image=document.querySelector(".box6 .cross");
            image.style.opacity=10;
        }
    }
    win(box6move);
})
box7.addEventListener("click", ()=>{
    if(box7move==0){
        if(number_of_move%2==0){
            number_of_move++;
            box7move=2;
            const image=document.querySelector(".box7 .circle");
            image.style.opacity=10;
        }
        else{
            number_of_move++;
            box7move=1;
            const image=document.querySelector(".box7 .cross");
            image.style.opacity=10;
        }
    }
    win(box7move);
})
box8.addEventListener("click", ()=>{
    if(box8move==0){
        if(number_of_move%2==0){
            number_of_move++;
            box8move=2;
            const image=document.querySelector(".box8 .circle");
            image.style.opacity=10;
        }
        else{
            number_of_move++;
            box8move=1;
            const image=document.querySelector(".box8 .cross");
            image.style.opacity=10;
        }
    }
        win(box8move);
})
box9.addEventListener("click", ()=>{
    if(box9move==0){
        if(number_of_move%2==0){
            number_of_move++;
            box9move=2;
            const image=document.querySelector(".box9 .circle");
            image.style.opacity=10;
        }
        else{
            number_of_move++;
            box9move=1;
            const image=document.querySelector(".box9 .cross");
            image.style.opacity=10;
        }
    }
    win(box9move);
})



