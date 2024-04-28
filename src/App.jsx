import NavBar from "./components/navbar";
import Homepage from "./components/homepage";
import Aboutpage from "./components/aboutpage";
import Projectpage from "./components/projectpage";
import { Contactform } from "./components/contactform";
import Footer from "./components/footer";
import "./index.css";

function App() {

  return (
    <>
      <NavBar />
      <Homepage />
      <Aboutpage />
      <Projectpage />
      <Contactform />
      <Footer />
    </>
  )
}

export default App;
