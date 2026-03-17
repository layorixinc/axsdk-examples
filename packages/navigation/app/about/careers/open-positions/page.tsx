import PageTemplate from '../../../components/PageTemplate';

export default function OpenPositionsPage() {
  return (
    <PageTemplate
      title="Open Positions"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/about/careers' },
        { label: 'Open Positions', href: '/about/careers/open-positions' },
      ]}
      description="We are actively hiring across multiple departments and regions. Current openings span software engineering, product management, UX design, sales, and more. Browse our open positions and find the right opportunity to grow your career with us."
    />
  );
}
