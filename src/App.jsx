import { useState } from "react";

import Header from "./asserts/components/Header";
import EmojiCard from "./asserts/components/EmojiCard";
import emojiList from "./asserts/data/emojiList.json";

import "./asserts/app.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Header />
      <div className="search-bar">
        <input
          type="text"
          onChange={(event) => {
            setSearchQuery(event.target.value);
          }}
          placeholder="Search ..."
        />
      </div>
      <div className="result">
        {emojiList
          .filter((val) => {
            if (searchQuery == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              val.symbol.includes(searchQuery)
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <EmojiCard title={val.title} key={key} symbol={val.symbol} info={val.keywords}/>
            );
          })}
      </div>
    </div>
  );
}

export default App;
