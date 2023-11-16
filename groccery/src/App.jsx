import { useState } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]); // list of products added
  const [isEditing, setIsEditing] = useState(false); // is editing mode on
  const [editID, setEditID] = useState(null); // id of the product being edited
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  }); // alert message for notifications

  function handleSubmit(e) {
    e.preventDefault();
    // conditions
    if (!name) {
      // if no name is entered
      // display alert
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      // if name is entered and editing mode is on
      // edit the product
    } else {
      // add the product and display alert
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  }

  function showAlert(show = false, type = "", msg = "") {
    setAlert({ show, type, msg });
  }

  function clearList() {
    showAlert(true, "danger", "empty list");
    setList([]);
  }

  function removeItem(id) {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
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
      {/* the grocery container will be rendered only when theres value in the list variable */}
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} />
          <button type="button" className="clear-btn" onClick={clearList}>
            Clear
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
