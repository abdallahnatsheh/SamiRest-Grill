import Header from "./Header";
import Swipper from "./Swapper";
import HighlightPhone from "./HighlightPhone";
import Feautures from "./Feautures";
import LMCard from "./LMCards";
import Testimonials from "./Testimonials";
import LBGallery from "./LBGallery";
import Footer from "./Footer";
import { useGetLmcardsData } from "../firebase/mainPageHooks/lmcardsHook";
import { Spinner } from "react-bootstrap";
import { useGetSwipperData } from "../firebase/mainPageHooks/swapperHook";
/*
main page component that put everything togather
*/
const MainPage = () => {
  //recieving header and cards from custom hook that fetch the data from firebase firestore
  const [header, cards] = useGetLmcardsData();
  //recieving swippers images url from firebase firestore using custom hook
  const [swipers] = useGetSwipperData();
  return swipers.length !== 0 || header.length !== 0 || cards.length !== 0 ? (
    <div className="main-page">
      <Header />
      <Swipper swipers={swipers} />
      <HighlightPhone />
      <Feautures />
      <LMCard title={header[0]} paragraph={header[1]} cards={cards} />
      <Testimonials />
      <LBGallery />
      <Footer />
    </div>
  ) : (
    <div>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
    </div>
  );
};

export default MainPage;
