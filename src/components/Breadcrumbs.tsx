'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Don't show on homepage
  if (pathname === '/') return null;

  const paths = pathname.split('/').filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <ol className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-primary/40">
        <li className="flex items-center">
          <Link href="/" className="hover:text-primary transition-colors flex items-center">
            <Home className="h-3 w-3 mr-1" />
            <span>Home</span>
          </Link>
        </li>
        
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join('/')}`;
          const isLast = index === paths.length - 1;
          const label = path.replace(/-/g, ' ');

          return (
            <li key={path} className="flex items-center">
              <ChevronRight className="h-3 w-3 mx-1 text-primary/20" />
              {isLast ? (
                <span className="text-primary truncate max-w-[150px]">{label}</span>
              ) : (
                <Link href={href} className="hover:text-primary transition-colors">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
