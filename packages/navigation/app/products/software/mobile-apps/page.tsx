import PageTemplate from '../../../components/PageTemplate';

export default function MobileAppsPage() {
  return (
    <PageTemplate
      title="Mobile Apps"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Software', href: '/products/software' },
        { label: 'Mobile Apps', href: '/products/software/mobile-apps' },
      ]}
      description="Our mobile applications are available on both iOS and Android platforms. Engineered for reliability and a great user experience, our mobile apps keep you connected and productive wherever you are."
    />
  );
}
