import React from 'react'
import Background1920 from '../images/Background1920.jpg'
import styles from '../style/Home.module.css'
import Container from 'react-bootstrap/Container';
import Header from "../components/layout/Header";
import SearchBar from "../components/SearchBar"
import CardContainer from '../components/layout/CardContainer';

function Home() {
  return (
    <div>
      <img
        className={styles.backgroundImage}
        src={Background1920}
        alt="Background1920"
      />

      <Header />
      <SearchBar />

      <Container className={styles.titleContainer} fluid="xxl">
        <h1 className={styles.title}>The Healthy Menu</h1>
      </Container>


    <CardContainer />

    </div>
  );
}

export default Home
