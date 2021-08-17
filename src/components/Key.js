import React from "react";

export default function Key(props) {
  let char = {
    value: props.val,
  };

  let checkBtn;
  switch (char.value) {
    case "space":
      checkBtn = (
        <>
          <button
            className="keyboard__key keyboard__key--extraWide  "
            onClick={() => props.handleSpace()}
          ></button>
          <br />
        </>
      );
      break;
    case "backspace":
      checkBtn = (
        <>
          <button
            className="keyboard__key keyboard__key--wide "
            onClick={() => {
              props.handleBackSpace();
            }}
          >
            <i className="fas fa-backspace"></i>
          </button>
          <br />
        </>
      );
      break;
    case "caps":
      if (props.capsLock) {
        checkBtn = (
          <button
            className="keyboard__key keyboard__key--wide  keyboard__key--activatable keyboard__key--active"
            onClick={() => {
              props.handleCaps();
            }}
          >
            <i className="far fa-caret-square-up"></i>
          </button>
        );
      } else {
        checkBtn = (
          <button
            className="keyboard__key keyboard__key--wide keyboard__key--activatable "
            onClick={() => props.handleCaps()}
          >
            <i className="far fa-caret-square-up"></i>
          </button>
        );
      }
      break;
    case "enter":
      checkBtn = (
        <>
          <button
            className="keyboard__key keyboard__key--wide "
            onClick={() => props.handleEnter()}
          >
            <i className="fas fa-long-arrow-alt-left"></i>
          </button>
          <br />
        </>
      );
      break;
    case "p":
      if (props.capsLock) {
        checkBtn = (
          <>
            <button
              className="keyboard__key "
              onClick={() => props.toTextArea(char.value.toUpperCase())}
            >
              {char.value.toUpperCase()}
            </button>
            <br />
          </>
        );
      } else {
        checkBtn = (
          <>
            <button
              className="keyboard__key "
              onClick={() => props.toTextArea(char.value.toLowerCase())}
            >
              {char.value.toLowerCase()}
            </button>
            <br />
          </>
        );
      }
      break;
    case "?":
      checkBtn = (
        <>
          <button
            className="keyboard__key "
            onClick={() => props.toTextArea(char.value)}
          >
            <i className="fas fa-question"></i>
          </button>
          <br />
        </>
      );
      break;
    default:
      if (props.capsLock) {
        checkBtn = (
          <button
            className="keyboard__key"
            onClick={() => props.toTextArea(char.value.toUpperCase())}
          >
            {char.value.toUpperCase()}
          </button>
        );
      } else {
        checkBtn = (
          <button
            className="keyboard__key"
            onClick={() => props.toTextArea(char.value.toLowerCase())}
          >
            {char.value.toLowerCase()}
          </button>
        );
      }

      break;
  }

  return <>{checkBtn}</>;
}
