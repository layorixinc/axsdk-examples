import PageTemplate from '../../../components/PageTemplate';

export default function HistoryPage() {
  return (
    <PageTemplate
      title="History"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Company', href: '/about/company' },
        { label: 'History', href: '/about/company/history' },
      ]}
      description="Our story began over two decades ago when a group of passionate engineers set out to solve complex enterprise technology challenges. From a small startup to a global organization, every milestone has been shaped by a commitment to excellence and customer partnership."
    />
  );
}
