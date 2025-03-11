export default function IngredientsList(props) {
  const ingredientsListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  const isIngredientsEmpty = props.ingredients.length === 0;

  function renderIngredients() {
    return (
      <section className="main__section">
        <h2 className="main__h2">Ingredients on hand:</h2>

        <ul className="main__ul">{ingredientsListItems}</ul>
      </section>
    );
  }

  function renderGetRecipe() {
    return (
      <div ref={props.ref} className="get__recipe__container">
        <div className="text__container">
          <h3 className="container__h3">Ready for a recipe?</h3>
          <p className="container__p">
            Generate a recipe from your list of ingredients.
          </p>
        </div>
        <button onClick={props.getRecipe} className="container__button">
          Get a recipe
        </button>
      </div>
    );
  }

  return (
    <>
      {!isIngredientsEmpty && renderIngredients()}
      {props.ingredients.length > 3 && renderGetRecipe()}
    </>
  );
}
