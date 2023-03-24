import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Welcome1 from "./pages/Welcome1";
import SignUp from "./pages/SignUp";
import HomeIrrigation from "./pages/HomeIrrigation";
import HomeLighting from "./pages/HomeLighting";
import HomeTemperature from "./pages/HomeTemperature";
import Irrigation from "./pages/Irrigation";
import Lighting from "./pages/Lighting";
import Temperature from "./pages/Temperature";
import Abnormality from "./pages/Abnormality";
import FruitSorting from "./pages/FruitSorting";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/home-irrigation":
        title = "";
        metaDescription = "";
        break;
      case "/home-lighting":
        title = "";
        metaDescription = "";
        break;
      case "/home-temperature":
        title = "";
        metaDescription = "";
        break;
      case "/irrigation":
        title = "";
        metaDescription = "";
        break;
      case "/lighting":
        title = "";
        metaDescription = "";
        break;
      case "/temperature":
        title = "";
        metaDescription = "";
        break;
      case "/abnormality":
        title = "";
        metaDescription = "";
        break;
      case "/fruit-sorting":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Welcome1 />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/home-irrigation" element={<HomeIrrigation />} />
      <Route path="/home-lighting" element={<HomeLighting />} />
      <Route path="/home-temperature" element={<HomeTemperature />} />
      <Route path="/irrigation" element={<Irrigation />} />
      <Route path="/lighting" element={<Lighting />} />
      <Route path="/temperature" element={<Temperature />} />
      <Route path="/abnormality" element={<Abnormality />} />
      <Route path="/fruit-sorting" element={<FruitSorting />} />
    </Routes>
  );
}
export default App;
