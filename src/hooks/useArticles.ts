import { useEffect, useState } from 'react';
import { ArticleType } from '../types';

interface GraphQLArticles {
  data: {
    articleCollection: {
      items: ArticleType[];
    };
  };
}

const useArticles = () => {
  const [data, setData] = useState<ArticleType[] | null>(null);

  const query = `
  query {
    articleCollection {
      items {
        title
        slug
        sys {
          id
        }
      }
    }
  }
  `;

  useEffect(() => {
    const request = async () => {
      const response = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        }
      );
      const data: GraphQLArticles = await response.json();
      setData(data.data.articleCollection.items);
    };
    request();
  }, [query]);

  return data;
};

export default useArticles;
