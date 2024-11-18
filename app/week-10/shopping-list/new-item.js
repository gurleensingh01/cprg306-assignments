"use client";

import { useState } from "react";

export default function NewItem( {onAddItem} ) {

    const [quantity, setQuantity] = useState(1);

    const [name, setName] = useState("");

    const [category, setCategory] = useState("produce");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let id = Math.floor(Math.random() * 100000);
        let newItem = {id, name, category, quantity};
        console.log(newItem);
        onAddItem(newItem);
        setName("");
        setCategory("produce");
        setQuantity(1);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const increment = () => quantity < 20 ? setQuantity(quantity + 1) : quantity;

    const decrement = () => quantity > 1 ? setQuantity(quantity - 1) : quantity;

    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)} className="text-black m-5 p-5 flex w-96 flex-wrap bg-slate-900">
                <input type="text" value={name} onChange={handleNameChange} required placeholder="Item name" 
                className="p-2 m-1 rounded-full bg-slate-300 placeholder:text-gray-500 placeholder:text-center py-3 w-96"></input>
                <div className="p-1 m-2 text-black bg-slate-300 rounded-full flex">
                <p className="mx-5 flex items-center text-lg font-medium">{quantity}</p>
                <div>
                    <button type="button" onClick={decrement} className="bg-slate-500 py-1 px-4 m-1 rounded-full font-bold text-xl w-12
                    hover:bg-slate-700
                    active:bg-red-600
                    focus:outline
                    focus:outline-black
                    focus:outline-[2px]
                    disabled:bg-slate-400"
                    disabled={quantity == 1}
                    >-</button>

                    <button type="button" onClick={increment} className="bg-slate-500 py-1 px-4 m-1 mr-2 rounded-full font-bold text-xl w-12
                    hover:bg-slate-700
                    active:bg-green-700
                    focus:outline
                    focus:outline-black
                    focus:outline-[2px]
                    disabled:bg-slate-400"
                    disabled={quantity == 20}>+</button>
                </div>
                </div>
                
                <select value={category} onChange={handleCategoryChange} className="p-1 m-2 rounded-full bg-slate-300 w-28 ml-5 text-center">
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="pantry">Pantry</option>
                </select>
                <br />
                <button type="submit" className="bg-slate-500 py-1 px-4 m-1 rounded-full font-bold text-xl w-96
                    hover:bg-slate-700
                    active:bg-green-700
                    focus:outline
                    focus:outline-black
                    focus:outline-[2px]
                    disabled:bg-slate-400">Add</button>

        </form>

        
    </div>

            
    );
}