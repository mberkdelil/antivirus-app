const initialState = {
    products: [],
    mobileDevice: [],
    cart: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCT":
            return {
                ...state, products: [...action.payload]
            }

        case "MOBIL":
            return {
                ...state, mobileDevice: [...state.mobileDevice, ...action.payload]
            }

        case "ADD":
            return {
                ...state, cart: [...state.cart, {
                    id: Math.random(),
                    title: action.payload.title,
                    description: action.payload.description,
                    price: action.payload.perYearPrice || action.payload.price._1year,
                    image: action.payload.imageURL,
                    count: 1
                }]
            }

        case "ADD2":
            return {
                ...state, cart: [...state.cart, {
                    id: Math.random(),
                    title: action.payload.title,
                    description: action.payload.description,
                    price: action.payload.displayPrice || action.payload.price._2year,
                    image: action.payload.imageURL,
                    count: 1
                }]
            }

        case "ADD3":
            return {
                ...state, cart: [...state.cart, {
                    id: Math.random(),
                    title: action.payload.title,
                    description: action.payload.description,
                    price: action.payload.displayPrice || action.payload.price._3year,
                    image: action.payload.imageURL,
                    count: 1
                }]
            }

        case "DELETE":
            return {
                ...state, cart: state.cart.filter(item => item.id !== action.payload)
            }

        case "INCREASE_COUNT":
            return {
                ...state, cart: state.cart.map((cartItem) => cartItem.id === action.payload ? { ...cartItem, count: cartItem.count + 1 } : cartItem)
            };

        case "DECREASE_COUNT":
            return {
                ...state, cart: state.cart.map((cartItem) => cartItem.id === action.payload ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 } : cartItem)
            }

        default:
            return state;
    }
};