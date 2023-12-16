const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
//document대신 
const todoList = document.getElementById("todo-list");
//form의 submit event를 막고싶음
const TODOS_KEY = "todos"

let toDos = [];
//string이 아니라 array로 갖고 오고 싶음 => JSON.stringify

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
const li = event.target.parentElement;
//button has parent.
li.remove();
toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
saveToDos();
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText="✔";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); 
    li.appendChild(button);
    span.innerText = newTodo.text;
    todoList.appendChild(li);
}
//item을 지우는 것,(todo를 지우는 button을 만들거임)
//어떤 list를 지울 것인가를 선택하지 못함. which button...?
//item을 저장하는 것을 하고 싶음(새로고침해도 남아있게)

function handleToDoSubmit(event){
event.preventDefault();
const newTodo = todoInput.value;
//새로운 변수를 저장함
todoInput.value = "";
const newTodoObj = {
  text: newTodo,
  id: Date.now(),
};
toDos.push(newTodoObj);
paintToDo(newTodoObj);
saveToDos();

}
todoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  // parsedToDos.forEach((item) => console.log("this is the turn of ", item));
    // function sayhello(item){
//   console.log("this is the turn of " + item);
// 위 식이랑 둘 다 똑같이 사용 가능
  };

//what kinds of items do we have to delete?