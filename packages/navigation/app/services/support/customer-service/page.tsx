import PageTemplate from '../../../components/PageTemplate';

export default function CustomerServicePage() {
  return (
    <PageTemplate
      title="Customer Service"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Support', href: '/services/support' },
        { label: 'Customer Service', href: '/services/support/customer-service' },
      ]}
      description="Our customer service team is dedicated to ensuring a smooth and positive experience at every touchpoint. From order inquiries and account management to billing questions and feedback, we are here to assist you promptly and professionally."
    />
  );
}
