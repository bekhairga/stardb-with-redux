import {
    fetchDetailsFailure,
    fetchDetailsRequest,
    fetchDetailsSuccess
} from "../actions/item-details-actions";
import {
    fetchListFailure,
    fetchListRequest,
    fetchListSuccess
} from "../actions/item-list-actions";
export const fetchDetails = (getData, getImage, id) => {
    return function(dispatch) {
        dispatch(fetchDetailsRequest());
        getData(id)
            .then(res => {
                const image = getImage(id);
                dispatch(fetchDetailsSuccess(res, image));
            })
            .catch(() => fetchDetailsFailure());
    };
};
export const fetchListDetails = (getData, page) => {
    return dispatch => {
        dispatch(fetchListRequest());
        getData(page)
            .then(res => {
                console.log(page);
                const lastPage = Math.round(res.count / 10);
                dispatch(fetchListSuccess(res, lastPage, page));
            })
            .catch(error => {
                dispatch(fetchListFailure());
            });
    };
};
