import Link from 'next/link';
export default function Page() {
    return (
      <main className='text-center'>
        <h1 className='text-4xl font-bold m-5 mt-32'>CPRG 306: Web Development 2 - Assignments</h1>
        <Link href="/week-2" className='text-2xl'>Week 2 Assignment</Link>
        <br />
        <Link href="/week-3" className='text-2xl'>Week 3 Assignment</Link>
        <br />
        <Link href="/week-4" className='text-2xl'>Week 4 Assignment</Link>
        <br />
        <Link href="/week-5" className='text-2xl'>Week 5 Assignment</Link>
        <br />
        <Link href="/week-6" className='text-2xl'>Week 6 Assignment</Link>
        <br />
        <Link href="/week-7" className='text-2xl'>Week 7 Assignment</Link>
        <br />
        <Link href="/week-8" className='text-2xl'>Week 8 Assignment</Link>
        <br />
        <Link href="/week-9" className='text-2xl'>Week 9 Assignment</Link>
        <br />
        <Link href="/week-10" className='text-2xl'>Week 10 Assignment</Link>
      </main>
    );
  }