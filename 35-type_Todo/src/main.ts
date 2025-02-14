import './style.css'

interface Todo {
    title:string;
    isCompleted:boolean;
    readonly id: string;
}

const todos:Todo[] = [];
const todosContainer = document.querySelector(".todoContainer") as HTMLDivElement;
const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;
const myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.onsubmit = (e:SubmitEvent)=>{
    e.preventDefault();

    const todo:Todo = {
        title: todoInput.value,
        isCompleted: false,
        id: Math.random().toString(36).substr(2, 9)
    }

    console.log(todo)

    todos.push(todo);
    todoInput.value = "";
    renderTodos(todos);
};

const generateTodoItem =(title:string, isCompleted:boolean, id:string)=>{
    const todoItem:HTMLDivElement = document.createElement("div");
    todoItem.classList.add("todoItem");
    const checkBox:HTMLInputElement = document.createElement("input")
    checkBox.type = "checkbox";
    checkBox.classList.add("isCompleted");
    checkBox.checked = isCompleted;
    checkBox.onchange = ()=>{
        todos.find((item)=>{
            if(item.id === id){
                item.isCompleted = checkBox.checked;
            }
        })
        paragraph.className = checkBox.checked ? "textCut" : ""
    }
    // Creating p for title
    const paragraph: HTMLParagraphElement = document.createElement("p");
    paragraph.textContent = title;
    paragraph.className = isCompleted ? "textCur" : ""
    // Creating button
    const btn:HTMLButtonElement = document.createElement("button");
    btn.textContent = "X";
    btn.classList.add("deleteBtn");
    btn.onclick = ()=>{
        deleteTodo(id);
    };
    // Appending All to TodoItem
    todoItem.append(checkBox, paragraph, btn);
    todosContainer.append(todoItem);
}

const deleteTodo = (id:string)=>{
const idx = todos.findIndex((item)=>item.id === id);
todos.splice(idx, 1);
renderTodos(todos);
};

const renderTodos = (todos:Todo[])=>{
    todosContainer.innerHTML = "";
    todos.forEach((item)=>{
        generateTodoItem(item.title, item.isCompleted, item.id);
    })
}
