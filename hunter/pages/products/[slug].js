import { useRouter } from "next/router"
const Product = () => {

    const router = useRouter()
    const { slug } = router.query

    return (

        <div>

            bhai:{slug}
            
        </div>

    )
}

export default Product
