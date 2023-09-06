
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Works/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App
