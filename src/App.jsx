import { useState } from "react";

export default function App() {
  function randomValueFromArray(array) {
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

  const [xItem, setXItem] = useState("");
  const [yItem, setYItem] = useState("");
  const [zItem, setZItem] = useState("");
  const [showStory, setShowStory] = useState(false);
  const [name, setName] = useState("");
  const [ukus, setUkus] = useState("us");

  function generateStory() {
    setXItem(randomValueFromArray(['Willy the Goblin', 'Big Daddy', 'Father Christmas']));
    setYItem(randomValueFromArray(['the soup kitchen', 'Disneyland', 'the White House']));
    setZItem(randomValueFromArray(['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']));
    setShowStory(true);
  }

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" placeholder="" onChange={d => setName(d.target.value)}/>
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio" value="us" checked={ukus === "us"} onChange={e => setUkus(e.target.value)} />
        <label htmlFor="uk">UK</label>
        <input type="radio" value="uk" checked={ukus === "uk"} onChange={e => setUkus(e.target.value)} />
      </div>
      <div>
        <button onClick={generateStory}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was {ukus === "us" ? "94 fahrenheit" : "34.4 degrees Celsius"} outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {name ? name : "Bob"} saw the whole thing, but was not surprised — {xItem} weighs {ukus === "us" ? "300 pounds" : "21.4 stones"}, and it was a hot day.
        </p>
      )}
    </>
  );
}
