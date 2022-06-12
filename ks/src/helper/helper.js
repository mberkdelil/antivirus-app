export const getDevicesPrice = (price, deviceIndex, deviceCount) => {
    return (Math.round((price * deviceIndex * deviceCount) * 100) / 100).toFixed(2)
}

export const getDeviceButtons = () => {
    const newButtons = [
        1, 3, 5, 10
    ];
    return newButtons;
}

export const getDevicePerYearPrice = (price, year) => {
    return (Math.round(((price * year) - year * 10) * 100) / 100).toFixed(2)
}
