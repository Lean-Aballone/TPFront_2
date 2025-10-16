import Card from "./Card";

const Integrantes = () => {
    return (
        <section className="container section flex">
            <h2>Integrantes grupo 14</h2>
            <p>Conocé al equipo del grupo 14. Cada tarjeta redirige a su página con más detalles.</p>
            <div className="cardSection">
                <p>Elegí un perfil para ver su tarjeta.</p>
                <div className="flexContainer">
                    <Card img={"src/assets/img/chikis.jpg"} nombre={"Erika"} frase={"Me gusta programar, aprender en equipo y disfrutar de mis cuatro perros."}/>
                    <Card img={"src/assets/img/gonzalo-profile.jpg"} nombre={"Gonza"} frase={"Curioso por la tecnología, creativo y con ganas de seguir evolucionando como profesional."}/>
                    <Card img={"src/assets/img/kity.jpeg"} nombre={"Mariano"} frase={"Apasionado por la tecnología y la innovación, con interés en proyectos de impacto real"}/>
                    <Card img={"src/assets/img/carlina.png"} nombre={"Lean"} frase={"Desarrollador en crecimiento, siempre aprendiendo y compartiendo experiencias."}/>
                </div>
            </div>
        </section>
    );
}

export default Integrantes;