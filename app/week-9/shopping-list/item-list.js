"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({items, onItemSelect}) {
    
    const [sortBy, setSortBy] = useState("name");

    items.sort((a, b) => sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category));

    const handleSort = (sortType) => {
        setSortBy(sortType);
    }

    return (
      <div>
        <div className="flex ">
        <p className="p-1.5 m-3">Sort By :</p>
        <button onClick={() => handleSort("name")} className={` p-1.5 m-3 rounded-md ${sortBy === "name" ? "bg-orange-700" : "bg-orange-500" }`}>Name </button>
        <button onClick={() => handleSort("category")} className={` p-1.5 m-3 rounded-md ${sortBy === "category" ? "bg-orange-700" : "bg-orange-500" }`} >Category</button>
        </div>
        <ul>
          {items.map((item) => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={() => onItemSelect(item.name)} />
          ))}
        </ul>
      </div>
    );

  }