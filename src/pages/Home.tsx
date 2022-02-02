import useArticles from '../hooks/useArticles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UL = styled.ul`
  list-style-type: disclosure-closed;
`;

export default function Home() {
  const articles = useArticles();

  return (
    <main>
      {articles && (
        <UL>
          {articles.map((article) => (
            <li key={article.sys.id}>
              <Link to={`/${article.slug}`}>{article.title}</Link>
            </li>
          ))}
        </UL>
      )}
    </main>
  );
}
