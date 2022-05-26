import React from "react";
import Entry from "./Entry"
import emojipedia from "../emojipedia";

function createEmoji (emojipedia){
  return(
    <div>
     
      <Entry
        key = {emojipedia.id}
        id = {emojipedia.id}
        emoji = {emojipedia.emoji}
        name = {emojipedia.name}
        meaning = {emojipedia.meaning}
      />
    </div>
    
  )
};

function App() {
  return (
    <div>
      <h1>
      <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEmoji)};
    </div>
   
  );
}
// this is the end
export default App;
