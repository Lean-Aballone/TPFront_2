import Footer from "../components/Footer";
import Welcome from "../portada/Welcome";
import Integrantes from "../portada/Integrantes";
import "../portada/portada.css";
const Home = () => {
    return (
        <div className="flex">
            <Welcome 
                titulo={"Desarrollo de sistemas web (front End)"} 
                subtitulo={"Instituto de Formación Técnica Superior N° 29"}
                grupo={"Grupo 14"}
                bienvenida={"Bienvenidos a nuestra segunda entrega del trabajo práctico para Desarrollo Web. En esta ocasión migramos el trabajo práctico anterior a React + Vite. Los invitamos a ver cómo las iremos implementando a lo largo de las entregas."} 
            />
            <Integrantes/>
            <Footer/>
        </div>
    );
}

export default Home;