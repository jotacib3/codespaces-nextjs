## Desarrollador de software con Next.js

En uey.mx estamos buscando un desarrollador de software con experiencia en Next.js, GraphQL y REST API. Para evaluar tus habilidades, te pedimos que completes el siguiente ejercicio:

Para realizar el ejercio supón que estás en un nuevo proyecto real que ha sido comenzado por otro eequipo de desarrollo. 

El esqueleto de la aplicación cuenta con dos vistas: una lista de productos y una vista de detalle de cada producto. Hay algunas funcionalidades que se deben agregar a la aplicación, como la integración de REST API y la finalización de la vista del producto para el caso del producto rentable y el caso del producto simple.

Ejercicio 1
Actualmente se desea migrar el endpoint get que se encuentra en el hook `useFetchProduct` que tenemos en rest api actualmente por uno graphql de nombre `products`. La query graphql se hará al uri http://localhost:4000. Ambas peticiones se usar para traer los productos que se muestran en el frontend Siénte libre de hacer los cambios que consideres necesarios

- Un ejemplo de formato de respuesta del endpoint actual que usa rest api es el siguiente.

```json
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
      ],
      cursors: {
        start: 'YXJyYXljb25uZWN0aW9uOjIzNjg2',
        hasNextPage: false,
        hasPreviousPage: false,
        end: 'YXJyYXljb25uZWN0aW9uOjIzNjg1',
      }
```

- Un ejemplo de formato de respuesta de la query graphql por la que se sustituirá el endpoint get del rest api es la siguiente

```json
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
        ],
        __typename: 'RootQueryToProductConnection'
      }
```

Parte 2: Maquetación e integración REST API

En el archivo [productSlug].tsx crea la vista detalle del producto para el producto simple y para el rentable. En el caso del producto rentable se dea que pueda consultar su disponibilidad.

Es importante que tengas presente que tendrás que agregar los servicios que necesitarás consumir en el frontend. En el folder mocks/graphql y mocks/rest hay un ejemplo de como se definen un edpoint con cada uno(estos son lo que se usaron para el ejercico 1) y en mocks/handlers puedes ver como se agrega este a la petición.

## Para ejecutar la aplicación:
```
npm run dev
```


