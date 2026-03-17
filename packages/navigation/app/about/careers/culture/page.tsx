import PageTemplate from '../../../components/PageTemplate';

export default function CulturePage() {
  return (
    <PageTemplate
      title="Culture"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/about/careers' },
        { label: 'Culture', href: '/about/careers/culture' },
      ]}
      description="Our culture is built on trust, inclusion, and a shared passion for making an impact. We foster an environment where every voice is heard, creativity is encouraged, and collaboration thrives across teams and time zones."
    />
  );
}
