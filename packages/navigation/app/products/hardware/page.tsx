import PageTemplate from '../../components/PageTemplate';

export default function HardwarePage() {
  return (
    <PageTemplate
      title="Hardware"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Hardware', href: '/products/hardware' },
      ]}
      description="Our hardware product line includes high-performance computers, precision peripherals, and enterprise-grade networking equipment. Each product is built to last and engineered for optimal performance in professional environments."
      subPages={[
        { label: 'Computers', href: '/products/hardware/computers' },
        { label: 'Peripherals', href: '/products/hardware/peripherals' },
        { label: 'Networking', href: '/products/hardware/networking' },
      ]}
    />
  );
}
