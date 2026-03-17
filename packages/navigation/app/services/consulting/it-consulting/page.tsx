import PageTemplate from '../../../components/PageTemplate';

export default function ITConsultingPage() {
  return (
    <PageTemplate
      title="IT Consulting"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Consulting', href: '/services/consulting' },
        { label: 'IT Consulting', href: '/services/consulting/it-consulting' },
      ]}
      description="Our IT consulting team helps organizations plan, implement, and optimize their technology infrastructure. From cloud migrations and cybersecurity assessments to enterprise architecture reviews, we provide actionable guidance tailored to your needs."
    />
  );
}
