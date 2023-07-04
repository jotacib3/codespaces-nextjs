import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import ProductCard from 'components/ProductCard/ProductCard';
import useFetchProducts from 'hooks/useFetchProducts';

export default function ProductList() {
    const { products, loading } = useFetchProducts();
    return (
        <Grid container spacing={2}>
            {loading && <p>Loading...</p>}
            {products && products.data.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <ProductCard key={product.id} {...product} />
                </Grid>
            ))}
        </Grid>
    );
}
