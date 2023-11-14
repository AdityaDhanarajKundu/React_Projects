import { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0); // to denote how many paragraphs to be generated
  const [text, setText] = useState([]); // to store the generated paragraphs

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data.length);
    setText(data);
  }

  return (
    <section className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form className="lorem-form">
        <label htmlFor="amount">Paragraph : </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn" onClick={handleSubmit}>
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item,index)=>{
          return(
            <p key={index}>{item}</p>
          );
        })}
      </article>
    </section>
  );
}

export default App;
