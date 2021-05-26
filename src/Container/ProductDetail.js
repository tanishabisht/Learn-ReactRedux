import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'
import { setSelectedProduct, removeSelectedProduct } from '../Redux/actions/productActions'

const ProductDetail = (props) => {

    const ID = props.match.params.prodId


    const selectedProduct = useSelector(state => state.product)
    const dispatch = useDispatch()

    const fetchSelectedProduct = async() => {
        const res = await axios.get(`https://fakestoreapi.com/products/${ID}`)
            .catch(err => console.log(err))
        dispatch(setSelectedProduct(res.data))
    }

    useEffect(() => {
        if(ID && ID!=='') fetchSelectedProduct()
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [])

    console.log(selectedProduct)
    const {title, image, price, category, description} = selectedProduct

    return(
        <div className='container'>
            {Object.keys(selectedProduct).length?
                <div>
                    <h3>{title}</h3>
                    <img src={image} alt={title} />
                    <p>{price}</p>
                    <p>{category}</p>
                    <p>{description}</p>
                </div>:
                <p>Loading...</p>
            }
        </div>
    )
}

export default ProductDetail