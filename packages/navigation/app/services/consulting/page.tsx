import PageTemplate from '../../components/PageTemplate';

export default function ConsultingPage() {
  return (
    <PageTemplate
      title="Consulting"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Consulting', href: '/services/consulting' },
      ]}
      description="Our consulting services bring deep expertise to your most complex challenges. We partner with your team to develop tailored strategies, optimize processes, and drive measurable outcomes across IT, business, and strategic domains."
      subPages={[
        { label: 'IT Consulting', href: '/services/consulting/it-consulting' },
        { label: 'Business Consulting', href: '/services/consulting/business-consulting' },
        { label: 'Strategy', href: '/services/consulting/strategy' },
      ]}
    />
  );
}
