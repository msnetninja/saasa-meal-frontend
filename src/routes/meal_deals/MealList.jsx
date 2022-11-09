import React from 'react'
import styled from 'styled-components';
import MealDealsCart from './MealDealsCart';
import { data } from "./mealsData";
import {devices} from "./device"

const MealList = () => {
  return (
    <>
          {data.map((ele, index) => {
          return (
            <MealsCart key={index}>
              <MealDealsCart ele={ele} />
            </MealsCart>
          );
        })}
    </>
  )
}


const MealsCart = styled.div`
    width:500px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius:10px;
    
   
    
`;
export default MealList