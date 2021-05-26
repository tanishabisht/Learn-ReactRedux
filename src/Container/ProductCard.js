import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const ProductCard = () => {

    const products = useSelector(state => state.allProducts.products)
    console.log(products)


    return(
        <div className='container'>
        <div className="row">
            {products.map(({id,image,title,price,category}) => {
                return (
                    <div className="col s12 m4 l3" key={id}>
                        <Link to={`/product/${id}`}>
                        <div className="card medium">
                            <div className="card-image">
                                <img className='image' src={image} alt={title} />
                            </div>
                            <div className="card-content">
                                <h6>{title}</h6>
                                <h6 className="grey-text text-darken-1">$ {price}</h6>
                                <p className="grey-text text-darken-3">{category}</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default ProductCard