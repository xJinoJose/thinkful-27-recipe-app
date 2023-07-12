import React from "react";

function RecipeList({ recipes, onDeleteRecipe }) {

  // handle the delete button action
  const handleDeleteClick = (recipeId) => {
    onDeleteRecipe(recipeId);
  };
  
  // variable switch to determine table bgcolor
  let tableCounter=1;
  
  const recipePosts = recipes.map((recipe) => {
    // set the initial color
    let bgcolor = "#fff0c7";
    
    if(tableCounter % 2 == 0) {
      // if the counter is even then set bgcolor to white
      bgcolor = "#ffffff";
    } else {
      // if the counter is odd then set bgcolor to fff0c7
      bgcolor = "#fff0c7";
    }
    
    // sets the bgcolor for the table row
    const trStyle = {      
      backgroundColor: bgcolor,      
    };
    
    tableCounter++
    
    return(
      <tr key={recipe.id} style={trStyle}>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>
          <img src={recipe.photo} alt={recipe.name} width="100" height="100" />
        </td>
        <td class="content_td"><p>{recipe.ingredients}</p></td>
        <td class="content_td"><p>{recipe.preparation}</p></td>
        <td>
          <button name="delete" onClick={() => handleDeleteClick(recipe.id)}>
            Delete
          </button>
        </td>
    </tr>  
    )    
    
  });

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipePosts}        
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
