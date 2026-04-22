'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Docs = () => {
  const pathname = usePathname();

  const links = [
    { href: '/dashboard/today', label: '今日' },
    { href: '/dashboard/yesterday', label: '昨日' },
    { href: '/dashboard/weekly', label: '今週' },
  ];

  return (
    <nav className="inline-flex bg-gray-200 rounded-full p-1 gap-1">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
              px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${isActive 
                ? 'bg-white text-black shadow-sm' 
                : 'bg-transparent text-gray-600 hover:text-gray-900'
              }
            `}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Docs;