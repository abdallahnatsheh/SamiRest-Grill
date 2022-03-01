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
import { useGetgalleryData } from "../firebase/mainPageHooks/mpgalleryHook";
import React from "react";
/*
main page component that put everything togather
*/
const MainPage = React.memo(function MainPage() {
  //recieving header and cards from custom hook that fetch the data from firebase firestore
  const [lmheader, lmcards] = useGetLmcardsData();
  //recieving swippers images url from firebase firestore using custom hook
  const [swipers] = useGetSwipperData();
  //hook that recieves gallery header and images from firebase
  const [galleryHeader, gallery] = useGetgalleryData();

  return swipers.length !== 0 &&
    lmheader.length !== 0 &&
    lmcards.length !== 0 &&
    galleryHeader.length !== 0 &&
    gallery.length !== 0 ? (
    <div className="main-page">
      <Header />
      <Swipper swipers={swipers} />
      <HighlightPhone />
      <Feautures />
      <LMCard title={lmheader[0]} paragraph={lmheader[1]} cards={lmcards} />
      <Testimonials />
      <LBGallery
        title={galleryHeader[0]}
        paragraph={galleryHeader[1]}
        gallery={gallery}
      />
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
});

export default MainPage;
