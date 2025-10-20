import Footer from "../components/Footer";
import "../App.css"
const Diagrama = () => {
    return (
        <main className="flex" style={{flexDirection:"column", flexWrap:"noWrap", backgroundColor:"#0f0f0f"}}>
            <iframe src="src/pages/RenderDiagram.drawio.html" style={{height:"100%",width:"100%"}}></iframe>
            <Footer/>
        </main>
    );
}

export default Diagrama;