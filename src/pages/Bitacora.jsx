import Footer from "../components/Footer";
import '../Bitacora/bitacora.css'
import Article from "../Bitacora/Article";
import reunionesData from '../Bitacora/reuniones.json'

const Bitacora = () => {
    return (
        <main id="app" className="page-content bitacoraBackground">
            <section className="containerBitacora sectionBitacora bitacoraStyle">
                <h2>
                    Bitácora
                </h2>
                <section id="sectionBitacora">
                {reunionesData.map(reunion => (
                    <Article
                    key={reunion.id}
                    titulo={reunion.titulo}
                    fecha={reunion.fecha}
                    info={reunion.info}
                    />
                ))}
                </section>
            </section>
            <Footer/>
        </main>
    );
}

export default Bitacora;