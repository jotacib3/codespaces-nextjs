import { useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';

export default function ProductDetailPage() {
    const router = useRouter()
    // get availability for rentable product
    useEffect(() => {
        const availability = async () => {
            const { data } = await axios.get('http://localhost:4000/availability', {
                params: {
                    product_id: 'cHJvZHVjdDoyMzY4Ng==',
                    start_date: '2021-09-26',
                    end_date: '2021-09-26',
                },
            });
            console.log(data);
        };
        availability();
    }, [router.query.productSlug]);
    return <p>Example: {router.query.productSlug}</p>
}