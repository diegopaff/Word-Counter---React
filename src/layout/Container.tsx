import { useState } from "react";
import Stats from "../components/Stats";
import TextArea from "../components/TextArea";

function Container() {
  const [text, setText] = useState("");

  const charactersCount: number = text.length;
  const wordsCount: number = text.length > 0 ? text.split(" ").length : 0;

  return (
    <main className="container">
      <TextArea setText={setText} text={text} />
      <Stats charactersCount={charactersCount} wordsCount={wordsCount} />
    </main>
  );
}

export default Container;
