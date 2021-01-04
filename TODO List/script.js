let btnClick=document.querySelector(".btn");
let todoInput=document.querySelector("#todo");
let todos=document.querySelector(".todos");

btnClick.addEventListener("click",function(){
    // let li=document.createElement("li");
    // console.log(li);
    let todo=todoInput.value;
    // console.log(btnInput);
    if(todo){
        let newTodo=document.createElement("li");
        let pTag=document.createElement("p");
        pTag.innerHTML=todo;
        let cross=document.createElement("button");
        cross.innerHTML="X";

        cross.addEventListener("click",function(){
            cross.parentElement.remove();
        })

        newTodo.append(pTag);
        newTodo.append(cross);
        todos.append(newTodo);
        todoInput.value="";
    }
})
