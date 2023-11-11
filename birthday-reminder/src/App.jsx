import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {

  // passing the default value of people from the data file
  const [people, setPeople] = useState(data);

  
  return(
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {/* passing the array of the birthday people as a prop of the list component */}
        <List people={people} /> 
        <button type="button" onClick={()=>{setPeople([])}}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
