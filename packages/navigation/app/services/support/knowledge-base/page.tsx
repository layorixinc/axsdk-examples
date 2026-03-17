import PageTemplate from '../../../components/PageTemplate';

export default function KnowledgeBasePage() {
  return (
    <PageTemplate
      title="Knowledge Base"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Support', href: '/services/support' },
        { label: 'Knowledge Base', href: '/services/support/knowledge-base' },
      ]}
      description="Our knowledge base is a self-service resource containing detailed documentation, how-to guides, FAQs, and troubleshooting articles. Browse hundreds of articles covering all our products and services to find answers quickly and independently."
    />
  );
}
