import {
    FETCH_LIST_REQUEST,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILURE
} from "../constants/constants";

const storeForItemList = {
    data: {},
    loading: true,
    catch: false,
    currentPage: 1,
    lastPage: null
};
const itemListReducer = (state = storeForItemList, action) => {
    switch (action.type) {
        case FETCH_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                currentPage: action.currentPage,
                lastPage: action.lastPage
            };
        case FETCH_LIST_FAILURE:
            return {
                ...state,
                error: true,
                loading: false
            };

        default:
            return state;
    }
};

export default itemListReducer;
