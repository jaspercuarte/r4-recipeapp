import React from "react";
import type { FoodDataType } from "../App";
import FoodCard from "./FoodCard";

type FoodListProps = {
  foodData: FoodDataType[];
  setFoodId: (s: string) => void;
};

const FoodList: React.FC<FoodListProps> = ({ foodData, setFoodId }) => {
  return (
    <div className="mt-8 bg-white h-min-30 rounded-3xl p-8 w-full">
      <h2 className="font-semibold text-zinc-700 text-3xl mb-6">Recipes</h2>
      <div className=" grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {foodData.map((food) => {
          return <FoodCard key={food.id} food={food} setFoodId={setFoodId} />;
        })}
      </div>
    </div>
  );
};

export default FoodList;
