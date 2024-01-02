import { useState } from "react";
import Warning from "./Warning";

function TextArea() {
  const [text, setText] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let newText: string = e.currentTarget.value;

    if (newText.includes("<script>")) {
      setShowWarning(true);
      newText = newText.replace("<script>", "");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        className="textarea"
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      />
      {showWarning && <Warning />}
    </div>
  );
}

export default TextArea;
