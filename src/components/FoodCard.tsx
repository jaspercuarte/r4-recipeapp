import React from "react";
import type { FoodDataType } from "../App";

type FoodCardProps = {
  food: FoodDataType;
  setFoodId: (s: string) => void;
};

const FoodItem: React.FC<FoodCardProps> = ({ food, setFoodId }) => {
  return (
    <div
      className="flex flex-col justify-around relative px-2 py-4 border border-zinc-200  sm:h-80 md:h-56 lg:h-64  rounded-xl cursor-pointer text-zinc-500  hover:border-zinc-400 hover:text-zinc-950 active:bg-zinc-200 transition-all"
      onClick={() => setFoodId(food.id)}
    >
      <img
        className="rounded-2xl border border-zinc-300"
        src={food.image}
        alt=".._img"
      />
      <div>
        <h3 className="font-semibold text-sm mb-3">{food.title}</h3>
      </div>
      <p className="text-sm text-zinc-400">Show Recipe</p>
    </div>
  );
};

export default FoodItem;
