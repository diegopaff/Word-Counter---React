import { useState } from "react";
import Warning from "./Warning";

type TextAreaProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

function TextArea({ text, setText }: TextAreaProps) {
  const [warningText, setWarningText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let newText: string = e.currentTarget.value;

    if (newText.includes("<script>")) {
      setWarningText("No script tag allowed");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("No @ character allowed");
      newText = newText.replace("@", "");
    } else setWarningText("");

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
      {warningText && <Warning warningText={warningText} />}
    </div>
  );
}

export default TextArea;
