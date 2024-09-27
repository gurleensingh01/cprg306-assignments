import Link from 'next/link';
export default function Page() {
    return (
      <main className='text-center'>
        <h1 className='text-4xl font-bold m-5 mt-32'>CPRG 306: Web Development 2 - Assignments</h1>
        <Link href="/week-2" className='text-2xl'>Week 2 Assignment</Link>
        <br />
        <Link href="/week-3" className='text-2xl'>Week 3 Assignment</Link>
      </main>
    );
  }