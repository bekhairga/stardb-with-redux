import {
    FETCH_DETAILS_FAILURE,
    FETCH_DETAILS_REQUEST,
    FETCH_DETAILS_SUCCESS
} from "../constants/constants";

const fetchDetailsRequest = () => {
    return {
        type: FETCH_DETAILS_REQUEST
    };
};
const fetchDetailsSuccess = (item, image) => {
    return {
        type: FETCH_DETAILS_SUCCESS,
        item: item,
        image: image
    };
};
const fetchDetailsFailure = () => {
    return {
        type: FETCH_DETAILS_FAILURE
    };
};

export { fetchDetailsFailure, fetchDetailsRequest, fetchDetailsSuccess };
