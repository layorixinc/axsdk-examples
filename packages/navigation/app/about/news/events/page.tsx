import PageTemplate from '../../../components/PageTemplate';

export default function EventsPage() {
  return (
    <PageTemplate
      title="Events"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'News', href: '/about/news' },
        { label: 'Events', href: '/about/news/events' },
      ]}
      description="Discover upcoming conferences, webinars, trade shows, and community events where you can connect with our team and learn about the latest developments. We host and participate in events around the world throughout the year."
    />
  );
}
