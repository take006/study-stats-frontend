'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Stats', href: '/dashboard', icon: '📊' },
    { name: '学習記録一覧', href: '/dashboard/records', icon: '📝' },
    { name: 'Project', href: '/dashboard/projects', icon: '🎯' },
  ];

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname.startsWith(href);
  };

  return (
    <div className={`transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} bg-gray-100 border-r border-gray-200`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white text-gray-700 p-4 hover:bg-gray-50 transition-colors flex items-center justify-center border-b border-gray-200"
        aria-label="Toggle sidebar"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Menu Items */}
      <nav className="bg-gray-100 min-h-screen">
        <div className="space-y-2 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200
                ${isActive(item.href)
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }
              `}
              title={item.name}
            >
              <span className="text-xl shrink-0">{item.icon}</span>
              {isOpen && <span className="text-sm font-medium truncate">{item.name}</span>}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default SideMenu;
