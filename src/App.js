import { useRoutes } from "react-router"
import Navbar from "./components/layout/Navbar/Navbar"
import Home from "./pages/Home"
import Notifications from "./pages/Notifications"

const routes = [
    { path: "/", element: <Home /> },
    { path: "/notifications", element: <Notifications /> },
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
