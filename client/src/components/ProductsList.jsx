import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { ADDED_TO_CART } from '../redux/Action_creators/CartActions';

const ProductsList = () => {
  const products = useSelector(state => state?.products?.products);
  const navigate = useNavigate()
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  }

  return (
    <div id='product_list' data-testid='product_list'>
      <div className='row align-items-center'>
        {
          products?.map((item, i) => (
            <div key={item?.id}  className='col-md-3 p-0 pl-2 mb-3'>
              <div className="card" data-testid='productCard' onClick={() => { handleClick(item?.id) }}>
                <div className="card-header bg-white">
                  <p className='title' data-testid='productName'> <strong>{item?.name?.slice(0, 58)}</strong></p>
                </div>
                <img className="card-img-top p-2" data-testid='productImage' src={item?.imageURL} alt={item?.name} />
                <div className="card-body">
                  <p className="card-text" data-testid='productDesc'>{item?.description}</p>
                </div>
                <div className='card-footer bg-white'>
                  <div className='row align-items-center'>
                    <div className='col-sm-6'>
                      <small data-testid='productPrice'><strong>MRP Rs.{item?.price}</strong></small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductsList