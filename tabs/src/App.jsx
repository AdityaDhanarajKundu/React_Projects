import { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  //function to fetch the data from the url
  async function fetchData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  // we want to fetch the data during the first time the application loads
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>App</h1>
    </>
  );
}

export default App;
