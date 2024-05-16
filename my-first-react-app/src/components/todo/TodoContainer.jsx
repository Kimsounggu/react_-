import { useState } from "react";
import TodoFrom from "./TodoFrom";
import TodoList from "./TodoList";
const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "투두 리스트 만들기",
      content: "투두 리스트 과제",
      isDone: true,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const DoneTodos = todos.filter((todo) => todo.isDone);

  return (
    <section>
      <h1 className="title">MyTodoList</h1>
      <TodoFrom setTodos={setTodos} />
      <div>
        <TodoList title="Working..!" todos={workingTodos} setTodos={setTodos} />
        <TodoList title="Done..!" todos={DoneTodos} setTodos={setTodos} />
      </div>
    </section>
  );
};

export default TodoContainer;
