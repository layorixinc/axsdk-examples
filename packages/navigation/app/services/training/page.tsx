import PageTemplate from '../../components/PageTemplate';

export default function TrainingPage() {
  return (
    <PageTemplate
      title="Training"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Training', href: '/services/training' },
      ]}
      description="Our training programs are designed to upskill individuals and teams across all levels. Whether you prefer self-paced online learning, hands-on workshops, or formal certifications, we have a training path that fits your goals."
      subPages={[
        { label: 'Online Courses', href: '/services/training/online-courses' },
        { label: 'Workshops', href: '/services/training/workshops' },
        { label: 'Certifications', href: '/services/training/certifications' },
      ]}
    />
  );
}
