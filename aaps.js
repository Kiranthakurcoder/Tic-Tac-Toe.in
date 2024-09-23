let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgame=document.querySelector("#new-btn");
let msgcon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;

const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const restgame= () =>{
    let turnO = true;
    anabeldboxes()
    msgcon.classList.add("hide");
}



const anabeldboxes= () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("this was clicked")
        if(turnO){
            box.innerText="O";
            box.style.color="red"
            turnO=false;
        }else{
            box.innerText="X";
            box.style.color="blue"

            turnO=true;
        }
        box.disabled=true;

        checkwinner()
    })

})



const showwinnwe=(winner) =>{
    msg.innerText=`congratulation winner is ${winner}`;
    msgcon.classList.remove("hide");
    disabledboxes()
}

const checkwinner =() =>{
    for(let pattern of winpatterns){
        // console.log(pattern[0],pattern[1],pattern[2])

        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // )
        let pos1 =  boxes[pattern[0]].innerText
        let pos2 =  boxes[pattern[1]].innerText
        let pos3 =  boxes[pattern[2]].innerText

        if(pos1 != "" && pos2 != "" && pos3 !=""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winnner")
                showwinnwe(pos1)
            }
        }

    }
    
}


const disabledboxes= () => {
    for(let box of boxes){
        box.disabled=true;
    }
   }

   newgame.addEventListener("click", restgame)
   resetbtn.addEventListener("click", restgame)

