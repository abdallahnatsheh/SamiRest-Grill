import Header from "./Header";
import Swipper from "./Swapper";
import HighlightPhone from "./HighlightPhone";
import Feautures from "./Feautures";
import LMCard from "./LMCards";
import Testimonials from "./Testimonials";
import LBGallery from "./LBGallery";
import Footer from "./Footer";
/*
main page component that put everything togather
*/
const MainPage = () => (
  <div className="main-page">
    <Header />
    <Swipper />
    <HighlightPhone />
    <Feautures />
    <LMCard />
    <Testimonials />
    <LBGallery />
    <Footer />
  </div>
);

export default MainPage;
