import PageTemplate from '../../../components/PageTemplate';

export default function OnlineCoursesPage() {
  return (
    <PageTemplate
      title="Online Courses"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Training', href: '/services/training' },
        { label: 'Online Courses', href: '/services/training/online-courses' },
      ]}
      description="Our online course library offers hundreds of self-paced learning modules covering technical skills, business practices, and professional development. Learn at your own pace with video lessons, quizzes, and practical exercises accessible from any device."
    />
  );
}
