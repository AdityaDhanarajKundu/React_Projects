import { useState } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]); // list of products added
  const [isEditing, setIsEditing] = useState(false); // is editing mode on
  const [editID, setEditID] = useState(null); // id of the product being edited
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" }); // alert message for notifications

  function handleSubmit(e) {
    e.preventDefault();
    console.log("hello");
    // conditions
    if(!name){ // if no name is entered
      // display alert 
    }
    else if(name && isEditing){ // if name is entered and editing mode is on
      // edit the product
    }
    else{
      // add the product and display alert
      const newItem = {id: new Date().getTime().toString(), title: name};
      setList([...list, newItem]);
      setName("");
    }
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            placeholder="eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {/* Container to hold the grocery list */}
      <div className="grocery-container">
        <List items={list} />
        <button type="button" className="clear-btn">
          Clear
        </button>
      </div>
    </section>
  );
}

export default App;
