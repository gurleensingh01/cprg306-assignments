"use client";

import { useState, useEffect } from "react";

const fetchMealsIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
}

const fetchMealDetail = async (idMeal) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
    const data = await response.json();
    return data.meals[0];
}

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);
    const [idMeal, setIdMeal] = useState("");
    const [mealDetail, setMealDetail] = useState(null);

    const loadMealsIdeas = async () => {
        const meals = await fetchMealsIdeas(ingredient);
        setMeals(meals);
    };

    const loadMealDetail = async () => {
        if (idMeal) {
            const mealData = await fetchMealDetail(idMeal);
            setMealDetail(mealData);
        }
    };

    useEffect(() => {
        loadMealsIdeas();
    }, [ingredient]);

    useEffect(() => {
        loadMealDetail();
    }, [idMeal]);

    return (
        <div className="border border-gray-50 p-5 rounded-2xl bg-slate-900">
            <h1 className="font-bold text-3xl m-2 p-1 text-center">Meal Ideas</h1>
            {ingredient === "" ? (
                <p>Choose an item to get some meal ideas.</p>
            ) : !meals ? ( 
                <p>No meal ideas found for {ingredient}.</p>
            ) : (
                <ul>
                    <p>Here are some meal ideas using {ingredient}:</p>
                    <br />
                    {meals.map((meal) => (
                        <li className="p-2 m-1 bg-slate-800 hover:bg-orange-700" key={meal.idMeal} onClick={() => setIdMeal(meal.idMeal)}>
                            {meal.strMeal}
                            {meal.idMeal === idMeal && mealDetail && (
                                <ul className="text-xs text-gray-400">
                                    <p className="ml-2">Ingredients needed: </p>
                                    {Array.from({ length: 20 }, (_, index) => {
                                        const ingredientKey = `strIngredient${index + 1}`;
                                        const measureKey = `strMeasure${index + 1}`;
                                        const ingredient = mealDetail[ingredientKey];
                                        const measure = mealDetail[measureKey];
                                        return ingredient ? (
                                            <li key={ingredientKey} className="ml-7">
                                                {ingredient} ({measure})
                                            </li>
                                        ) : null;
                                    })}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
