import PageTemplate from '../../../components/PageTemplate';

export default function NetworkingPage() {
  return (
    <PageTemplate
      title="Networking"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Hardware', href: '/products/hardware' },
        { label: 'Networking', href: '/products/hardware/networking' },
      ]}
      description="Our networking hardware portfolio includes enterprise-grade routers, managed switches, wireless access points, and firewall appliances. Built for reliability, speed, and security in professional and data center environments."
    />
  );
}
