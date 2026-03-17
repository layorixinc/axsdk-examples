import PageTemplate from '../../../components/PageTemplate';

export default function MissionPage() {
  return (
    <PageTemplate
      title="Mission"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Company', href: '/about/company' },
        { label: 'Mission', href: '/about/company/mission' },
      ]}
      description="Our mission is to empower organizations and individuals with transformative technology solutions that drive sustainable growth and create lasting value. We believe technology should be accessible, reliable, and human-centered at its core."
    />
  );
}
