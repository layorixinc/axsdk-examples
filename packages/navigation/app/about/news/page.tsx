import PageTemplate from '../../components/PageTemplate';

export default function NewsPage() {
  return (
    <PageTemplate
      title="News"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'News', href: '/about/news' },
      ]}
      description="Stay up to date with the latest announcements, thought leadership articles, and events from our organization. We share news about product launches, company milestones, and key industry developments."
      subPages={[
        { label: 'Press Releases', href: '/about/news/press-releases' },
        { label: 'Blog', href: '/about/news/blog' },
        { label: 'Events', href: '/about/news/events' },
      ]}
    />
  );
}
