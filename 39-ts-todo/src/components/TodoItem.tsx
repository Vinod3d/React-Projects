import { Button, Checkbox, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";


type PropsType = {
  todo : TodoItemType;
  deleteHandler:(id:TodoItemType["id"])=>void;
  completeHandler:(id:TodoItemType["id"])=>void;
  editHandler:(id:TodoItemType["id"], newTitle:TodoItemType["title"])=>void
};

const TodoItem = ({todo, completeHandler, deleteHandler, editHandler}: PropsType) => {
  const [editActive, setEditActive] = useState<boolean>(false)
  const [editValue, setEditValue] = useState<string>(todo.title)

  return (
   <Paper
      sx={{
        padding: "1rem"
      }}
   >
    <Stack direction={"row"} alignItems={"center"}>
      {editActive? <TextField 
      value={editValue} 
      onChange={(e)=>setEditValue(e.target.value)}
      onKeyDown={(e)=> {
        if (e.key === "Enter" && editValue !=="") {
          editHandler(todo.id, editValue);
          setEditActive(false)
        }
      }}
      /> : (
      <Typography marginRight={"auto"}>{todo.title}</Typography>
      )}
      <Checkbox 
        checked={todo.isCompleted} 
        onChange={()=>completeHandler(todo.id)}
      />
      <Button 
        color="secondary" 
        sx={{fontWeight:"600"}}
        onClick={()=>setEditActive(prev=>!prev)}
      >Edit</Button>
      <Button 
        sx={{fontWeight:"600"}}
        onClick={()=>deleteHandler(todo.id)}
      >Delete</Button>
    </Stack>
   </Paper>
  )
}

export default TodoItem