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
          id: 'cHJvZHVjdDoyMzY4Ng==',
          name: 'Refresco Rojo Popular',
          description: 'El mejor refresco rojo de la historia',
          slug: 'refresco-rojo-popular',
          type: 'SIMPLE',
          image: 'https://images.unsplash.com/photo-1568561300108-e0c35b5f7c1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3IlMjByb2pvfGVufDB8fDB8fHww&w=1000&q=80',
          price: '$900.00',
        },
        {
          id: 'cHJvZHVjdDoyMzY4NQ==',
          name: 'Esfera Disco con motor',
          description: 'Giratoria con motor',
          slug: 'esfera-disco-con-motor',
          type: 'SIMPLE',
          image: 'https://cdn.uey.mx/uploads/RaulM-Esfera-disco-con-motor-1.png',
          price: '$1,300.00',
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