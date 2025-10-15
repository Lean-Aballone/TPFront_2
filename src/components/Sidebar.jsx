import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        /* div
                header
                    button
                hr
                navbar
                    ul
                        li
                            link
            div
        */
        <div class="open">
            <hr />
            <Navbar state="open"></Navbar>
        </div>
    );
}

export default Layout;