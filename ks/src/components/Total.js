import React from 'react'
import { connect } from 'react-redux';

const Total = (props) => {

  const totalCount = props.cart.reduce((total, product) => (total = total + product.count), 0);
  const totalPrice = props.cart.reduce((total, product) => (total = total + product.count * product.price), 0).toFixed(2);

  return (
    <>

      <div className='checkout'>
        <div className='money'>
          <h3>Total Price : {totalPrice} ₺</h3>
          {/* <h4 style={{ color: "#2196F3" }}>total product</h4> */}
          <h3 style={{ color: "#2196F3" }}>Total Product :  {totalCount} </h3>
        </div>

      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Total);