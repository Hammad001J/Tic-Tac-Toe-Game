let boxes = document.querySelectorAll('.box');
let msgContainer = document.querySelector('.msg-container');
let newbtn = document.querySelector('#new-game');
let resetbtn = document.querySelector('#reset-game');
let msg = document.querySelector('#msg');
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];
let turnO = true;
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner ();
    });
});
const checkwinner = () => {
    for(pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val !="" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                msg.innerText = `Congratulations! Player ${pos1Val} wins!`;
                msgContainer.classList.remove('hide');
                boxes.forEach((box) => {
                    box.disabled = true;
                });
            }
        }
    }
};
newbtn.addEventListener('click', () =>{
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msg.innerText = "";
    msgContainer.classList.add('hide');
    turnO = true;
});
resetbtn.addEventListener('click', () =>{
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msg.innerText = "";
    msgContainer.classList.add('hide');
    turnO = true;
});
