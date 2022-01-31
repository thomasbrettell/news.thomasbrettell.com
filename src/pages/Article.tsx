import { useParams } from 'react-router-dom';
import useArticle from '../hooks/useArticle';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Main = styled.main`
  margin: auto;
  max-width: 550px;
  width: 100%;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

const HomeLink = styled(Link)`
  position: fixed;
  top: 10px;
  left: 10px;
`;

const Article = () => {
  const { slug } = useParams();
  const data = useArticle(slug ? slug : '');

  if (!data) return null;
  const { title, author, content, date, organisation, link } = data;

  return (
    <>
      <Main>
        <h1>{title}</h1>
        <p>
          <strong>Author:</strong> {author}
        </p>
        <p>
          <strong>Date:</strong> {new Date(date).toLocaleDateString()}
        </p>
        <p>
          <strong>Organisation:</strong> {organisation}
        </p>
        <p>
          <strong>
            <a target='_blank' rel='noreferrer' href={link}>
              Link
            </a>
          </strong>
        </p>
        <hr />
        {content && documentToReactComponents(content.json)}
      </Main>
      <HomeLink to='/'>Home</HomeLink>
    </>
  );
};

export default Article;
