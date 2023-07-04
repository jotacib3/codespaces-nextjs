import productsQuery from "./graphql/products.query";
import productsApiRest from "./rest/get-products";
import productDetailsQuery from "./graphql/productDetails.query";
import availabilityApiRest from "./rest/get-availability";

export default [
    productsQuery,
    productsApiRest,
    productDetailsQuery,
    availabilityApiRest
];