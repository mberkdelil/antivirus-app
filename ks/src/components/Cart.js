import React from 'react'
import { connect } from 'react-redux'
import Total from './Total'
import { deleteFromCart, increaseCount, decreaseCount } from '../actions'

const Cart = (props) => {
  return (

    <div className='main'>

      <div style={{ width: "75%", }} className='itemslist'>

        {
          props.cart.map(item => (
            <div key={item.id} className='Cartitem'>
              <img src={item.image} alt={item.title} />
              <div className='details'>
                <h3>{item.title}</h3>
                <h6>{item.description} </h6>
                <span style={{ fontWeight: "bold", color: "#2196F3" }}>Total: {(item.price*item.count).toFixed(2)} ₺</span>
                <h5>
                  <p style={{ fontWeight: "bold", color: "#2196F3", fontSize: "20px" }}>You have {item.count} of this product in your cart</p><br />
                </h5>
                <br />
                <button onClick={() => props.deleteFromCart(item.id)} className='addButton'>Remove From Cart</button>

              </div>
              <div className='quantity'>
                <button onClick={() => props.increaseCount(item.id)} className='plus'>+</button>
                <p className='amount'>{item.count}</p>
                <button onClick={() => props.decreaseCount(item.id)} className='minus'>-</button>
              </div>
            </div>
          ))
        }

      </div>
      <Total />
    </div>

  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, { deleteFromCart, increaseCount, decreaseCount })(Cart);