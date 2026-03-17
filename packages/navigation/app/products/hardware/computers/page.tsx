import PageTemplate from '../../../components/PageTemplate';

export default function ComputersPage() {
  return (
    <PageTemplate
      title="Computers"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Hardware', href: '/products/hardware' },
        { label: 'Computers', href: '/products/hardware/computers' },
      ]}
      description="From workstations to servers and laptops, our computer lineup features the latest processors, generous memory configurations, and fast storage. Designed for reliability and high performance across demanding workloads."
    />
  );
}
