import "./App.css";
import CopyrightFooter from "./Components/CopyrightFooter";
import Footer from "./Components/Footer";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Join from "./Pages/Join";
import NavBar from "./Components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Home />
          <Footer />
          <hr />
          <CopyrightFooter />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <NavBar />
          <About />
          <Footer />
          <hr />
          <CopyrightFooter />
        </>
      ),
    },
    {
      path: "/gallery",
      element: (
        <>
          <NavBar />
          <Gallery />
          <Footer />
          <hr />
          <CopyrightFooter />
        </>
      ),
    },
    {
      path: "/join",
      element: (
        <>
          <NavBar />
          <Join />
          <Footer />
          <hr />
          <CopyrightFooter />
        </>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
