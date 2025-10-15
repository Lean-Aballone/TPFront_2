import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar"

const Layout = () => {
    return <div id="Layout-container">
        <Sidebar></Sidebar>
        <Outlet />
 </div>;
}

export default Layout;