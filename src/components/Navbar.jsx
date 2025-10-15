import { Link } from "react-router-dom";

export default function Navbar({state}) {
    return (
        <nav class={state}>
            <ul>
                <li>
                    <Link to="/">Portada</Link>
                </li>

                <li>
                    <Link to="/bitacora">Bitácora</Link>
                </li>

                <li>
                    <Link to="/erika">Erika</Link>
                </li>

                <li>
                    <Link to="/gonza">Gonza</Link>
                </li>

                <li>
                    <Link to="/mariano">Mariano</Link>
                </li>

                <li>
                    <Link to="/lean">Lean</Link>
                </li>
            </ul>
        </nav>
    );
}