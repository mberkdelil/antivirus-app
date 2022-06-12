import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { individualProducts, addToCart, addToCart2, addToCart3 } from '../actions';
import getUrunler from '../service/urunler';
import MobileProducts from './MobileProducts';
import { getDevicePerYearPrice, getDevicesPrice, getDeviceButtons } from '../helper/helper';


const IndividualProduct = (props) => {

    useEffect(() => {
        getUrunler().then(data => {
            props.individualProducts(data)
        });
    }, []);

    const onDeviceCountChange = (product, deviceCount) => {

        const updatedProduct = {
            ...product, ...{
                displayPrice: getDevicesPrice(product.price, product.priceDeviceIndex, deviceCount),
            }
        };
        const newProductList = props.products.map(item => {
            if (item.id === product.id) {
                return updatedProduct;
            }
            return item;
        })
        props.individualProducts(newProductList)
    }



    return (
        <>
            <div className='container'>
                <h1 style={{ textAlign: "center", color: "grey" }}>Bireysel Ürünler</h1>
                <div className='row'>
                    {
                        props.products.map(product => (
                            <div key={product.id} id="div" className='col-6 mt-5' style={{ width: "48%", border: "1px solid #2196F3", height: "500px", margin: "auto 10px" }}>
                                <img style={{ width: "25%", height: "50%" }} src={product.imageURL} alt="chomar" />
                                <h2 style={{ width: "420px", display: "inline-block", paddingLeft: "10px", position: "absolute" }}>
                                    {product.title}
                                </h2>
                                <p className='lead' style={{
                                    maxWidth: "400px", display: "inline-flex", paddingLeft: "10px", fontStyle: "italic",
                                    fontFamily: "arial", fontSize: "17px"
                                }} >{product.description}</p >

                                <h6 style={{ float: "left", marginLeft: "40%", marginTop: "1%" }}>Pc Sayısı Seçin</h6>
                                {
                                    getDeviceButtons().map(deviceButton => {
                                        return <button key={`${deviceButton}_btn`} onClick={() => onDeviceCountChange(product, deviceButton)} id={`${deviceButton}_btn`} style={{ width: "50px", margin: "auto 5px" }} type="button" className="btn btn-primary">{deviceButton}</button>
                                    })
                                }

                                {/* <button id="btn10" style={{ float: "right", width: "50px", margin: "auto 5px" }} type="button" className="btn btn-primary">10</button>
                                <button id="btn5" style={{ float: "right", width: "50px", margin: "auto 5px" }} type="button" className="btn btn-primary">5</button>
                                <button onClick={() => onDeviceCountChange(product, 3)} id="btn3" style={{ float: "right", width: "50px", margin: "auto 5px" }} type="button" className="btn btn-primary">3</button>
                                <button id="btn1" style={{ float: "right", width: "50px", margin: "auto 5px" }} type="button" className="btn btn-primary">1</button>
                                <br /><br /><br /> */}

                                <div className="card" style={{ width: "18rem", border: "1px solid #2196F3", maxWidth: "180px", float: "left", margin: "auto 10px" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Özel Tanıtım Fiyatı</h5>
                                        <p id="p1" style={{ fontWeight: "bold", color: "#2196F3" }} className="card-text">{getDevicePerYearPrice(product.displayPrice, 1)} ₺</p>
                                        <button onClick={() => {
                                            const cartItem = { ...product, ...{ perYearPrice: getDevicePerYearPrice(product.displayPrice, 1) } }
                                            props.addToCart(cartItem);
                                        }} className="btn btn-primary">1 yıl satın al</button>
                                    </div>
                                </div>

                                <div className="card" style={{ width: "18rem", border: "1px solid #2196F3", maxWidth: "180px", float: "left", margin: "auto 10px" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Özel Tanıtım Fiyatı</h5>
                                        <p id="p2" style={{ fontWeight: "bold", color: "#2196F3" }} className="card-text">{getDevicePerYearPrice(product.displayPrice, 2)} ₺</p>
                                        <button onClick={() => {
                                            const cartItem = { ...product, ...{ perYearPrice: getDevicePerYearPrice(product.displayPrice, 2) } }
                                            props.addToCart(cartItem);
                                        }} className="btn btn-primary">2 yıl satın al</button>
                                    </div>
                                </div>

                                <div className="card" style={{ width: "18rem", border: "1px solid #2196F3", maxWidth: "180px", float: "left", margin: "auto 10px" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Özel Tanıtım Fiyatı</h5>
                                        <p id="p3" style={{ fontWeight: "bold", color: "#2196F3" }} className="card-text">{getDevicePerYearPrice(product.displayPrice, 3)} ₺</p>
                                        <button onClick={() => {
                                            const cartItem = { ...product, ...{ perYearPrice: getDevicePerYearPrice(product.displayPrice, 3) } }
                                            props.addToCart(cartItem);
                                        }} className="btn btn-primary">3 yıl satın al</button>
                                    </div>
                                </div>


                            </div>
                        ))
                    }

                </div>
            </div ><br /><hr />
            <MobileProducts />
        </>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, { individualProducts, addToCart, addToCart2, addToCart3 })(IndividualProduct);

