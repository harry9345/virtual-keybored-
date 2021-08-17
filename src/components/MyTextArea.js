import React, { useState } from "react";

export default function MyTextErea(props) {
  const [content, setContent] = useState();

  const print = (e) => {
    setContent(e.target.value);
    console.log(e.target.value);
    console.log(content);
  };

  return (
    <textarea
      className="textArea"
      rows="20"
      cols="150"
      value={props.content}
      placeholder="Write anything !!"
      onChange={(e) => print(e)}
    >
      {props.content}
    </textarea>
  );
}
