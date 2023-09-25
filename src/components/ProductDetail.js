import React, { useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct,removeSelectedProduct } from '../redux/actions/productActions'
function ProductDetail() {
  const product = useSelector((state) => state.product)
  const { productId } = useParams()
  const { title, description, price, image } = product
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (productId !== "") {
      fetchProductDetails()
    }
    return ()=>{
      dispatch(removeSelectedProduct())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId])

  const fetchProductDetails = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err)
      })

    dispatch(selectedProduct(res.data))
    // console.log(res.data)
  }
  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div className='container mt-5'>..........Loading</div>
      ) : (
        <div className="container mt-5 ">
          <div className="row  justify-content-md-center">
            <div className="col-6 text-center">
              <img src={image} alt="" className="img-fluid" />
            </div>
            <div className="col-6">
              <h2>{title}</h2>
              <p>{description}</p>
              <p><b>Price : ${price}</b></p>
              <button className="btn btn-dark  btn-sm me-2">Add to Cart</button>
              <NavLink to={`/`}><button className='btn btn-dark btn-sm'>Prev Page</button></NavLink>
            </div>
          </div>
          
        </div>


      )}
    </>
  )
}

export default ProductDetail
