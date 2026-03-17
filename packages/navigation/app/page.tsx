import PageTemplate from './components/PageTemplate';

export default function HomePage() {
  return (
    <>
      <PageTemplate
        title="Home"
        breadcrumbs={[{ label: 'Home', href: '/' }]}
        description="Welcome to the Navigation Example. This site demonstrates a multi-level hierarchical navigation structure built with Next.js App Router. Use the navigation menu on the left to explore the different sections and pages."
        subPages={[
          { label: 'Products', href: '/products' },
          { label: 'Services', href: '/services' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ]}
      />
    </>
  );
}
