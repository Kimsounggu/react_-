const TodoFrom = ({ setTodos }) => {
  const onsubmit = (e) => {
    e.preventDefault();

    const formDate = new FormData(e.target);
    const title = formDate.get("title");
    const content = formDate.get("content");

    if (!title.trim() || !content.trim())
      return alert("제목과 내용을 입력해주세요.");

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };
    setTodos((prevTodos) => [nextTodo, ...prevTodos]);

    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={onsubmit}>
        <input type="text" placeholder="제목" name="title" />
        <input type="text" placeholder="내용" name="content" />

        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default TodoFrom;
