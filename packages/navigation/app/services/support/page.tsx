import PageTemplate from '../../components/PageTemplate';

export default function SupportPage() {
  return (
    <PageTemplate
      title="Support"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Support', href: '/services/support' },
      ]}
      description="Our support services ensure that you get the most out of our products and solutions. With technical experts, customer service representatives, and a comprehensive knowledge base, help is always available when you need it."
      subPages={[
        { label: 'Technical', href: '/services/support/technical' },
        { label: 'Customer Service', href: '/services/support/customer-service' },
        { label: 'Knowledge Base', href: '/services/support/knowledge-base' },
      ]}
    />
  );
}
