import React from 'react';
import Footer from './MainPart/Footer/Footer';
import Header from './MainPart/Header/Header';
import PartOne from './MainPart/AllSectionComponent/PartOne';
import PartTwo from './MainPart/AllSectionComponent/PartTwo';
import PartThree from './MainPart/AllSectionComponent/PartThree';
import PartFour from './MainPart/AllSectionComponent/PartFour';
import PartFive from './MainPart/AllSectionComponent/PartFive';
import PartSix from './MainPart/AllSectionComponent/PartSix';


function App() {
  return (
    <div >
  <Header/>
  <PartOne/>
  <PartTwo/>
  <PartThree/>
  <PartFour/>
  <PartFive/>
  <PartSix/>
   <Footer/>
    </div>
  );
}

export default App;
