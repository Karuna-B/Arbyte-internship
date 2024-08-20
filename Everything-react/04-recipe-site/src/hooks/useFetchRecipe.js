import axios from "axios";
import { useState } from "react";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/get-more-info",
  params: { id: "8138" },
  headers: {
    "x-rapidapi-key": "e49bedb54cmsh527bb2a25712728p19dd99jsnb026832c582e",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};

const useFetchRecipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipe = async (id) => {
    setLoading(true);
    setError(null);
    setRecipe(null);
    try {
      const reqOptions = { ...options };

      reqOptions.params.id = id;
      const response = await axios.request(reqOptions);
      setRecipe(response.data.results);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  return [fetchRecipe, { data: recipe, loading, error }];
};

export default useFetchRecipe;
