export const individualProducts = products => {
    return { type: "GET_PRODUCT", payload: products }
};

export const mobilProduct = products => {
    return { type: "MOBIL", payload: products }
};

export const addToCart = product => {
    return { type: "ADD", payload: product }
}

export const addToCart2 = product => {
    return { type: "ADD2", payload: product }
}

export const addToCart3 = product => {
    return { type: "ADD3", payload: product }
}

export const totalPc_3 = id => {
    return { type: "TOTAL", payload: id }
}

export const deleteFromCart = id => {
    return { type: "DELETE", payload: id }
}

export const increaseCount = id => {
    return { type: "INCREASE_COUNT", payload: id }
}

export const decreaseCount = id => {
    return { type: "DECREASE_COUNT", payload: id }
}
