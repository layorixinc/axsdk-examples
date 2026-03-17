import PageTemplate from '../../../components/PageTemplate';

export default function WebAppsPage() {
  return (
    <PageTemplate
      title="Web Apps"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Software', href: '/products/software' },
        { label: 'Web Apps', href: '/products/software/web-apps' },
      ]}
      description="Our web application suite includes cloud-based tools accessible from any browser. Built with modern frameworks and optimized for performance, our web apps deliver seamless experiences across all devices and operating systems."
    />
  );
}
