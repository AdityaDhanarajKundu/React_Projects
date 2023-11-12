import { useState } from "react"
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// value to dynamically show the menu categories buttons even the new ones if added later

// the allCategories will be reference variable/ object of the Set class, Set() is a function/constructor used to 
// take only the unique value from an array or other iterables and make a new set or iterable out of it
const allCategories = ["all",...new Set(items.map((item)=> item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

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
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App;
