import { useState } from "react";
const TodoItem = (props) => {
  
  let {
    selectedItem,
    id,
    name,
    deleteTodo,
    editTodo,
    updateTodo
  } = props;
  const [updatedName,setUpdatedName]=useState(name)
  return (
    <div>
      <p key={id}>
        {selectedItem && selectedItem == id ? (
          <>
            <input
              onChange={(e) =>
                setUpdatedName(e.target.value)
              }
              value={updatedName}
            />
            <button
              onClick={() => {
                updateTodo(updatedName);

              }}
            >
              Update task
            </button>
          </>
        ) : (
          <>
            <div>{name}</div>
            <button
              onClick={() => {
                deleteTodo(id);
              }}
            >
              Delete task
            </button>
            <button
              onClick={() => {
                editTodo(id);
              }}
            >
              Edit task
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default TodoItem;
