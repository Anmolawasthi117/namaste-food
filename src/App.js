import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Offers from "./components/Offers";
import { Outlet } from "react-router-dom";
import RestaurantsMenu from "./components/RestaurantsMenu";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
// import useOnline from "./utils/useOnline";
import Cart from "./components/Cart";
import useOnline from "./utils/useOnline";
import "../style.css"
// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  // const { user } = useContext(userContext);
  const [user, setUser] = useState({
    name: "Arpit",
    email: "arpit@gamail.com",
  });

  // const isOnline = useOnline(true);
  const isOnline = useOnline(true);

  if (!isOnline) {
    return <h1>🔴Offline!! Please check you internet connection.</h1>;
  }
  return (
    <>
      <Provider store={store}>
        <userContext.Provider value={{ user: user }}>
          <Header />
          <Outlet />
          <Footer />
        </userContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
