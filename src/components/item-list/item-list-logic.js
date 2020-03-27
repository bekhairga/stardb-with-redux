import React, { useEffect } from "react";
import Spinner from "../spinner";
import ItemListView from "./item-list-view";
import PropType from "prop-types";
import Pagination from "../pagination";
import { connect } from "react-redux";
import { fetchListDetails } from "../../action-creators/actionCreators";

const ItemListLogic = props => {
    const { loading, data, currentPage, lastPage, getData } = props;
    useEffect(() => props.fetchListDetails(getData, 1), []);
    console.log(props);
    const onPageChange = page => {
        props.fetchListDetails(getData, page);
    };
    const { onItemSelected } = props;
    const renderingItems = loading ? (
        <Spinner />
    ) : (
        <ItemListView data={data} onItemSelected={onItemSelected} />
    );
    return (
        <div>
            <ul className="item-list list-group">{renderingItems}</ul>
            <Pagination
                currentPage={currentPage}
                lastPage={lastPage}
                onPageChange={onPageChange}
            />
        </div>
    );
};
ItemListLogic.defaultProps = {
    onItemSelected: () => {}
};
ItemListLogic.propTypes = {
    onItemSelected: PropType.func
};

const mapDispatchToProps = dispatch => {
    return {
        fetchListDetails: (data, page) => dispatch(fetchListDetails(data, page))
    };
};
const mapStateToProps = state => {
    const { list } = state;
    return {
        loading: list.loading,
        data: list.data,
        currentPage: list.currentPage,
        lastPage: list.lastPage
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemListLogic);
