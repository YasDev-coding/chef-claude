import { useState, useRef, useEffect } from "react";
import IngredientForm from "./IngredientForm";
import IngredientsList from "./IngredientsList";
import AiRecipe from "./AiRecipe";
import { getRecipeFromMistral } from "../data/ai";
import "../styles/Main.css";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

  const recipeSection = useRef(null);

  function addIngredient(formData) {
    // if we want to get all the formData in on line
    // const formDataObject = Object.fromEntries(formData);
    // if we had a check box we need to use getAll()
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView();
    }
  }, [recipe]);

  async function getRecipe() {
    console.log("getRecipe run");
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  return (
    <main>
      <IngredientForm addIngredient={addIngredient} />
      <IngredientsList
        ingredients={ingredients}
        getRecipe={getRecipe}
        ref={recipeSection}
      />
      {recipe && <AiRecipe recipe={recipe} />}
    </main>
  );
}
