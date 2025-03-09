import "./App.css";
import About from "./Pages/About";
import Featured from "./Pages/Featured";
import Footer from "./Pages/Footer";
import Homepage from "./Pages/Homepage";
import Offers from "./Pages/Offers";
import Popular from "./Pages/Popular";
import SmallF from "./Pages/SmallF";

function App() {
  return (
    <div>
      <Homepage />
      <About />
      <Popular />
      <SmallF />
      <Featured />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;
