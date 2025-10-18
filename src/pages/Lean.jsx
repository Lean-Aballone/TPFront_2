import Footer from "../components/Footer";
import Img from "../components/Img";
import Info from "../lean/Info"

const Lean = () => {
    return (
        <>
            <main>
                <Img src={"src/assets/img/carlina.png"} alt={"Lean"}/>
                <Info 
                    nombre={"Leandro Ezequiel Aballone"}
                    ubicacion={"Ciudad Autónoma de Buenos Aires (CABA)"}
                    formacion={"Tecnicatura en Desarrollo de Software (2° año)"}
                    edad={26}
                    mascota={"Carlina"}
                />
                <Footer/>
            </main>
        </>
    );
}

export default Lean;