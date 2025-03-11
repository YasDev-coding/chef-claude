import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function AiRecipe(props) {
  // Create reference to store the DOM element containing the animation
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [`<h2>Chef Claude Recommends: ${props.recipe}`],
      typeSpeed: 1,
      showCursor: true, // Show cursor during typing
      cursorChar: "|",
      loop: false,

      onComplete: (typedObj) => {
        typedObj.cursor.remove(); // Remove the cursor once typing is complete
      },
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [props.recipe]);

  return (
    <section className="recipe__section" aria-live="polite">
      <div ref={typedRef}></div>
    </section>
  );
}
