import PageTemplate from '../components/PageTemplate';

export default function AboutPage() {
  return (
    <PageTemplate
      title="About"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
      ]}
      description="Learn more about who we are, what drives us, and the talented people behind our work. We are a dedicated team passionate about technology and committed to making a positive impact for our customers and communities."
      subPages={[
        { label: 'Company', href: '/about/company' },
        { label: 'Careers', href: '/about/careers' },
        { label: 'News', href: '/about/news' },
      ]}
    />
  );
}
