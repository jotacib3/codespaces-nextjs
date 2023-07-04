import { graphql } from 'msw'
import products from '../data/products.data'

export default graphql.query('GetProductDetails', (req, res, ctx) => {
    const productDetails =  products.find((product) => product.slug === req.variables.slug)
    return res(
        ctx.data({ productDetails })
      )
}
);
