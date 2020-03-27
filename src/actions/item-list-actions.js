import {
    FETCH_LIST_REQUEST,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILURE
} from "../constants/constants";

const fetchListRequest = () => {
    return {
        type: FETCH_LIST_REQUEST
    };
};
const fetchListSuccess = (data, lastPage, currentPage) => {
    return {
        type: FETCH_LIST_SUCCESS,
        currentPage: currentPage,
        lastPage: lastPage,
        data: data
    };
};
const fetchListFailure = () => {
    return {
        type: FETCH_LIST_FAILURE
    };
};
export { fetchListFailure, fetchListRequest, fetchListSuccess };
