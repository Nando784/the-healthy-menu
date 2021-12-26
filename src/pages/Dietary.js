import React from 'react'

import Background from "../components/Background";
import Header from "../components/layout/Header";
import CardContainer from '../components/layout/CardContainer'
import Card from '../components/Card'


function Dietary() {
  return (
    <div>
      {
        //<Background />
        //<Header />
      }

      <CardContainer>
        <Card
          image=""
          title="Card One"
          description="asfas asfjjas asd fa sfafafasfafa fasf safasfasdasdasdasas"
        />

        <Card
          image=""
          title="Card One"
          description="asfasfasfafafasfafafasfsafasfasdasdasdasas"
        />

        <Card
          image=""
          title="Card One"
          description="asfasfasfafafasfafafasfsafasfasdasdasdasas"
        />
      </CardContainer>
    </div>
  );
}

export default Dietary
