import PageTemplate from '../../components/PageTemplate';

export default function SoftwarePage() {
  return (
    <PageTemplate
      title="Software"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Software', href: '/products/software' },
      ]}
      description="Our software product line covers all major platforms — from powerful web applications and mobile apps to robust desktop software. Each product is engineered with performance, security, and user experience in mind."
      subPages={[
        { label: 'Web Apps', href: '/products/software/web-apps' },
        { label: 'Mobile Apps', href: '/products/software/mobile-apps' },
        { label: 'Desktop Apps', href: '/products/software/desktop-apps' },
      ]}
    />
  );
}
