import axios from "axios";
import { useState } from "react";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/list",
  params: {
    from: "0",
    size: "20",
  },

  headers: {
    "x-rapidapi-key": "e49bedb54cmsh527bb2a25712728p19dd99jsnb026832c582e",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};

const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipes = async (searchTerm) => {
    setLoading(true);
    setError(null);
    setRecipes(null);
    try {
      const reqOptions = { ...options };
      if (searchTerm) {
        reqOptions.params.q = searchTerm;
      }
      const response = await axios.request(reqOptions);
      setRecipes(response.data.results);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  return [fetchRecipes, { data: recipes, loading, error }];
};

export default useFetchRecipes;
