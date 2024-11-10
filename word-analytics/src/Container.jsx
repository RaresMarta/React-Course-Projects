import TextArea from "./TextArea";
import Stats from "./Stats";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");
  const stats = {
    characters: text.length,
    words: text.split(" ").filter((word) => word !== "").length,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
