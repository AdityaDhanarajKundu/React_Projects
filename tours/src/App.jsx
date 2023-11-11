import { useState, useEffect, createContext } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

// fetch data from this api url
const url = "https://course-api.com/react-tours-project";

// creating a context to pass the remove function to the Tours directly as a prop
export const TourContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // function to remove the individual tours
  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  //function to fetch data from api asynchronously
  async function fetchTours() {
    setLoading(true);
    try {
      const response = await fetch(url);
      const fetchedTours = await response.json();
      console.log(fetchedTours);
      setLoading(false);
      setTours(fetchedTours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  // useEffect to invoke the function
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  //setting a condition to display a message if there are no tours left
  if(tours.length === 0){
    return(
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button type="button" onClick={()=>fetchTours()} className="btn">Refresh</button>
        </div>
      </main>
    );
  }

  return (
    <TourContext.Provider value={{ tours, removeTour }}>
      <main>
        <Tours tours={tours} />
      </main>
    </TourContext.Provider>
  );
}

export default App;
