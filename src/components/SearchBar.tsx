import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import type { FoodDataType } from "../App";

type SearchBarProps = {
  foodData: FoodDataType[];
  setFoodData: (f: FoodDataType[]) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const foodsQueryResponse = await axios.get(
          "https://api.spoonacular.com/recipes/complexSearch",
          { params: { query, apiKey: import.meta.env.VITE_API_KEY } }
        );
        console.log(foodsQueryResponse.headers);
        setFoodData(foodsQueryResponse.data.results);
      } catch (e) {
        console.error(e);
      }
    };
    fetchFoods();
  }, [query]);

  return (
    <div className="flex gap-3 items-center border-none rounded-3xl px-3 py-2 w-80 bg-white  focus-within:ring-1 focus-within:ring-zinc-300 transition-all">
      <Search className="w-5 h-5 text-zinc-400" />
      <input
        className="w-full focus:outline-none"
        type="text"
        placeholder="Search recipe here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
