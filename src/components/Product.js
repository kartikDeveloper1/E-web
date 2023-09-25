import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
function Product() {
    const products = useSelector((state) => state.allProducts.products)
    // console.log(products)
    return (
        <>
            {products.map((product,index) => {
                const { id, title, price, category, image } = product
                return (
                    <>
                        <div key={index} className="card col-12 col-lg-3 col-md-4 col-sm-6 my-5" >
                                <img src={image}  className="card-img-top " alt="not found" />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">${price}</li>
                                    <li className="list-group-item">{category}</li>
                                </ul>
                                <NavLink to={`/product/${id}`}><button className=' form-control btn btn-dark'>Read More</button></NavLink>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Product
