import React from "react";

type Props = {
  todos: string[];
  onClickBack: (index: number) => void;
};

export const CompleteList = ({ todos, onClickBack }: Props) => {
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-title">{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
