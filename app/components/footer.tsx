import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white border-b flex justify-between items-center h-14 p-12">
      <h1>
      <Link href="/">
      MyApp
      </Link></h1>
      <nav className="flex ml-4"> 
        <li className='ml-4 list-none'><Link href="/">Service Top</Link></li>
        <li className='ml-4 list-none'><Link href="/contact">Contact</Link></li>
      </nav>
    </footer>
  );
};

export default Footer;