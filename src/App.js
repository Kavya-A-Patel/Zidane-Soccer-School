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
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <NavBar />
          <About />
        </>
      ),
    },
    {
      path: "/gallery",
      element: (
        <>
          <NavBar />
          <Gallery />
        </>
      ),
    },
    {
      path: "/join",
      element: (
        <>
          <NavBar />
          <Join />
        </>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />
      <hr />
      <CopyrightFooter />
    </div>
  );
}

export default App;
