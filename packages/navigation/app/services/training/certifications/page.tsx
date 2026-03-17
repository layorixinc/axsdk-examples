import PageTemplate from '../../../components/PageTemplate';

export default function CertificationsPage() {
  return (
    <PageTemplate
      title="Certifications"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Training', href: '/services/training' },
        { label: 'Certifications', href: '/services/training/certifications' },
      ]}
      description="Earn industry-recognized certifications that validate your skills and advance your career. Our certification programs are developed in partnership with leading industry bodies and cover a wide range of technical and professional competencies."
    />
  );
}
