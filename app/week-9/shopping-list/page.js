"use client"; 
import NewItem from './new-item.js';
import ItemList from './item-list.js';
import itemsData from './items.json';
import { useState } from 'react';
import MealIdeas from './meal-ideas.js';
import { useUserAuth } from '../_utils/auth-context.js';
import Link from 'next/link.js';

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();

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

  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  if (!user) {
    return (
      <main className='flex min-h-screen items-center justify-center bg-slate-950 flex-col'>
        <h1 className='font-bold text-5xl m-3'>Shopping List</h1>
        <p className='text-2xl m-3'>Please <Link className="text-2xl hover:underline" href="/week-9">login</Link> to view this page</p>
      </main>
    );
  }

  return (
    <main className='bg-slate-950'>
      <div className="flex justify-between items-center m-3">
        <h1 className='font-bold text-3xl'>Shopping List</h1>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-slate-900 text-white text-xl rounded-full border border-gray-50"
        >
          Log Out
        </button>
      </div>
      <div className='flex gap-3'>
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList onItemSelect={handleItemSelect} items={items} />
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
