import PageTemplate from '../../../components/PageTemplate';

export default function TechnicalSupportPage() {
  return (
    <PageTemplate
      title="Technical Support"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Support', href: '/services/support' },
        { label: 'Technical', href: '/services/support/technical' },
      ]}
      description="Our technical support team is available 24/7 to assist with product issues, configurations, troubleshooting, and system failures. We offer multiple tiers of support to match your organization's needs and SLA requirements."
    />
  );
}
