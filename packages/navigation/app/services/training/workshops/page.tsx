import PageTemplate from '../../../components/PageTemplate';

export default function WorkshopsPage() {
  return (
    <PageTemplate
      title="Workshops"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Training', href: '/services/training' },
        { label: 'Workshops', href: '/services/training/workshops' },
      ]}
      description="Our instructor-led workshops provide hands-on immersive learning experiences for teams. Available in person or live online, workshops cover specialized topics in technology, leadership, and domain expertise with real-world exercises and expert facilitators."
    />
  );
}
