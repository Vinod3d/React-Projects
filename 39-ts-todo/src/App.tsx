import { AppBar, Button, Container,Stack , TextField, Toolbar, Typography } from "@mui/material"
import TodoItem from "./components/TodoItem"
import { useEffect, useState } from "react";
import { getTodos, saveTodos } from "./utils/features";

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>(getTodos());
  const [title, setTitle] = useState<TodoItemType["title"]>("");

  const completeHandler = (id:TodoItemType["id"]):void=>{
    const updatedTodo = todos.map((i)=>{
      if(i.id === id) i.isCompleted = !i.isCompleted;
      return i;
    })
    setTodos(updatedTodo);
  };

  const deleteHandler = (id:TodoItemType["id"]):void=>{
    const newTodos:TodoItemType[] = todos.filter((i)=>i.id !== id);
    setTodos(newTodos);
  };

  const editHandler = (
    id:TodoItemType["id"],
    newTitle:TodoItemType["title"]):void=>{
    const updatedTodo = todos.map((i)=>{
      if(i.id === id) i.title = newTitle;
      return i;
    })
    setTodos(updatedTodo);
  };

  const submitHandler = ():void => {
    const newTodo:TodoItemType = {
      title,
      isCompleted: false,
      id: String(Math.random() * 1000)
    };

    setTodos((prev)=> [...prev, newTodo])
    setTitle("");
    saveTodos(todos);
  };

  useEffect(()=>{
    saveTodos(todos)
  },[todos])

  return (
    <Container maxWidth="sm" sx={{height: "100vh"}}>
      <AppBar position="static">
        <Toolbar>
          <Typography>Todo App</Typography>
        </Toolbar>
      </AppBar>
      <Stack height={"80%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
        {todos.map((i)=>(
          <TodoItem 
            key={i.id} 
            todo={i} 
            completeHandler={completeHandler}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
        ))}
      </Stack>
      <TextField 
        fullWidth 
        label={"New Task"}
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        onKeyDown={(e)=>{
          if(e.key === "Enter" && title !=="") submitHandler()
        }}
      />
      <Button 
        sx={{
          margin:"1rem 0"
        }}
      fullWidth
      variant="contained"
      onClick={submitHandler}
      disabled={title===""}
      >ADD</Button>
    </Container>
  )
}

export default App
