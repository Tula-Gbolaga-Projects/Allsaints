import { CTABar } from "../home";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className=" min-h-screen flex flex-col z-50 w-full">
      <CTABar />
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      <div className="flex-1 ">{children}</div>
      <Footer />
    </div>
  );
};
export { Layout };
