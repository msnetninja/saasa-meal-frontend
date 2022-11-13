import React from "react";
import { Route, Routes } from "react-router-dom";
import MealDeals from "./meal_deals/MealDeals";
import MealDescription from "./meal_deals/MealDescription";
import { HomePage } from "./HomePage";
import Login from "./Login";
import KindMoments from "./KindMoments";
import Recipe from "./Recipe";
import Signup from "./Signup";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/user/register" element={<Signup />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="/MealDeals" element={<MealDeals />} />

      <Route path="/mealDescription" element={<MealDescription />} />
      <Route path="/MealDeals/:id" element={<MealDescription />} />
      {/* <Route path="/mealDescription" element={<MealDescription />} /> */}


      {/* <Route path="/KindMomemts" element={<KindMoments />} /> */}
      {/* <Route path="/Recipe" element={<Recipe />} /> */}

    </Routes>
  );
};
