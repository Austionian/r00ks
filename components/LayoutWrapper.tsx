import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="my-0 mx-auto max-w-7xl py-10 px-5">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default LayoutWrapper;
