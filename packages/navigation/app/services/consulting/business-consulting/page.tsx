import PageTemplate from '../../../components/PageTemplate';

export default function BusinessConsultingPage() {
  return (
    <PageTemplate
      title="Business Consulting"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Consulting', href: '/services/consulting' },
        { label: 'Business Consulting', href: '/services/consulting/business-consulting' },
      ]}
      description="Our business consultants work alongside your leadership to identify growth opportunities, streamline operations, and maximize organizational efficiency. We bring proven methodologies and industry expertise to help you achieve your business goals."
    />
  );
}
