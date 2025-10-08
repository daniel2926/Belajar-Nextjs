import { useRouter } from "next/router";

const detailProduct = () => {
    const router = useRouter();
    const { product } = router.query;
    return(
        <div>
            <h1>Detail Product Page</h1>
            <p>Product : {product}</p>
        </div>
    )
}
export default detailProduct;