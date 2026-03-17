import PageTemplate from '../components/PageTemplate';

export default function ProductsPage() {
  return (
    <PageTemplate
      title="Products"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
      ]}
      description="Explore our full range of products spanning software solutions and hardware equipment. We offer cutting-edge technology products designed to meet the needs of modern businesses and individuals."
      subPages={[
        { label: 'Software', href: '/products/software' },
        { label: 'Hardware', href: '/products/hardware' },
      ]}
    />
  );
}
