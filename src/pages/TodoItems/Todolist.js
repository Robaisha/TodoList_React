import React from "react";
import { useState } from "react";
import {todoitemsArray}  from "../../mockData/todoItems"
import {TodoItem} from "../../components/TodoItem"

const Todolist = () => {
  const [todoListArray, setTodoListArray] = useState(todoitemsArray);
  const [name, setName] = useState("");
  const [id,setId]=useState(0)
  const [selectedId,setSelectedId]=useState()
  

  const deleteTodo = (id) => {
    const deletedArray = todoListArray.filter((todo) => todo.id !== id);
    setTodoListArray(deletedArray);
  };
  const updateTodo = (updatedName) => {
    const todolist = todoListArray.map((item) => {
      if (selectedId === item.id) {
        return { ...item, name: updatedName};
      }
      return item;
    });
    setTodoListArray(todolist);
    setSelectedId(null)
  };
  const editTodo=(id)=>{
    setSelectedId(id)
  }

  const addTodo = () => {
    setId((prevId)=>prevId + 1);
    const updatedList = [...todoListArray, { id, name }];
    setName("");
    setTodoListArray(updatedList)
  };

  return (
    <div id="FirstDiv">
      <header>Todo list</header>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={addTodo}>Add task</button>
      {todoListArray.map((todo) => {
        return (
          <TodoItem id={todo.id} name={todo.name} editTodo={editTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} selectedItem={selectedId}/>
        );
      })}
    </div>
  );
};

export default Todolist;
