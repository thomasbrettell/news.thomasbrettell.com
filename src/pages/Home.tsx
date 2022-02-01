import useArticles from '../hooks/useArticles';
import { Link } from 'react-router-dom';

export default function Home() {
  const articles = useArticles();

  return (
    <main>
      {articles && (
        <ul>
          {articles.map((article) => (
            <li key={article.sys.id}>
              <Link to={`/${article.slug}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
