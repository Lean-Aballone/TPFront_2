import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL =
  "https://api.spaceflightnewsapi.net/v4/articles/?limit=2&ordering=-published_at";

const formatDate = (isoDate) => {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "short",
  })
    .format(date)
    .replace(".", "");
};

const truncate = (text, maxLength = 130) => {
  if (!text) return "Sin descripción disponible.";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}…`;
};

const NoticiasPreview = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL, { signal: controller.signal });
        if (!response.ok) {
          throw new Error("Error al obtener noticias.");
        }
        const data = await response.json();
        setArticles(data?.results ?? []);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError("No pudimos cargar las noticias ahora.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();

    return () => controller.abort();
  }, []);

  return (
    <article className="home-preview-card home-preview-card--noticias">
      <header>
        <h3>Noticias del espacio</h3>
        <p className="home-preview-meta">Últimas novedades de Spaceflight News</p>
      </header>

      {loading && <p className="home-preview-status">Cargando noticias...</p>}

      {error && !loading && <p className="home-preview-status">{error}</p>}

      {!loading && !error && (
        <ul className="home-preview-list">
          {articles.map((article) => (
            <li key={article.id}>
              <span>{formatDate(article.published_at)}</span>
              <p>
                <strong>{article.title}</strong>
                <br />
                {truncate(article.summary)}
              </p>
            </li>
          ))}
        </ul>
      )}

      <div className="home-preview-actions">
        <Link to="/noticias" className="home-preview-link">
          Leer más noticias
        </Link>
      </div>
    </article>
  );
};

export default NoticiasPreview;
