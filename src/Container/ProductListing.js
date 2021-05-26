import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../Redux/actions/productActions"
import { ProductCard } from './index'



const ProductListing = () => {
    
    const products = useSelector(state => state.allProducts)
    const dispatch = useDispatch()

    const fetchAllProducts = async() => {
        const res = await axios.get('https://fakestoreapi.com/products')
            .catch(err => console.log(err))
        dispatch(setProducts(res.data))
    }

    useEffect(() => {
        fetchAllProducts()
    }, [])

    console.log(products)

    return(
        <ProductCard/>
    )
}

export default ProductListing