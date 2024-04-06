import Cards from "./components/cards/cards";
import Navbar from "./components/navbar/navbar";
import Link from 'next/link';
import { createTaskSchema } from "./validation-schemas";
export default function Home() {
  return (
    <>
      <div className="flex space-x-5 mb-5">
        <Link href='/new' className='btn btn-primary ml-3'>New Task</Link>

        <div role="tablist" className="tabs tabs-boxed max-w-80">
          <a role="tab" className="tab tab-active">All</a>
          <a role="tab" className="tab">Fulfilled</a>
          <a role="tab" className="tab">Unfulfilled</a>
        </div>
      </div>

      <Cards />
    </>
  );
}
