import PageTemplate from '../../../components/PageTemplate';

export default function BlogPage() {
  return (
    <PageTemplate
      title="Blog"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'News', href: '/about/news' },
        { label: 'Blog', href: '/about/news/blog' },
      ]}
      description="Our blog features articles written by our team of experts on topics spanning technology trends, industry insights, best practices, and company updates. Subscribe to stay informed and inspired with fresh perspectives published regularly."
    />
  );
}
