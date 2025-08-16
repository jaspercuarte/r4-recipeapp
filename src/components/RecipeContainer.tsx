import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeInformation from "./RecipeInformation";

export type RecipeInfoType = {
  image: string;
  title: string;
  readyInMinutes: number;
  servings: number;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryPopular: boolean;
  pricePerServing: number | null;
  preparationMinutes: number | null;
  cookingMinutes: number | null;
  extendedIngredients: {
    id: number;
    name: string;
    image: string;
    amount: number;
    unit: string;
  }[];
  analyzedInstructions: {
    name: string;
    steps: {
      number: number;
      step: string;
    }[];
  }[];
};

type RecipeContainerProps = {
  foodId: string;
};

const RecipeContainer: React.FC<RecipeContainerProps> = ({ foodId }) => {
  const [recipeInfo, setRecipeInfo] = useState<RecipeInfoType>();

  useEffect(() => {
    const fetchFoodInfo = async () => {
      try {
        const foodInfoData = await axios.get(
          `https://api.spoonacular.com/recipes/${foodId}/information`,
          { params: { apiKey: import.meta.env.VITE_API_KEY } }
        );
        setRecipeInfo(foodInfoData.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchFoodInfo();
  }, [foodId]);

  return (
    <div className="mt-8 bg-white h-min-30 rounded-3xl p-6 w-full">
      <div className="grid sm:grid-cols-1  lg:grid-cols-2 gap-2">
        <RecipeInformation recipeInfo={recipeInfo} />
      </div>
    </div>
  );
};

export default RecipeContainer;
