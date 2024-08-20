import { useParams } from "react-router-dom";
import useFetchRecipe from "../hooks/useFetchRecipe";
import { useEffect } from "react";
import RecipeHeader from "../components/RecipeHeader";
import Loading from "../components/Loading";

export default function RecipePage() {
  const { id } = useParams();
  const [fetchRecipe, { data, loading, error }] = useFetchRecipe();

  useEffect(() => {
    fetchRecipe(id);
  }, []);

  if (loading) return <Loading />;
  if (error) return { error };
  return (
    <div>
      {data && (
        <>
          <RecipeHeader nutritionalFacts={data.nutrition} />;
        </>
      )}
    </div>
  );
}
