console.log("Welcome to Tic Tac Toe")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("win.wav")
let turn ="X"
let isgameover = false;

const changeTurn = ()=>{
    return turn ==="X"?"0":"X"
}

const checkwin=()=>{
    
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5],
        [3, 4, 5, 5],
        [6, 7, 8, 5],
        [0, 3, 6, -5],
        [1, 4, 7, 5],
        [2, 5, 8, 15],
        [0, 4, 8, 5],
        [2, 4, 6, 5],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            gameover.play();
        }
    })



}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext =element.querySelector(".boxtext");
    element.addEventListener('click', ()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioturn.play();
            checkwin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})