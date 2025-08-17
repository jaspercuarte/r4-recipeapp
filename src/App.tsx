import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import FoodList from "./components/FoodList";
import RecipeInformation from "./components/RecipeContainer";

export type FoodDataType = {
  id: string;
  title: string;
  image: string;
};

const App: React.FC = () => {
  const [foodData, setFoodData] = useState<FoodDataType[]>([]);
  const [foodId, setFoodId] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [foodId]);

  return (
    <div className="bg-teal-800 w-full h-full rounded-3xl p-6">
      <SearchBar setFoodData={setFoodData} setLoader={setLoader} />
      {foodId !== "" ? <RecipeInformation foodId={foodId} /> : <></>}
      <FoodList foodData={foodData} setFoodId={setFoodId} loader={loader} />
    </div>
  );
};

export default App;
