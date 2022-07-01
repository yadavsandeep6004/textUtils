import { useState } from "react";

function Text() {
  function hello(event) {
    settext(event.target.value);
  }
  const clickspaaces = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
  };
  const clickcopy = () => {
    let newtext = document.getElementById("mybox");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
  };

  function clickclear() {
    settext("");
  }

  function clicklow() {
    let newtext = text.toLowerCase();
    settext(newtext);
  }

  function clickup() {
    let newtext = text.toUpperCase();
    settext(newtext);
  }

  let [text, settext] = useState("");

  return (
    <div className="Text">
      <h1>Enter your Text </h1>
      <textarea
        type="text"
        className="TextBox"
        value={text}
        onChange={hello}
        id="mybox"
      ></textarea>
      <button className="btn" onClick={clickup}>
        UpperCase
      </button>
      <button className="btn" onClick={clicklow}>
        LowerCase
      </button>
      <button className="btn" onClick={clickclear}>
        clearText
      </button>
      <button className="btn" onClick={clickcopy}>
        copyText
      </button>

      <button className="btn" onClick={clickspaaces}>
        removeExtraSpaces
      </button>
    </div>
  );
}
export default Text;
