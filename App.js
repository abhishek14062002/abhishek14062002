import { useState } from "react";
import BookingProvider from "./store/BookingProvider";
import "./App.css";

import Main from "./components/Main";
import ScrollIcon from "./components/UI/ScrollIcon";
import About from "./components/About";
import Booking from "./components/Booking/Booking";

import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

function App() {
  const [mobileNavActive, setMobileMenuActive] = useState(false);
  const moblieNavHandler = () => {
    setMobileMenuActive((state) => !state);
  };

  return (
    <>
      <div className="wrapper">
        <Main
          mobileNavActive={mobileNavActive}
          onMoblieNavHandler={moblieNavHandler}
        />
        <About />
        <BookingProvider>
          <Booking />
        </BookingProvider>

        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App;
