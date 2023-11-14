import { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0); // to denote how many paragraphs to be generated
  const [text, setText] = useState([]); // to store the generated paragraphs

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data.length);
    console.log(count);
    console.log(typeof count);
    console.log(parseInt(count));
    let amount = parseInt(count);
    if (amount <= 0){
      setText([]);
    }else if(amount > data.length){
      amount = data.length;
    }
    setText(data.slice(0, amount));
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
          min={0}
          max={data.length}
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
