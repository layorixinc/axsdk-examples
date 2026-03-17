import PageTemplate from '../../../components/PageTemplate';

export default function DesktopAppsPage() {
  return (
    <PageTemplate
      title="Desktop Apps"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Software', href: '/products/software' },
        { label: 'Desktop Apps', href: '/products/software/desktop-apps' },
      ]}
      description="Our desktop applications are available for Windows, macOS, and Linux. These powerful standalone solutions offer rich functionality, offline capabilities, and deep system integration for demanding professional workflows."
    />
  );
}
