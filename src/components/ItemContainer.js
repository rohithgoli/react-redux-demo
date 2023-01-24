import React from "react";
import {connect} from "react-redux"
import { buyCake, buyIceCream } from "../redux";

// We want to reuse this component for either cakes or ice-cream or any other 
// through props passed by parent component

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

// mapStateToProps is a function which takes two parameters, state and props of component itself (ownProps)
// i.e like I know you are getting props from state, but it does have ownProps & make use of it if needed
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream
    return {
        item: itemState
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)