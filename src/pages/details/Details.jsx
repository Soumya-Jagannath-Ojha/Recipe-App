import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/Context";
import Favorites from "../favorites/Favorites";

const Details = () => {
  const { id } = useParams();
  const { loading,setLoading, recipeDetailsData, setRecipeDetailsData, handleAddToFavorite,favoritesList } =
    useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      // setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      if (data?.data) {
        // setLoading(false);
        setRecipeDetailsData(data?.data);
      }
    }
    getRecipeDetails();
  }, []);

  if (loading) return <div><h1 className="text-lg font-semibold text-gray-700 text-center animate-pulse">Loading Data! Please wait...</h1></div>;


  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div>
          <button
            className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
            onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "Romove from favorites"
              : "Add to favorites"}
            
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black ">
            Ingredients:
          </span>
          <ul className="mt-3 ml-4 flex flex-col gap-3 list-disc">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient,index) => (
            
              
              <li key={index}>
                <span className="text-xl  text-black">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-xl  text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
