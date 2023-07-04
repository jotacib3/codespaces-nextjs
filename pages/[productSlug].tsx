import { useRouter } from 'next/router'

export default function ProductDetailPage() {
    const router = useRouter()
    return <p>Example: {router.query.productSlug}</p>
}