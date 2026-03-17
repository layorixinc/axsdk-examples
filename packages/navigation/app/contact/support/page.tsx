import PageTemplate from '../../components/PageTemplate';

export default function SupportContactPage() {
  return (
    <PageTemplate
      title="Support Contact"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Contact', href: '/contact' },
        { label: 'Support', href: '/contact/support' },
      ]}
      description="If you are experiencing issues with one of our products or services, our support contact team can help direct you to the right resource. Submit a support ticket, chat live with an agent, or find the support phone line for your region."
    />
  );
}
