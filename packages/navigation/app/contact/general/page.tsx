import PageTemplate from '../../components/PageTemplate';

export default function GeneralContactPage() {
  return (
    <PageTemplate
      title="General Contact"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Contact', href: '/contact' },
        { label: 'General', href: '/contact/general' },
      ]}
      description="For general inquiries, partnership opportunities, or any questions not covered by our other contact options, please reach out through our general contact form. Our team reviews all submissions and will respond within one to two business days."
    />
  );
}
