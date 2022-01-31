import { useEffect, useState } from 'react';
import { ArticleType } from '../types';

interface GraphQLArticle {
  data: {
    articleCollection: {
      items: ArticleType[];
    };
  };
}

const useArticle = (slug: string) => {
  const [data, setData] = useState<ArticleType | null>(null);

  const query = `
    query {  
      articleCollection(where: {
        slug: "${slug}"
      }) {
        items {
          title
          author
          date
          link
          organisation
          content{
            json
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
      const data: GraphQLArticle = await response.json();
      setData(data.data.articleCollection.items[0]);
    };
    request();
  }, [query]);

  return data;
};

export default useArticle;
