const btnTodo     = document.querySelector("#todo-btn")
const btnProgress = document.querySelector("#progress-btn")
const btnDone     = document.querySelector("#done-btn")

const progsBoard= document.querySelector(".progress-board")
const todoBoard = document.querySelector(".todo-board")
const doneBoard = document.querySelector(".done-board")
const cards     = document.querySelectorAll(".card1");

const left   = document.querySelector("#left");
const center = document.querySelector("#center");
const right  = document.querySelector("#right");



function allowDrop(e) {
    e.preventDefault();
  }
  
  function drag(e) {
    e.dataTransfer.setData("number", e.target.id);
  }
  
  function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("number");
    e.target.appendChild(document.getElementById(data));
  }

let progNum = 5;
let todoNum = 5;
let doneNum = 5;
let idNum   = 1;

btnProgress.addEventListener("click" , ()=>{
    const cardProgress = document.createElement("div")
    cardProgress.classList = "card"
    cardProgress.id = `drag${idNum}`
    cardProgress.setAttribute("draggable" , "true")
    cardProgress.setAttribute("ondragstart" , "drag(event)")
    progsBoard.  appendChild(cardProgress);
    cardProgress.innerText = `Progress #${progNum}`
    progNum += 1
    idNum   += 1
})


btnTodo.addEventListener("click" , ()=>{
    const cardTodo = document.createElement("div")
    cardTodo.classList = "card"
    cardTodo.id = `drag${idNum}`
    cardTodo. setAttribute("draggable" , "true")
    cardTodo. setAttribute("ondragstart" , "drag(event)" )
    todoBoard.appendChild(cardTodo);
    cardTodo.innerText = `Todo #${todoNum}`;
    todoNum += 1
    idNum   += 1
})


btnDone.addEventListener("click" , ()=>{
    const cardDone = document.createElement("div")
    cardDone.classList = "card"
    cardDone.id = `drag${idNum}`
    cardDone.setAttribute("draggable" , "true")
    cardDone.setAttribute("ondragstart" , "drag(event)")
    doneBoard.appendChild(cardDone);
    cardDone.innerText = `done #${doneNum}`;
    doneNum += 1;
    idNum   += 1;
})




for (let card1 of cards) {
  card1.addEventListener("dragstart", function (e) {
    let selected = e.target;

    right.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    right.addEventListener("drop", function (e) {
      right.appendChild(selected);
      selected = null;
    });

    center.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    center.addEventListener("drop", function (e) {
      center.appendChild(selected);
      selected = null;
    });

    left.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    left.addEventListener("drop", function (e) {
      left.appendChild(selected);
      selected = null;
    });
  });
}










