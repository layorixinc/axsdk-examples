import PageTemplate from '../../../components/PageTemplate';

export default function TeamPage() {
  return (
    <PageTemplate
      title="Team"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Company', href: '/about/company' },
        { label: 'Team', href: '/about/company/team' },
      ]}
      description="Our team is composed of talented engineers, designers, consultants, and business professionals who share a passion for innovation. Diverse in background and expertise, we collaborate across disciplines to deliver exceptional outcomes for our clients."
    />
  );
}
