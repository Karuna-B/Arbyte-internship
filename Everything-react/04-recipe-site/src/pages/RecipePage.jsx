import { useParams } from "react-router-dom";
import useFetchRecipes from "../hooks/useFetchRecipes";

export default function RecipePage() {
  const [recipes]= useFetchRecipes();
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  return (
    <div>
      <h1>{recipe.name}</h1>
    </div>
  );
}
