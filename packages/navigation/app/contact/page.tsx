import PageTemplate from '../components/PageTemplate';

export default function ContactPage() {
  return (
    <PageTemplate
      title="Contact"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Contact', href: '/contact' },
      ]}
      description="We would love to hear from you. Whether you have a general question, are interested in our products and pricing, or need support assistance, our teams are ready to help. Choose the contact option that best fits your needs below."
      subPages={[
        { label: 'General', href: '/contact/general' },
        { label: 'Sales', href: '/contact/sales' },
        { label: 'Support', href: '/contact/support' },
      ]}
    />
  );
}
