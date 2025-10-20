import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import "./apiSections.css";

const API_URL =
  "https://api.spaceflightnewsapi.net/v4/articles/?limit=9&ordering=-published_at";

const truncate = (text, maxLength = 180) => {
  if (!text) return "Sin descripción disponible.";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}…`;
};

const formatDate = (isoDate) => {
  if (!isoDate) return "Fecha no disponible";
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

const Noticias = () => {
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
          throw new Error("No pudimos obtener las noticias.");
        }
        const data = await response.json();
        setArticles(data?.results ?? []);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError("Ocurrió un problema al cargar las noticias. Intenta nuevamente más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();

    return () => controller.abort();
  }, []);

  return (
    <main className="api-page">
      <div className="api-page__inner">
        <header className="api-page__header">
          <h1>Noticias destacadas del espacio</h1>
          <p>
            Seleccionamos las novedades más recientes sobre lanzamientos, exploración espacial y tecnología,
            provistas por Spaceflight News. Cada tarjeta enlaza a la fuente original para que sigas leyendo.
          </p>
        </header>

        {loading && <div className="api-page__status">Buscando noticias frescas...</div>}

        {error && !loading && <div className="api-page__status">{error}</div>}

        {!loading && !error && (
          <section className="api-card-grid api-grid--images">
            {articles.map((article) => (
              <article key={article.id} className="api-card">
                {article.image_url && (
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="api-card__image"
                    loading="lazy"
                  />
                )}
                <div className="api-card__content">
                  <span className="api-card__tag">{article.news_site ?? "Spaceflight News"}</span>
                  <h2 className="api-card__title">{article.title}</h2>
                  <p className="api-card__meta">Publicado: {formatDate(article.published_at)}</p>
                  <p className="api-card__body">{truncate(article.summary)}</p>
                  <div className="api-card__actions">
                    <a
                      className="api-card__link"
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver artículo completo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default Noticias;
