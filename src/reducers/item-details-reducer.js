import {
    FETCH_DETAILS_FAILURE,
    FETCH_DETAILS_REQUEST,
    FETCH_DETAILS_SUCCESS
} from "../constants/constants";

const detailsReducer = (state = storeForItemDetails, action) => {
    switch (action.type) {
        case FETCH_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                item: action.item,
                image: action.image
            };
        case FETCH_DETAILS_FAILURE:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};
const storeForItemDetails = {
    loading: false,
    item: { id: undefined },
    error: false,
    image: null
};

export default detailsReducer;
