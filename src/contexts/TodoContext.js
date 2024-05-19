import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos : [
        {id : 1 , 
         todo : "Message here",
         checked : false}
    ],
    addTodo : (todo) => {},
    updateTodo : (todo , id) => {},
    deleteTodo : (id) => {},
    toggleChecked : (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodoContext = () => {
  return useContext(TodoContext)
}