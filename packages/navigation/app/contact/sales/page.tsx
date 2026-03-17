import PageTemplate from '../../components/PageTemplate';

export default function SalesContactPage() {
  return (
    <PageTemplate
      title="Sales"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Contact', href: '/contact' },
        { label: 'Sales', href: '/contact/sales' },
      ]}
      description="Interested in purchasing our products or services? Our sales team is happy to discuss your requirements, provide pricing information, and arrange product demonstrations. Reach out today to start a conversation with one of our account representatives."
    />
  );
}
