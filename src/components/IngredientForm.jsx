export default function IngredientForm(props) {
  return (
    <form action={props.addIngredient} className="main__form">
      <input
        aria-label="Add ingredient"
        className="form__input"
        type="text"
        placeholder="e.g. oregano"
        name="ingredient"
        required
      />
      <button className="form__button">+ Add ingredient</button>
    </form>
  );
}
