import { useState } from "react";
import Loader from "./globals/elements/loader";
import ScrollToTop from "./globals/scroll-to-top";
import RootLayout from "./layouts/root-layout";

function App() {

  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      {isLoading && <Loader />}
      <ScrollToTop />
      <RootLayout />
    </>
  );
}

export default App;
