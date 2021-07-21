import { useRoutes } from "react-router";
import Navbar from "./components/layout/Navbar/Navbar";
import Home from "./pages/Home";

const routes = [{ path: "/", element: <Home /> }];

const App = () => {
  let element = useRoutes(routes);

  return (
    <>
      <Navbar />
      <div>{element}</div>
    </>
  );
};

export default App;
