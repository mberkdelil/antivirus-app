import { api } from "../api"
import { getDevicesPrice } from "../helper/helper"

const getUrunler = () => {
    return api().get("/individualProducts")
        .then(response => {
            const bireyselUrunler = response.data.map(item => {
                item.displayPrice = getDevicesPrice(item.price, item.priceDeviceIndex, 1);
                return item
            })
            return bireyselUrunler;
        })
        .catch(error => console.log(error))
}

export default getUrunler;