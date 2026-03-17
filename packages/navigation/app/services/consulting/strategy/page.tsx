import PageTemplate from '../../../components/PageTemplate';

export default function StrategyPage() {
  return (
    <PageTemplate
      title="Strategy"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Consulting', href: '/services/consulting' },
        { label: 'Strategy', href: '/services/consulting/strategy' },
      ]}
      description="Our strategy consulting practice helps organizations define their long-term vision, identify competitive advantages, and create actionable roadmaps for sustainable growth. We combine data-driven analysis with deep market insights to guide executive decision-making."
    />
  );
}
