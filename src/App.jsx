import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Suppliers } from "./components/Suppliers";
import { Footer } from "./components/Footer";
import { theme } from "./constants/theme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Hero />
        <Suppliers />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
