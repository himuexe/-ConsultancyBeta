import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import Contactpage from "./pages/Contactpage";
import CareersPage from "./pages/CareerPage";
import AboutUs from "./pages/AboutUs";
import ServicesPage from "./pages/ServicesPage";
import Training from "./pages/Training";


const App = () => {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout><Homepage /></Layout>} />
      <Route path="/contact" element={<Layout><Contactpage/></Layout>} />
      <Route path="/careers" element={<Layout><CareersPage /></Layout>} />
      <Route path="/about" element={<Layout><AboutUs /> </Layout>}/>
      <Route path="/services" element={<Layout><ServicesPage /> </Layout>}/>
      <Route path="/training" element={<Layout><Training/></Layout>}></Route>
    </Routes>
  </Router>
  );
};

export default App;
