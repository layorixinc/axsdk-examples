import PageTemplate from '../../../components/PageTemplate';

export default function PeripheralsPage() {
  return (
    <PageTemplate
      title="Peripherals"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Hardware', href: '/products/hardware' },
        { label: 'Peripherals', href: '/products/hardware/peripherals' },
      ]}
      description="Enhance your computing setup with our range of peripherals, including ergonomic keyboards, precision mice, high-resolution monitors, and professional audio equipment. Engineered for comfort and productivity."
    />
  );
}
