import PageTemplate from '../../components/PageTemplate';

export default function CareersPage() {
  return (
    <PageTemplate
      title="Careers"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/about/careers' },
      ]}
      description="Join our team and be part of something meaningful. We offer exciting career opportunities across engineering, design, business, and operations. We invest in our people with competitive benefits, a strong culture, and clear paths for professional growth."
      subPages={[
        { label: 'Open Positions', href: '/about/careers/open-positions' },
        { label: 'Benefits', href: '/about/careers/benefits' },
        { label: 'Culture', href: '/about/careers/culture' },
      ]}
    />
  );
}
