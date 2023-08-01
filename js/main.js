let xo = document.querySelector(".x-o");
let restart = document.getElementById("restart");
let info = document.querySelector(".The_Message");
let box = document.querySelectorAll(".box");
// restart
restart.addEventListener("click",(e)=>{
    location.reload();
})
console.log(box);
// turn
let playerTurn = "X";
// list of boxes
let boxes=[];
// Turn function
function turnAl(box){ 
    if(playerTurn === "X" && box.innerHTML == ""){
        box.innerHTML = "X";
        xo.innerHTML = "O";
        playerTurn = "O";
    }else if(playerTurn === "O" && box.innerHTML == ""){
        box.innerHTML = "O";
        xo.innerHTML = "X";
        playerTurn = "X";
    }
    game();
};
// O wins function styling
function O_win(){
    info.innerHTML = "O wins the game";
    info.style.color = "#00d853";
    info.style.textAlign = "center";
    info.style.fontSize = "32px";
    info.style.padding = "10px 0";
}
// X wins function styling
function X_win(){
    info.innerHTML = "X wins the game";
    info.style.color = "#00d853";
    info.style.textAlign = "center";
    info.style.fontSize = "32px";
    info.style.padding = "10px 0";
}
// changing background win function
function change(a,b,c){
    let bgc_a = document.getElementById("btn" + a);
    let bgc_b = document.getElementById("btn" + b);
    let bgc_c = document.getElementById("btn" + c);
    bgc_a.style.backgroundColor = "#fff";
    bgc_a.style.color = "#1a1319";
    bgc_b.style.backgroundColor = "#fff";
    bgc_b.style.color = "#1a1319";
    bgc_c.style.backgroundColor = "#fff";
    bgc_c.style.color = "#1a1319";
}
// Logique function
function game(){
    for(let i=1;i<10;i++){
        let content = document.getElementById("btn" + i).innerHTML;
        boxes[i] = content;
    }
    if(boxes[1] == boxes[2] && 
       boxes[2] == boxes[3] && 
       boxes[1] !== ""){
        if(playerTurn == "X"){
            O_win();
            change(1,2,3);
        }else{
            X_win();
            change(1,2,3);
        }
    }
    if(boxes[4] == boxes[5] && 
       boxes[5] == boxes[6] && 
       boxes[5] !== ""){
        // console.log("win");
        if(playerTurn == "X"){
            O_win();
            change(4,5,6);
        }else{
            X_win();
            change(4,5,6);
        }
    }
    if(boxes[7] == boxes[8] && 
       boxes[8] == boxes[9] && 
       boxes[7] !== ""){
        // console.log("win");
        if(playerTurn == "X"){
            O_win();
            change(7,8,9);
        }else{
            X_win();
            change(7,8,9);
        }
    }
    if(boxes[1] == boxes[5] && 
       boxes[5] == boxes[9] && 
       boxes[1] !== ""){
        // console.log("win");
        if(playerTurn == "X"){
            O_win();
            change(1,5,9);
        }else{
            X_win();
            change(1,5,9);
        }
    }
    if(boxes[3] == boxes[5] && 
       boxes[5] == boxes[7] && 
       boxes[3] !== ""){
        // console.log("win");
        if(playerTurn == "X"){
            O_win();
            change(3,5,7);
        }else{
            X_win();
            change(3,5,7);
        }
    }
    if(boxes[1] == boxes[4] && 
       boxes[4] == boxes[7] && 
       boxes[1] !== ""){
        // console.log("win");
        if(playerTurn == "X"){
            O_win();
            change(1,4,7);
        }else{
            X_win();
            change(1,4,7);
        }
    }
    if(boxes[2] == boxes[5] && 
       boxes[5] == boxes[8] && 
       boxes[2] !== ""){
        // console.log("win");
        if(playerTurn == "X"){
            O_win();
            change(2,5,8);
        }else{
            X_win();
            change(2,5,8);
        }
    }
    if(boxes[3] == boxes[6] && 
       boxes[6] == boxes[9] && 
       boxes[9] !== ""){
        // console.log("win");
        if(playerTurn == "X"){
            O_win();
            change(3,6,9);
        }else{
            X_win();   
            change(3,6,9);
        }   
    }
};