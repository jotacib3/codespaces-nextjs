# Desarrollador de software con Next.js
Para este ejercicio supon que el proyecto es parte de un proyecto más grande donde colaboran muchos programadores. Como ya sabrás, tenemos varios tipos de productos y servicios que ofrecemos en la plataforma. Para este ejercicio vamos a considerar solo 2. El primero es el `producto simple`, el cual se compra y se entrega, como son refrescos y botanas. El segundo es el `producto rentable` el cual se entrega y se recoje en fechas especificas. Para este producto solo vamos a considerar que se puede rentar por cantidad de días.

El esqueleto de la aplicación cuenta con dos vistas:
   - `lista de productos`
   - `vista de detalle de cada producto`
   
Las funcionalidades que vamos a añadir a la aplicación son las siguientes:
1. La migración de un endpoint de REST API a GraphQL.
2. La maquetación de la vista de detalle del producto simple.
3. La maquetación de la vista de detalle del producto rentable y la integración del endpoint de REST API para los detalles de la disponiblidad del producto rentable.

## Installed packages
- Framework for building web applications with React: [NextJS](https://nextjs.org/docs)
- Component library:
  - [Material UI](https://mui.com/material-ui/getting-started/overview/)
  - [React Bootstrap](https://react-bootstrap.github.io/)
  - [PrimeReact](https://primereact.org/)
  - [HeadlessUI](https://headlessui.com/react/menu)
  - [Ant Design](https://ant.design/docs/react/introduce-cn)
- GraphQL Client: [Apollo Client](https://www.apollographql.com/docs/react/)
- REST Client: [Axios](https://axios-http.com/docs/intro)

# Ejercicios

## Ejercicio 1
Actualmente tenemos un endpoint `get` en REST API dentro del hook `useFetchProduct` que se usa para traer los productos que se muestran en el frontend. Queremos migrar ese endpoint por uno de GraphQL con nombre `GetAllProducts`. La query de GraphQL se hará al URI `http://localhost:4000`.

1. Haz un analisis del impacto de este cambio.
2. Intenta hacer este cambio de la manera más eficiente posible donde modifiques solo el código que consideres necesario.

- Un ejemplo de formato de respuesta del endpoint actual que usa REST API es el siguiente.

```json
data: [
        {
          id: 'cHJvZHVjdDoyMzY4Ng==',
          name: 'Esfera Disco sin motor',
          description: 'Esfera Disco de espejos, fija',
          slug: 'esfera-disco-sin-motor',
          type: 'SIMPLE',
          image: 'https://cdn.uey.mx/uploads/RaulM-Esfera-disco-con-motor-2.png',
          price: '$900.00',
        },
      ],
      cursors: {
        start: 'YXJyYXljb25uZWN0aW9uOjIzNjg2',
        hasNextPage: false,
        hasPreviousPage: false,
        end: 'YXJyYXljb25uZWN0aW9uOjIzNjg1',
      }
```

- Un ejemplo de formato de respuesta de la query GraphQL por la que se sustituirá el endpoint get del REST API es la siguiente

```json
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
            id: 'cHJvZHVjdDoyMzY4Ng==',
            name: 'Esfera Disco sin motor',
            shortDescription: 'Esfera Disco de espejos, fija',
            slug: 'esfera-disco-sin-motor',
            type: 'SIMPLE',
            image: {
              sourceUrl: 'https://cdn.uey.mx/uploads/RaulM-Esfera-disco-con-motor-2.png',
              __typename: 'MediaItem'
            },
            price: '$900.00',
            __typename: 'SimpleProduct'
          },
          __typename: 'RootQueryToProductConnectionEdge'
        },
      ],
      __typename: 'RootQueryToProductConnection'
```

 Un ejemplo de query para este formato sería:
```ts
const PRODUCTS_QUERY = gql`
  query GetAllProducts {
    products {
      pageInfo {
        startCursor
        hasNextPage
        hasPreviousPage
        endCursor
        __typename
      }
      edges {
        cursor
        node {
          id
          name
          shortDescription
          slug
          type
          image {
            sourceUrl
            __typename
          }
          price
        }
        __typename
      }
      __typename
    }
  } 
`
```
## Ejercicio 2:

En el archivo `pages/[productSlug].tsx` crea la vista detallada de los siguientes tipos de productos:
  - producto simple
  - producto rentable

Los detalles generales de los productos se obtienen con una consulta GraphQL a la query `productDetails` y un ejemplo de formato de respuesta sería:

```json
  {
    id: 'cHJvZHVjdDoyMzY4Ng==',
    name: 'Esfera Disco sin motor',
    shortDescription: 'Esfera Disco de espejos, fija',
    slug: 'esfera-disco-sin-motor',
    type: 'SIMPLE',
    image: {
      sourceUrl: 'https://cdn.uey.mx/uploads/RaulM-Esfera-disco-con-motor-2.png',
      __typename: 'MediaItem'
    },
    price: '$900.00',
    __typename: 'SimpleProduct'
  }

  {
    id: 'cHJvZHVjdDoyMzY4Ng==',
    name: 'mesa de billar',
    shortDescription: 'Mesa para jugar billar',
    slug: 'mesa-de-billar',
    type: 'RENTABLE',
    image: {
      sourceUrl: 'https://cdn.uey.mx/uploads/RaulM-Esfera-disco-con-motor-2.png',
      __typename: 'MediaItem'
    },
    price: '$23900.00',
    __typename: 'RentableProduct'
  }
```

Y un ejemplo de query para este formato sería:

```ts
const PRODUCT_DETAILS_QUERY = gql`
  query GetProductDetails($slug: String) {
    productDetails(slug: $slug) {
        id
        name
        shortDescription
        slug
        type
        image {
            sourceUrl
            __typename
        }
        price
        __typename
    }
}
`;
```

En la vista del producto rentable, vamos a mostrar los detalles de la disponibilidad. Los detalles de la disponiblidad se obtienen con una consulta REST API a `http://localhost:4000/products/availability` y la respuesta tiene el siguiente formato.

- Request:
```json
{
    "product_id": 'cHJvZHVjdDoyMzY4Ng==',
    "start_date": "2021-09-26",
    "end_date": "2021-09-29",
}
```

- Response:
```json
[
    [
       {
          “date”: “2021-09-26”,
          “availability”: 10
       }
    ],
    [
       {
          “date”: “2021-09-27”,
          “availability”: 5
       }
    ],
    [
       {
          “date”: “2021-09-28”,
          “availability”: 0
       }
    ],
    [
       {
          “date”: “2021-09-29”,
          “availability”: 17
       }
    ],
]
```
