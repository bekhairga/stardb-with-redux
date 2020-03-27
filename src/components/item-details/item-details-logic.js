import React, { useEffect } from "react";
import Spinner from "../spinner";
import "./item-details.css";
import ItemDetailsView from "./item-details-view";
import PropType from "prop-types";
import ErrorIndicator from "../error-indicator";
import { connect } from "react-redux";
import { fetchDetails } from "../../action-creators/actionCreators";

const ItemDetailsLogic = props => {
    const { loading, item, image, error, fetchDetails } = props;
    const { getData, getImage, itemId } = props;
    useEffect(() => {
        fetchDetails(getData, getImage, itemId);
    }, [itemId]);
    if (itemId === undefined) {
        return <h3>Please choose a {props.type}</h3>;
    }
    if (loading) {
        return (
            <div>
                <Spinner />
            </div>
        );
    }
    if (error) {
        return <ErrorIndicator />;
    }
    return (
        <ItemDetailsView
            allChildren={props.children}
            image={image}
            item={item}
        />
    );
};

ItemDetailsLogic.defaultProps = {
    itemId: 1,
    getData: () => {},
    getImage: () => {}
};
ItemDetailsLogic.propTypes = {
    itemId: PropType.number || PropType.string,
    getData: PropType.func,
    getImage: PropType.func
};

const mapStateToProps = state => {
    const { details } = state;
    return {
        loading: details.loading,
        item: details.item,
        error: details.error,
        image: details.image,
        state: details
    };
};
const mapDispatchToProps = dispatch => {
    return {
        fetchDetails: (data, image, id) =>
            dispatch(fetchDetails(data, image, id))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailsLogic);
