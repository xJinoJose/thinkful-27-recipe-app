import React, { useState } from "react";

function RecipeCreate({ onCreateRecipe }) {

  // table styling
  const tableStyle = {
      height: "50px",
      backgroundColor: "#fff0c7",
      overflow: "scroll",
    };
  
  // initializes the form inputs
  const [formData, setFormData] = useState({
    name: "Name",
    cuisine: "Cuisine",
    photo: "Photo URL",
    ingredients: "Ingredients",
    preparation: "Preparation",
  });

  // handle the change in input forms
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle the submit button action
  const handleSubmit = (event) => {
    event.preventDefault();

    // create object for the new recipe
    const newRecipe = {
      id: Date.now(),
      ...formData,
    };

    onCreateRecipe(newRecipe);

    // resets the input values
    setFormData({
      name: "Name",
      cuisine: "Cuisine",
      photo: "Photo URL",
      ingredients: "Ingredients",
      preparation: "Preparation",
    });
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  value={formData.cuisine}
                  onChange={handleChange}
                  required
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  id="photo"
                  type="text"
                  name="photo"
                  value={formData.photo}
                  onChange={handleChange}
                  required
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  required
                  ></textarea>
                </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  id="preparation"
                  name="preparation"
                  value={formData.preparation}
                  onChange={handleChange}
                  required
                  ></textarea>
                </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
