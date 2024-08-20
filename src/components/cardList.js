import React from "react";
import Card from "./Card";

const cardList = ({robots}) => {
return (
    <div className="tc">
        
   {  Array.isArray(robots) &&robots.map((user , i) => {
        return (
        <Card 
        key = {i}
        id = {robots[i].id} 
       name ={robots[i].name}
       email = {robots[i].email}
       />
          ); 
          })
          }
            </div>

    );
}

export default cardList;