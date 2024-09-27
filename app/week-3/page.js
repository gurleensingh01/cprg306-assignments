import Itemlist from './item-list.js';

export default function Page() {
    return (
      <main className='bg-slate-950'>
        <h1 className='font-bold text-3xl m-3'>Shopping List</h1>
        <Itemlist />
      </main>
    );
  }