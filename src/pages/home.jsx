import { CTABar, HomeSections } from "../components/home";
import { Footer, NavBar } from "../components/shared";

const Home = () => {
  return (
    <div>
      <CTABar />
      <NavBar />
      <HomeSections />
      <Footer />
    </div>
  );
};
export { Home };
