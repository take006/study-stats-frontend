import Link from 'next/link';

const userHeader = () => {
  return (
    <header className="border-b flex justify-between items-center h-14 px-4">
      <h1>
      <Link href="/">
      MyApp
      </Link></h1>
      <nav className="flex ml-4">
        <li className='ml-4 list-none'><Link href="/contact">Contact</Link></li>
        <li className='ml-4 list-none'><Link href="/logs">Logs</Link></li>
        <li className='ml-4 list-none'><Link href="/stats">Stats</Link></li>
      </nav>
    </header>
  );
};

export default userHeader;