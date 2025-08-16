import React from "react";
import type { IngredientType } from "./RecipeInformation";

type IngredientProps = {
  ingredient: IngredientType;
};

const Ingredient: React.FC<IngredientProps> = ({ ingredient }) => {
  return (
    <div
      className="relative flex flex-col justify-center items-center border border-zinc-200 w-20 h-20 rounded-xl cursor-pointer text-zinc-500  hover:border-zinc-400 hover:text-zinc-950 transition-all"
      title={ingredient.amount + " " + ingredient.unit + " " + ingredient.name}
    >
      <img
        className="w-10"
        src={
          `https://spoonacular.com/cdn/ingredients_100x100/` + ingredient.image
        }
        alt="./.img"
      />
      <p className="absolute bottom-1 text-[10px] text-center font-semibold">
        {ingredient.amount} {ingredient.unit}
      </p>
    </div>
  );
};

export default Ingredient;
