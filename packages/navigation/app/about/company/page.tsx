import PageTemplate from '../../components/PageTemplate';

export default function CompanyPage() {
  return (
    <PageTemplate
      title="Company"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Company', href: '/about/company' },
      ]}
      description="Founded with a vision to empower organizations through technology, we have grown into a trusted partner for businesses worldwide. Our culture centers on innovation, integrity, and a relentless commitment to customer success."
      subPages={[
        { label: 'History', href: '/about/company/history' },
        { label: 'Mission', href: '/about/company/mission' },
        { label: 'Team', href: '/about/company/team' },
      ]}
    />
  );
}
