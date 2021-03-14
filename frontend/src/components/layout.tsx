import Nav from "@/components/nav";

const Layout = ({ children, categories, seo }: any) => (
  <>
    <Nav categories={categories} />
    {children}
  </>
);

export default Layout;
