"use client"; 
import NewItem from './new-item.js';
import ItemList from './item-list.js';
import itemsData from './items.json';
import { useState } from 'react';
import MealIdeas from './meal-ideas.js';

export default function Page() {

  const [items, setItems] = useState(itemsData);

  const [selectedItemName, setSelectedItemName] = useState('');

  const handleItemSelect = (name) => {
    name = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    name = name.split(",")[0];
    name = name.trim();
    setSelectedItemName(name);
  }

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  }

    return (
      <main className='bg-slate-950'>
        <h1 className='font-bold text-3xl m-3'>Shopping List</h1>
        <div className='flex gap-3'>
          <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList onItemSelect={handleItemSelect} items={items}/>
          </div>
          <div>
          <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </main>
    );
  }