import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ text, setText }) {
  const [warning, setWarning] = useState("");

  function handleChange(event) {
    // basic validation of input
    let newText = event.target.value;

    if (newText.includes("<script>")) {
      setWarning("Scripts are not allowed");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarning("No @ symbol allowed");
      newText = newText.replace("@", "");
    } else {
      setWarning("");
    }

    setText(newText);
  }

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text here"
        spellCheck="false"
      />
      <Warning message={warning} />
    </div>
  );
}
