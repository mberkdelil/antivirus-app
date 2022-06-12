import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { mobilProduct, addToCart,addToCart2,addToCart3 } from '../actions'
import { api } from '../api';

const MobileProducts = (props) => {

    useEffect(() => {
        api().get("/mobileDevice")
            .then(response => {
                props.mobilProduct(response.data)
            })
    }, []);

    console.log(props.cart);

    return (
        <>
            <div className='container'>
                <h1 style={{ textAlign: "center", color: "grey" }}>Mobile Device</h1>
                <div className='row'>

                    {
                        props.mobileDevice.map(product => (
                            <div key={product.id} id="div" className='col-6 mt-5' style={{ width: "48%", border: "1px solid #2196F3", height: "500px", margin: "auto 10px" }}>
                                <img style={{ width: "25%", height: "50%" }} src={product.imageURL} alt="chomar" />
                                <h2 style={{ width: "420px", display: "inline-block", paddingLeft: "10px", position: "absolute" }}>
                                    {product.title}
                                </h2>
                                <p className='lead' style={{
                                    maxWidth: "400px", display: "inline-flex", paddingLeft: "10px", fontStyle: "italic",
                                    fontFamily: "arial", fontSize: "17px"
                                }} >{product.description}</p >
                                <br /><br /><br />
                                <div className="card" style={{ width: "18rem", border: "1px solid #2196F3", maxWidth: "180px", float: "left", margin: "auto 10px" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Özel Tanıtım Fiyatı</h5>
                                        <p id="m1" style={{ fontWeight: "bold", color: "#2196F3" }} className="card-text">{product.price._1year}</p>
                                        <button onClick={() => props.addToCart(product)} className="btn btn-primary">1 yıl satın al</button>
                                    </div>
                                </div>

                                <div className="card" style={{ width: "18rem", border: "1px solid #2196F3", maxWidth: "180px", float: "left", margin: "auto 10px" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Özel Tanıtım Fiyatı</h5>
                                        <p id="m2" style={{ fontWeight: "bold", color: "#2196F3" }} className="card-text">{product.price._2year}</p>
                                        <button onClick={() => props.addToCart2(product)} className="btn btn-primary">2 yıl satın al</button>
                                    </div>
                                </div>
                                <div className="card" style={{ width: "18rem", border: "1px solid #2196F3", maxWidth: "180px", float: "left", margin: "auto 10px" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Özel Tanıtım Fiyatı</h5>
                                        <p id="m3" style={{ fontWeight: "bold", color: "#2196F3" }} className="card-text">{product.price._3year}</p>
                                        <button onClick={() => props.addToCart3(product)} className="btn btn-primary">3 yıl satın al</button>
                                    </div>
                                </div>


                            </div>
                        ))
                    }

                </div>
            </div><br /><hr />
            {/* <MobilCihazlar /> */}
        </>
    )
}

const mapStateToProps = state => {
    return {
        mobileDevice: state.mobileDevice,
        cart: state.cart
    }
}

export default connect(mapStateToProps, { mobilProduct, addToCart,addToCart2,addToCart3 })(MobileProducts);