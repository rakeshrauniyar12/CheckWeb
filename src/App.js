import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const hideHeaderFooterRoutes = ["/hooponopono-power"];

  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(
    location.pathname
  );

  return (
    <div className="App">
      {!shouldHideHeaderFooter && <Header />}
      <Content />
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
