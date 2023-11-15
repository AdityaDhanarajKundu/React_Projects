import { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false); // boolean state to check if correct color value is provided
  // state to store all the shades of a color
  const [list,setList] = useState([]);
  
  function handleSubmit(e){
    e.preventDefault();
    console.log("hello");
  }
  
  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="color" id="color" placeholder="#f15025" value={color} onChange={(e)=>{setColor(e.target.value)}}/>
          <button type="submit" className="btn">Submit</button>
        </form>
      </section>
      <section className="colors">
        <h4>list goes here</h4>
      </section>
    </>
  );
}

export default App;
