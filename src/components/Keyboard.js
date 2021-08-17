import React, { useState } from "react";
import "../ui/keyboard.css";
import Key from "./Key";

export default function Keyboard(props) {
  const keyLayout = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "backspace",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "caps",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "enter",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ".",
    "?",
    "space",
  ];
  const [capsLock, setCapsLock] = useState(false);

  const handleCaps = () => {
    setCapsLock(!capsLock);
  };

  return (
    <div className="keyboard">
      <div className="keyboardKeys">
        {keyLayout.map((item, index) => (
          <Key
            val={item}
            key={index}
            capsLock={capsLock}
            handleCaps={handleCaps}
            toTextArea={props.toTextArea}
            handleBackSpace={props.handleBackSpace}
            handleEnter={props.handleEnter}
            handleSpace={props.handleSpace}
          />
        ))}
      </div>
    </div>
  );
}
