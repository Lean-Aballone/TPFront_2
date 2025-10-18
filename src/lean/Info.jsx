export default function Info({ nombre, ubicacion, formacion, edad, mascota }){

    return (
        <article>
            <h2>{ nombre }</h2>
            <p>{ ubicacion }</p>
            <p>{ formacion }</p>
            <p>{ edad }</p>
            <p> { mascota } </p>
        </article>
    );
}