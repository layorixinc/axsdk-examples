import PageTemplate from '../components/PageTemplate';

export default function ServicesPage() {
  return (
    <PageTemplate
      title="Services"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
      ]}
      description="We offer a comprehensive suite of professional services to help your organization succeed. From expert consulting and training programs to responsive support, our teams are ready to assist you at every stage."
      subPages={[
        { label: 'Consulting', href: '/services/consulting' },
        { label: 'Support', href: '/services/support' },
        { label: 'Training', href: '/services/training' },
      ]}
    />
  );
}
