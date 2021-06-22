import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteList } from "./components/CompleteTodos";
import "./styles.css";

export const App = () => {
  console.log("App start");
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;

    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    const completeTodo = newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, ...completeTodo];
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    const backedTodo = newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
    const newIncompleteTodos = [...incompleteTodos, ...backedTodo];
    setIncompleteTodos(newIncompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるTODOは5件までです。</p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteList todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
