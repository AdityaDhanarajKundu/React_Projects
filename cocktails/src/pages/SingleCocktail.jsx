import {useParams, NavLink} from 'react-router-dom';
import Loading from '../components/Loading';
import {useState, useEffect} from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

function SingleCocktail(){
    const {id} = useParams(); //useParams is a hook that allows you to access the parameters from the URL in functional components
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        setLoading(true);
        async function getCocktail(){
            try{
                const response = await fetch(`${url}${id}`);
                const data = await response.json();
                
                if(data.drinks){
                    // destructuring the data to get the id, name, image and info
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = data.drinks[0];
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ];
                    const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    };
                    setCocktail(newCocktail);
                }
                else{
                    setCocktail(null);
                }
                setLoading(false);
            }
            catch(error){
                console.log(error);
                setLoading(false);
            }
        }
        getCocktail();
    }, [id]);

    if(loading){
        return <Loading />
    }
    if(!cocktail){
        return <h2 className="section-title">no cocktail to display</h2>
    }
    
    return(
        <div>
            <h2>{id}</h2>
        </div>
    );
}

export default SingleCocktail;