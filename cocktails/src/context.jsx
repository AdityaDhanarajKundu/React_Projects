import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import PropTypes from "prop-types";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  // function to fetch data from the api
  async function fetchDrinks(){
    setLoading(true); // every time we fetch data, it should show the loading animation
    try{
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data);
      // destructuring the data to get the drinks array
      const {drinks} = data;
      if(drinks){
        const newCocktails = drinks.map((item) => {
          // destructuring the data to get the id, name, image and info
          const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        });
        setCocktails(newCocktails);
      }
      else{
        setCocktails([]);
      }
      setLoading(false);
    }
    catch(error){
      console.log(error);
      setLoading(false);
    }
  }

  // useEffect hook to fetch data from the api
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);
  
  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
