import PageTemplate from '../../../components/PageTemplate';

export default function BenefitsPage() {
  return (
    <PageTemplate
      title="Benefits"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/about/careers' },
        { label: 'Benefits', href: '/about/careers/benefits' },
      ]}
      description="We offer a comprehensive benefits package designed to support your health, financial well-being, and work-life balance. From health insurance and retirement plans to flexible working arrangements and generous leave policies, we've got you covered."
    />
  );
}
