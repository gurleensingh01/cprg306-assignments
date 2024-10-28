"use client"; 
import NewItem from './new-item.js';
import ItemList from './item-list.js';
import itemsData from './items.json';
import { useState } from 'react';

export default function Page() {

  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  }

    return (
      <main className='bg-slate-950'>
        <h1 className='font-bold text-3xl m-3'>Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items}/>
      </main>
    );
  }