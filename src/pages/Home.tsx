import useArticles from '../hooks/useArticles';

export default function Home() {
  const articles = useArticles();
  console.log(articles);

  return (
    <main>
      {articles && (
        <ul>
          {articles.map((article) => (
            <li key={article.sys.id}>
              <a href={`/${article.slug}`}>{article.title}</a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
