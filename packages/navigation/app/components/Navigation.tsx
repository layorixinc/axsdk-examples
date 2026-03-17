'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navStructure: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'Software',
        href: '/products/software',
        children: [
          { label: 'Web Apps', href: '/products/software/web-apps' },
          { label: 'Mobile Apps', href: '/products/software/mobile-apps' },
          { label: 'Desktop Apps', href: '/products/software/desktop-apps' },
        ],
      },
      {
        label: 'Hardware',
        href: '/products/hardware',
        children: [
          { label: 'Computers', href: '/products/hardware/computers' },
          { label: 'Peripherals', href: '/products/hardware/peripherals' },
          { label: 'Networking', href: '/products/hardware/networking' },
        ],
      },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Consulting',
        href: '/services/consulting',
        children: [
          { label: 'IT Consulting', href: '/services/consulting/it-consulting' },
          { label: 'Business Consulting', href: '/services/consulting/business-consulting' },
          { label: 'Strategy', href: '/services/consulting/strategy' },
        ],
      },
      {
        label: 'Support',
        href: '/services/support',
        children: [
          { label: 'Technical', href: '/services/support/technical' },
          { label: 'Customer Service', href: '/services/support/customer-service' },
          { label: 'Knowledge Base', href: '/services/support/knowledge-base' },
        ],
      },
      {
        label: 'Training',
        href: '/services/training',
        children: [
          { label: 'Online Courses', href: '/services/training/online-courses' },
          { label: 'Workshops', href: '/services/training/workshops' },
          { label: 'Certifications', href: '/services/training/certifications' },
        ],
      },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      {
        label: 'Company',
        href: '/about/company',
        children: [
          { label: 'History', href: '/about/company/history' },
          { label: 'Mission', href: '/about/company/mission' },
          { label: 'Team', href: '/about/company/team' },
        ],
      },
      {
        label: 'Careers',
        href: '/about/careers',
        children: [
          { label: 'Open Positions', href: '/about/careers/open-positions' },
          { label: 'Benefits', href: '/about/careers/benefits' },
          { label: 'Culture', href: '/about/careers/culture' },
        ],
      },
      {
        label: 'News',
        href: '/about/news',
        children: [
          { label: 'Press Releases', href: '/about/news/press-releases' },
          { label: 'Blog', href: '/about/news/blog' },
          { label: 'Events', href: '/about/news/events' },
        ],
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
    children: [
      { label: 'General', href: '/contact/general' },
      { label: 'Sales', href: '/contact/sales' },
      { label: 'Support', href: '/contact/support' },
    ],
  },
];

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

function NavLink({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const pathname = usePathname();
  const active = isActive(pathname, item.href);
  const exactActive = pathname === item.href;

  return (
    <li style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      <Link
        href={item.href}
        style={{
          display: 'block',
          padding: `4px ${8 + depth * 12}px`,
          textDecoration: 'none',
          color: exactActive ? '#000' : active ? '#333' : '#555',
          fontWeight: exactActive ? 'bold' : active ? '600' : 'normal',
          backgroundColor: exactActive ? '#e8e8e8' : active ? '#f0f0f0' : 'transparent',
          borderLeft: exactActive ? '3px solid #333' : active ? '3px solid #aaa' : '3px solid transparent',
          fontSize: depth === 0 ? '15px' : depth === 1 ? '14px' : '13px',
        }}
      >
        {item.label}
      </Link>
      {item.children && active && (
        <ul style={{ margin: 0, padding: 0 }}>
          {item.children.map((child) => (
            <NavLink key={child.href} item={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Navigation() {
  return (
    <nav
      style={{
        width: '220px',
        minWidth: '220px',
        borderRight: '1px solid #ccc',
        padding: '16px 0',
        minHeight: '100vh',
        backgroundColor: '#fafafa',
      }}
    >
      <div style={{ padding: '0 8px 16px', borderBottom: '1px solid #ddd', marginBottom: '8px' }}>
        <strong style={{ fontSize: '16px' }}>Site Navigation</strong>
      </div>
      <ul style={{ margin: 0, padding: 0 }}>
        {navStructure.map((item) => (
          <NavLink key={item.href} item={item} depth={0} />
        ))}
      </ul>
    </nav>
  );
}
