import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

function Container() {
  const [text, setText] = useState("");
  const numberOfWords = text.split(/\s/).filter((word) => word !== "").length;
  const numberOfCharacters = text.length;
  const instagramCharactersLeft = 280 - text.length;
  const facebookCharactersLeft = 2200 - text.length;

  const stats = {
    numberOfWords: numberOfWords,
    numberOfCharacters: numberOfCharacters,
    instagramCharactersLeft: instagramCharactersLeft,
    facebookCharactersLeft: facebookCharactersLeft,
  };
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}

export default Container;
