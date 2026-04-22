import Link from 'next/link';

const Header = () => {
  return (
    <header className="border-b flex justify-between items-center h-14 px-4">
      <h1>
      <Link href="/">
      MyApp
      </Link></h1>
      <nav className="flex ml-4">
        <li className='ml-4 list-none'><Link href="/contact">Contact</Link></li>
        <li className='ml-4 list-none'><Link href="/stats">Stats</Link></li>
        <li className='ml-4 list-none'><Link href="/about">ゲストユーザー</Link></li>
        <li className='ml-4 list-none'><Link href="/about">新規登録</Link></li>
        <li className='ml-4 list-none'><Link href="/dashboard">ログイン</Link></li>
      </nav>
    </header>
  );
};

export default Header;