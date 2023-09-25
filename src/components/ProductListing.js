import React, { useEffect } from 'react'
import axios from 'axios'
import Product from './Product'
import { useDispatch} from 'react-redux'
import { setProducts } from '../redux/actions/productActions'

function ProductListing() {
    const dispatch = useDispatch()
    // const products = useSelector((state)=>state)
    useEffect(()=>{
        fetchProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const fetchProducts=async()=>{
        const res=await axios.get('https://fakestoreapi.com/products')
        .catch((err)=>{
            console.log(err)
        })
        dispatch(setProducts(res.data))
    }
  return (
    <div className='container product-listing'>
      <div className="row">
        <Product/>
      </div>
    </div>
  )
}

export default ProductListing
