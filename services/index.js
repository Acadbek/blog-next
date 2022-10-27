import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query Authors {
      postsConnection {
        edges {
          node {
            author {
              bio
              id
              name
              photo {
                url
              }
              createdAt
            }
            createdAt
            slug
            tItle
            excerpt
            photo {
              url
            }
            categories {
              name
              slug
              publishedAt
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};
