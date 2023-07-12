import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  
  // handle the recipe creation
  const handleCreateRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  }
  
  // handle the recipe deletion
  const handleDeleteRecipe = (recipeId) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
  };
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} onDeleteRecipe={handleDeleteRecipe} />
      <RecipeCreate onCreateRecipe={handleCreateRecipe} />
    </div>
  );
}

export default App;
