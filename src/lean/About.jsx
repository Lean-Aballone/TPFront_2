export default function About ({title, msg, children}) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{msg}</small>
            {children}
        </article>
    );
}