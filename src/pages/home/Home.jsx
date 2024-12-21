import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import RecipeItem from "../../components/recipe-item/RecipeItem";

const Home = () => {
  const { loading, recipeList } = useContext(GlobalContext);

  if (loading) return <div><h1 className="text-lg font-semibold text-gray-700 text-center animate-pulse">Loading Data! Please wait...</h1></div>;
  return (
    <div className="py-6 container mx-auto flex flex-wrap justify-center gap-6">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-center text-xl text-gray-700 font-extrabold">
            Nothing to show. Please search somthing
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
