import { graphql } from 'msw'

export default graphql.query('products', (req, res, ctx) =>
  res(
    ctx.data({
      response: {
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
            node: {
              averageRating: 0,
              featured: false,
              id: 'cHJvZHVjdDoyMzY4Ng==',
              databaseId: 23686,
              name: 'Esfera Disco sin motor',
              onSale: false,
              shortDescription: 'Esfera Disco de espejos, fija',
              status: 'publish',
              slug: 'esfera-disco-sin-motor',
              type: 'SIMPLE',
              image: {
                sourceUrl: 'https://cdn.uey.mx/uploads/RaulM-Esfera-disco-con-motor-2.png',
                altText: '',
                __typename: 'MediaItem'
              },
              rawPrice: '900',
              price: '$900.00',
              rawRegularPrice: '900',
              regularPrice: '$900.00',
              rawSalePrice: '900',
              salePrice: null,
              __typename: 'SimpleProduct'
            },
            __typename: 'RootQueryToProductConnectionEdge'
          },
          {
            cursor: 'YXJyYXljb25uZWN0aW9uOjIzNjg1',
            node: {
              averageRating: 0,
              featured: false,
              id: 'cHJvZHVjdDoyMzY4NQ==',
              databaseId: 23685,
              name: 'Esfera Disco con motor',
              onSale: false,
              shortDescription: 'Esfera Disco de espejos, giratoria con motor',
              status: 'publish',
              slug: 'esfera-disco-con-motor',
              type: 'SIMPLE',
              image: {
                sourceUrl: 'https://cdn.uey.mx/uploads/RaulM-Esfera-disco-con-motor-1.png',
                altText: '',
                __typename: 'MediaItem'
              },
              rawPrice: '1300',
              price: '$1,300.00',
              rawRegularPrice: '1300',
              regularPrice: '$1,300.00',
              rawSalePrice: '1300',
              salePrice: null,
              __typename: 'SimpleProduct'
            },
            __typename: 'RootQueryToProductConnectionEdge'
          }
        ],
        __typename: 'RootQueryToProductConnection'
      }
    })
  )
);
