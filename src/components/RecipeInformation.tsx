import React from "react";
import type { RecipeInfoType } from "./RecipeContainer";
import Tag from "./Tag";
import Ingredient from "./Ingredient";
import { CookingPot } from "lucide-react";
import Instruction from "./Instruction";

export type IngredientType = {
  id: number;
  name: string;
  image: string;
  amount: number;
  unit: string;
};

export type InstructionType = {
  number: number;
  step: string;
};

type RecipeInformationProps = {
  recipeInfo?: RecipeInfoType;
};

const convertToPeso = (
  pricePerServing: number | null | undefined,
  exchangeRate = 56
) => {
  if (pricePerServing === null || pricePerServing === undefined) {
    return null;
  }

  const usd = pricePerServing / 100; // placeholder (not real time conv)
  const php = usd * exchangeRate;
  return php.toFixed(2);
};

const RecipeInformation: React.FC<RecipeInformationProps> = ({
  recipeInfo,
}) => {
  return (
    <>
      <img
        className="rounded-3xl border border-zinc-200"
        src={recipeInfo?.image}
        alt="..__.img"
      />
      <div className="flex flex-col gap-3">
        <h2 className="recipe-title sm:text-4xl md:text-4xl lg:text-5xl text-zinc-800">
          {recipeInfo?.title}
        </h2>
        <div
          className="grid gap-1
        sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full"
        >
          {recipeInfo?.vegetarian ? <Tag>vegetarian</Tag> : <></>}
          {recipeInfo?.vegan ? <Tag>vegan</Tag> : <></>}
          {recipeInfo?.glutenFree ? <Tag>gluten free</Tag> : <></>}
          {recipeInfo?.dairyFree ? <Tag>dairy free</Tag> : <></>}
          {recipeInfo?.veryPopular ? <Tag>popular</Tag> : <></>}
        </div>
        <div className="flex flex-wrap gap-4 items-center w-full font-bold text-2xl">
          {/* Ready in Minutes */}
          <div className="flex gap-2 items-center">
            {recipeInfo?.readyInMinutes ?? "N/A"}
            <span className="text-sm font-semibold text-zinc-500">
              readyInMinutes
            </span>
            <span className="mx-2">·</span>
          </div>

          {/* Servings */}
          <div className="flex gap-2 items-center">
            {recipeInfo?.servings ?? "N/A"}
            <span className="text-sm font-semibold text-zinc-500">
              servings
            </span>
            <span className="mx-2">·</span>
          </div>

          {/* Price per Serving */}
          <div className="flex gap-2 items-center">
            {recipeInfo?.pricePerServing != null
              ? `₱${convertToPeso(recipeInfo.pricePerServing)}`
              : "N/A"}
            <span className="text-sm font-semibold text-zinc-500">
              pricePerServing
            </span>
          </div>
        </div>

        <h3 className="font-semibold text-zinc-700">Ingredients:</h3>
        <div className="grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
          {recipeInfo?.extendedIngredients.map((ingredient: IngredientType) => {
            return <Ingredient key={ingredient.id} ingredient={ingredient} />;
          })}
        </div>
      </div>

      <div className="w-full mt-6 col-span-2">
        <h3 className="flex items-center gap-2 font-semibold text-zinc-700">
          <CookingPot /> Step by step preparation instruction:
        </h3>
        <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeInfo?.analyzedInstructions[0].steps.map(
            (instruction: InstructionType) => {
              return <Instruction instruction={instruction} />;
            }
          )}
        </div>
      </div>
    </>
  );
};

export default RecipeInformation;
