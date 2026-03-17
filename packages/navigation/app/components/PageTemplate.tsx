import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface SubPage {
  label: string;
  href: string;
}

interface PageTemplateProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  description: string;
  subPages?: SubPage[];
}

export default function PageTemplate({ title, breadcrumbs, description, subPages }: PageTemplateProps) {
  return (
    <div>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
        {breadcrumbs.map((crumb, index) => (
          <span key={crumb.href}>
            {index > 0 && <span style={{ margin: '0 6px' }}>›</span>}
            {index < breadcrumbs.length - 1 ? (
              <Link href={crumb.href} style={{ color: '#0070f3', textDecoration: 'none' }}>
                {crumb.label}
              </Link>
            ) : (
              <span style={{ color: '#333' }}>{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>

      {/* Title */}
      <h1 style={{ margin: '0 0 12px', fontSize: '28px', color: '#111' }}>{title}</h1>

      {/* Description */}
      <p style={{ color: '#444', lineHeight: '1.6', marginBottom: '24px' }}>{description}</p>

      {/* Sub-pages */}
      {subPages && subPages.length > 0 && (
        <section>
          <h2 style={{ fontSize: '18px', marginBottom: '12px', color: '#222' }}>Sub-pages</h2>
          <ul style={{ paddingLeft: '20px' }}>
            {subPages.map((page) => (
              <li key={page.href} style={{ marginBottom: '8px' }}>
                <Link href={page.href} style={{ color: '#0070f3', textDecoration: 'none', fontSize: '15px' }}>
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
