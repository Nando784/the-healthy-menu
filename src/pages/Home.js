import React from 'react'

import Header from "../components/layout/Header";
import BackgroundCarousel from '../components/layout/BackgroundCarousel';
import BannerContainer from '../components/layout/BannerContainer';
import CardContainer from '../components/layout/CardContainer';
import Card from '../components/Card'
import Divider from "../components/layout/Divider";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <div>
      <Header detach={true} />
      <BackgroundCarousel />

      <BannerContainer />

      <Divider category="rating" />
      <CardContainer>
        <Card
          image=""
          title="Card One"
          description="Test test test test test test"
        />
        <Card
          image=""
          title="Card Two"
          description="Test test test test test test"
        />
        <Card
          image=""
          title="Card Three"
          description="Test test test test test test"
        />
      </CardContainer>

      <Divider category="end" />

      <Divider category="community" />
      <CardContainer>
        <Card
          image=""
          title="Card One"
          description="Test test test test test test"
        />
        <Card
          image=""
          title="Card Two"
          description="Test test test test test test"
        />
        <Card
          image=""
          title="Card Three"
          description="Test test test test test test"
        />
      </CardContainer>
      <Divider category="end" />

      <Footer />
    </div>
  );
}

export default Home
