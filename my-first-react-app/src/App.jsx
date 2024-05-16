import { useState } from "react";

const App = () => {
  const [text, setText] = useState([
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

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };
  const handleContentChange = (event) => {
    setNewContent(event.target.value);
  };
  const addText = () => {
    const newText = {
      id: new Date().getTime(),
      title: newTitle,
      content: newContent,
      isDone: false,
    };
    setText([...text, newText]);
  };
  const deleteTextHandler = (id) => {
    const updatedText = text.filter((item) => item.id !== id);
    setText(updatedText);
  };

  return (
    <div>
      <div style={{ backgroundColor: "gainsboro" }}>
        <h1>myTodoList</h1>
        <header className="inputStyle">
          <div>
            제목:
            <input type="text" onChange={handleTitleChange} />
          </div>
          <div>
            내용:
            <input type="text" onChange={handleContentChange} />
          </div>
          <button onClick={addText}>추가하기</button>
        </header>
      </div>
      {text.map((textList) => (
        <Text
          key={textList.id}
          textList={textList}
          deleteTextHandler={() => deleteTextHandler(textList.id)}
        />
      ))}
    </div>
  );
};

export default App;

const Text = ({ textList, deleteTextHandler }) => {
  return (
    <div>
      {textList.title} {textList.content}
      <div>
        <button onClick={deleteTextHandler}>삭제</button>
      </div>
    </div>
  );
};