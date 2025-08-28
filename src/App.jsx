import "./App.css";
import Layout from "./UI/Layout";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import Country from "./Pages/Country.jsx";
import CountryCard from "./Components/CountryCard.jsx";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path : 'country',
          element : <Country/>
        },
       {
  path: "detail/:id",
  element: <CountryCard />,
}

      ],
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
