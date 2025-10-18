export default function About ({title, msg, children, className}) {
    return (
        <article className={className}>
            <h3>{title}</h3>
            <small>{msg}</small>
            {children}
        </article>
    );
}