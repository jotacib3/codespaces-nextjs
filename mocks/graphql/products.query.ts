import { graphql } from 'msw';
import products from '../data/products.data';

export default graphql.query('GetAllProducts', (req, res, ctx) =>
  res(
    ctx.data({
        pageInfo: {
          startCursor: 'YXJyYXljb25uZWN0aW9uOjIzNjg2',
          hasNextPage: false,
          hasPreviousPage: false,
          endCursor: 'YXJyYXljb25uZWN0aW9uOjIzNjg1',
          __typename: 'WPPageInfo'
        },
        edges: [
          {
            cursor: 'YXJyYXljb25uZWN0aW9uOjIzNjg2',
            node: products[0],
            __typename: 'RootQueryToProductConnectionEdge'
          },
          {
            cursor: 'YXJyYXljb25uZWN0aW9uOjIzNjg1',
            node: products[1],
            __typename: 'RootQueryToProductConnectionEdge'
          }
        ],
        __typename: 'RootQueryToProductConnection'
      }
    )
  )
);
