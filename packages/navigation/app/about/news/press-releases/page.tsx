import PageTemplate from '../../../components/PageTemplate';

export default function PressReleasesPage() {
  return (
    <PageTemplate
      title="Press Releases"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'News', href: '/about/news' },
        { label: 'Press Releases', href: '/about/news/press-releases' },
      ]}
      description="Browse our official press releases covering major announcements, product launches, partnerships, and corporate news. Our press team is available to assist journalists and media professionals with additional information and interviews."
    />
  );
}
