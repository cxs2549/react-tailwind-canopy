import { useRoutes } from "react-router"
import Navbar from "./components/layout/Navbar/Navbar"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Home from "./pages/Home"
import Notifications from "./pages/Notifications"
import Projects from "./pages/Projects"
import Services from "./pages/Services"

const routes = [
    { path: "/", element: <Home /> },
    { path: "/notifications", element: <Notifications /> },
    { path: "/projects", element: <Projects /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/contact-us", element: <ContactUs /> },
    { path: "/services", element: <Services /> },
]

const App = () => {
    let element = useRoutes(routes)

    return (
        <div>
            <Navbar />
            <div>{element}</div>
        </div>
    )
}

export default App
