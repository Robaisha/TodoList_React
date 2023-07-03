import React from "react";
import { useState } from "react";

const Todolist = () => {
  const [todoListArray, setTodoListArray] = useState([
    { id: 0, name: "watch movie" },
    { id: 1, name: "sing" },
    { id: 2, name: "have food" },
    { id: 3, name: "clean room" },
  ]);
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const addTodo = () => {
    setTodoListArray(() => {
      setId(id + 1);
      const updatedList = [...todoListArray, { id, name }];
      setName("");
      console.log(updatedList);
      return updatedList;
    });
  };
  const deleteTodo = (i) => {
    setTodoListArray(() => {
      let deletedArray = todoListArray.filter((todo, id) => id !== i);
      console.log(deletedArray);
      return deletedArray;
    });
  };
  const updateTodo = (i) => {
    setTodoListArray(() => {
      let todolist = todoListArray.map((item, index) => {
        if (index === i) {
          return { ...item, name: "new name" };
        }
        return item;
      });
      console.log(todolist, "Updated Array");
      return todolist;
      
    });
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
      {todoListArray.map((todo, i) => {
        return (
          <>
            <p key={i}>
              <div>{todo.name}</div>
              <button
                onClick={() => {
                  deleteTodo(i);
                }}
              >
                Delete task
              </button>
              <button
                onClick={() => {
                  updateTodo(i);
                }}
              >
                Update task
              </button>
            </p>
          </>
        );
      })}
    </div>
  );
};

export default Todolist;
