import React from 'react'


import Header from "../components/layout/Header";
import BackgroundCarousel from '../components/layout/BackgroundCarousel';
import BannerContainer from '../components/layout/BannerContainer';
import CardContainer from '../components/layout/CardContainer';
import Divider from "../components/layout/Divider";


function Home() {
  return (
    <div>
      <Header />
      <BackgroundCarousel />
      <BannerContainer />
      <Divider category="rating" />
      <CardContainer />
      <Divider category="end" />

      <Divider category="community" />
      <CardContainer />
      <Divider category="end" />
      {
        //<img src={RepeatBackground} style={{width: '100%'}}/>
      }
    </div>
  );
}

export default Home
