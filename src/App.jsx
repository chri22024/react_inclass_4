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
        <input type="text" placeholder="" />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio" value="us" checked={ukus === "us"} />
        <label htmlFor="uk">UK</label>
        <input type="radio" value="uk" checked={ukus === "uk"} />
      </div>
      <div>
        <button onClick={generateStory}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was 94 fahrenheit outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          Bob saw the whole thing, but was not surprised — {xItem} weighs 300
          pounds, and it was a hot day.
        </p>
      )}
    </>
  );

}








/*
import { useState } from "react";

export default function App() {
  // ランダムな値を配列から取得する関数
  function randomValueFromArray(array) {
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

  // ストーリーの要素と表示状態を管理するstate
  const [xItem, setXItem] = useState("");
  const [yItem, setYItem] = useState("");
  const [zItem, setZItem] = useState("");
  const [showStory, setShowStory] = useState(false);

  // ランダムなストーリーを生成する関数
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
        <input type="text" placeholder="" />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio" value="us" />
        <label htmlFor="uk">UK</label>
        <input type="radio" value="uk" />
      </div>
      <div>
        <button onClick={generateStory}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was 94 fahrenheit outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          Bob saw the whole thing, but was not surprised — {xItem} weighs 300
          pounds, and it was a hot day.
        </p>
      )}
    </>
  );
}


*/


