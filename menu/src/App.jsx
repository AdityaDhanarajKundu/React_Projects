import { useState } from "react"
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  // function to filter the menu based on the category entered on button breakfast lunch dinner
  function filterMenu(category){
    if(category === "all"){
      setMenuItems(items);
      console.log(items);
      return;
    }
    
    const newItems = items.filter((item)=>
      item.category === category
    );
    setMenuItems(newItems);
    console.log(newItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterMenu={filterMenu} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App;
