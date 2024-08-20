import axios from "axios";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/list",
  params: {
    from: "0",
    size: "20",
  },

  headers: {
    "x-rapidapi-key": "f41e3cc50amsh108c23b5c26a8e5p146503jsn16dc6c62ab78",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};

const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      setRecipes(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return [recipes, loading];
};

export default useFetchRecipes;
