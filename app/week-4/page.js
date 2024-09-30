"use client";

import { useState } from "react";

import NewItem from "./new-item";

export default function Page() {

    const [quantity, setQuantity] = useState(1);

    const increment = () => quantity < 20 ? setQuantity(quantity + 1) : null;

    const decrement = () => quantity > 1 ?setQuantity(quantity - 1) : null;

    return (
        <main className="flex justify-center">
            <NewItem />
            <div className="p-1 m-3 text-black bg-slate-300 rounded-full w-1/8 flex justify-between">
                <p className="mx-5 flex items-center text-lg font-medium">{quantity}</p>
                <div>
                    <button onClick={decrement} className="bg-slate-500 py-1 px-4 m-1 rounded-full font-bold text-xl w-12
                    hover:bg-slate-700
                    active:bg-red-600
                    focus:outline
                    focus:outline-black
                    focus:outline-[2px]
                    disabled:bg-slate-400"
                    disabled={quantity == 1}
                    >-</button>

                    <button onClick={increment} className="bg-slate-500 py-1 px-4 m-1 mr-2 rounded-full font-bold text-xl w-12
                    hover:bg-slate-700
                    active:bg-green-700
                    focus:outline
                    focus:outline-black
                    focus:outline-[2px]
                    disabled:bg-slate-400"
                    disabled={quantity == 20}>+</button>
                </div>
            </div>
        </main>
    );
}