import React, { useState } from "react";
import Keyboard from "./components/Keyboard";
import MyText from "./components/MyTextArea";

function App() {
  const [content, setContent] = useState("");

  const toTextArea = (letters) => {
    setContent((prev) => {
      return (prev += letters);
    });
  };

  const handleBackSpace = () => {
    let allContent = content;
    allContent = allContent.slice(0, -1);
    setContent(allContent);
    return content;
  };
  const handleEnter = () => {
    let allContent = content;
    allContent += "\n";
    setContent(allContent);
  };
  const handleSpace = () => {
    let allContent = content;
    allContent += " ";
    setContent(allContent);
  };
  return (
    <div className="App">
      <MyText content={content} />
      <Keyboard
        toTextArea={toTextArea}
        handleBackSpace={handleBackSpace}
        handleEnter={handleEnter}
        handleSpace={handleSpace}
      />
    </div>
  );
}

export default App;
