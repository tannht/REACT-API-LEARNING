import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import ProductsListPage from "./pages/ProductsListPage/ProductsListPage";
import ProductActionPage from "./pages/ProductAction/ProductActionPage";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />,
  },
  {
    path: "/contact",
    exact: false,
    main: () => <Contact />,
  },
  {
    path: "/products",
    exact: true,
    main: ({ location }) => <ProductsListPage location={location} />,
  },
  {
    path: "/products/add",
    exact: true,
    main: ({ history }) => <ProductActionPage history={history} />,
  },
  {
    path: "/products/:id/edit",
    exact: true,
    main: ({ match, history }) => (
      <ProductActionPage match={match} history={history} />
    ),
  },
  {
    path: "/login",
    exact: false,
    main: ({ location }) => <Login location={location} />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
