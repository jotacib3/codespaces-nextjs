import { rest } from 'msw'

/* Available 
  HTTP methods 
    - rest.get
    - rest.put
    - rest.post
    - rest.delete
    - rest.update
  HTTP parameters:
   - example.com/:id
  Access the params in rest.get endpoint or any other http method with req.params
*/
export default rest.get('http://localhost:4000/products', (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json({
      data: [
        {
          averageRating: 0,
          featured: false,
          id: 'cHJvZHVjdDoyMzY4Ng==',
          databaseId: 23686,
          name: 'Esfera Disco sin motor',
          onSale: false,
          description: 'Esfera Disco de espejos, fija',
          status: 'publish',
          slug: 'esfera-disco-sin-motor',
          type: 'SIMPLE',
          image: 'https://cdn.uey.mx/uploads/RaulM-Esfera-disco-con-motor-2.png',
          rawPrice: '900',
          price: '$900.00',
          rawRegularPrice: '900',
          regularPrice: '$900.00',
          rawSalePrice: '900',
          salePrice: null,
        },
        {
          averageRating: 0,
          featured: false,
          id: 'cHJvZHVjdDoyMzY4NQ==',
          databaseId: 23685,
          name: 'Esfera Disco con motor',
          onSale: false,
          description: 'Giratoria con motor',
          status: 'publish',
          slug: 'esfera-disco-con-motor',
          type: 'SIMPLE',
          image: 'https://cdn.uey.mx/uploads/RaulM-Esfera-disco-con-motor-1.png',
          rawPrice: '1300',
          price: '$1,300.00',
          rawRegularPrice: '1300',
          regularPrice: '$1,300.00',
          rawSalePrice: '1300',
          salePrice: null,
        },
      ],
      cursors: {
        start: 'YXJyYXljb25uZWN0aW9uOjIzNjg2',
        hasNextPage: false,
        hasPreviousPage: false,
        end: 'YXJyYXljb25uZWN0aW9uOjIzNjg1',
      }
    }),
  )
);