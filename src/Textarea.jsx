import { useState } from "react";

function Textarea() {
  const [text, setText] = useState("");
  return (
    <textarea
      value={text}
      onChange={(e) => {
        const newText = e.target.value;
        setText(newText);
      }}
      className="textarea"
      placeholder="Enter your text"
      spellCheck="false"
    />
  );
}

export default Textarea;
