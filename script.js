
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let backBtn = document.querySelector("#back");
const line = document.getElementById("winning-line");

let turnO=true;//player1,player2
let moveHistory = [];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    line.style.display = "none";
    line.style.width="0";
    line.style.height="5px";
    boxes.forEach(box=>box.classList.remove("o-player", "x-player"));
    moveHistory = [];
}

const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,4,6],[2,5,8],
    [3,4,5],[6,7,8]
]
const winningLinePatterns = {
  "0,1,2": { top: "16.6%", width: "100%" },
  "0,3,6": { left: "16.6%", height: "100%", width: "5px" },
  "0,4,8": { width: "100%", rotate: "45deg" },
  "1,4,7": { left: "49.8%", height: "100%", width: "5px" },
  "2,4,6": { width: "100%", rotate: "-45deg" },
  "2,5,8": { left: "83%", height: "100%", width: "5px"},
  "3,4,5": { top: "49.8%", width: "100%" },
  "6,7,8": { top: "83%", width: "100%" },
};

boxes.forEach((box,index) => {
    box.addEventListener("click",()=>{
        if (box.innerText !== "")
             return;

        if (turnO) {
            box.innerText = "O";
            box.classList.add("o-player");
            box.classList.remove("x-player");
            turnO = false;
        } else {
            box.innerText = "X";
            box.classList.add("x-player");
            box.classList.remove("o-player");
            turnO = true;
        }
        
        box.disabled=true;
        moveHistory.push(index);
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`🎉🎉Congratulations, Winner is ${winner}🎉🎉`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
       let pos1= boxes[pattern[0]].innerText;
       let pos2= boxes[pattern[1]].innerText;
       let pos3= boxes[pattern[2]].innerText;

       if(pos1!="" && pos1==pos2 && pos2==pos3){
            // console.log("winner",pos1);
            drawWinningLine(pattern, pos1); // Show line first
             disableBoxes();
             setTimeout(() => {
                 showWinner(pos1); // Show message after 1.5s
            }, 1500);
            return;
        }
       }
       // If all boxes are filled and no winner
    if ([...boxes].every(box => box.innerText !== "")) {
        setTimeout(() => {
            msg.innerText = "😅 It's a Draw!";
            msgContainer.classList.remove("hide");
        },500);
        disableBoxes();
    }
};
const drawWinningLine=(pattern, winner) =>{
  const key = pattern.join(",");
  const style = winningLinePatterns[key];
  if (style) {
  line.style.display = 'block';
  line.style.backgroundColor = winner === 'X' ? 'red' : 'blue';
  line.style.top = style.top || "auto";
  line.style.left = style.left || "auto";
  line.style.width = style.width || "5px";
  line.style.height = style.height || "5px";
  line.style.transform = `rotate(${style.rotate})`;
  }
}


backBtn.addEventListener("click", () => {
    if (moveHistory.length === 0) return;

    let lastIndex = moveHistory.pop();
    boxes[lastIndex].innerText = "";
    boxes[lastIndex].disabled = false;

    turnO = !turnO; // switch turn back
});
newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
document.querySelector("#new-game").addEventListener("click", resetGame);
