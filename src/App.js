import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
//Not-found
import NotFound404 from "./pages/Notfound";

function App() {
  const AquaRoutes = [
    {
      name: "Home",
      path: "/",
      component: <Home />,
    },
    {
      name: "About",
      path: "/about",
      component: <About />,
    },
    {
      name: "404-Not-Found",
      path: "*",
      component: <NotFound404 />,
    },
  ];
  return (
    <Router>
      <Routes>
        {AquaRoutes.map((r, i) => (
          <Route path={r.path} element={r.component} key={r.name} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
