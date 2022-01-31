import { useParams } from 'react-router-dom';
import useArticle from '../hooks/useArticle';

const Article = () => {
  const { slug } = useParams();
  const data = useArticle(slug ? slug : '');
  console.log(data);
  return <h1>{slug}</h1>;
};

export default Article;
