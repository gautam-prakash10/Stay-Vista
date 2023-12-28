import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Best_rated from "./components/Best_rated";
import Footer from "./components/Footer";
import Offer from "./components/Offer";
import Staylikestar from "./components/Staylikestar";
// import Bestratedfilter from "./components/Bestratedfilter";
// import Bestrated from "./components/Bestrated";

function App() {
  return (
    <div className="App">
      
    <Best_rated/>
    <Offer/>
    <Staylikestar/>
    <Footer/>

    </div>
  );
}

export default App;
