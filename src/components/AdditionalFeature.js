import React from 'react';
import { connect } from 'react-redux';
import { displayFeature } from '../actions/carActions';

const AdditionalFeature = props => {

const state = {
  newFeature: {
    name: props.feature.name, 
    price: props.feature.price
  }
}
  // const onClickHandler = (e) => {

  // }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}

      <button onClick={(e) => {
        e.preventDefault();
        props.displayFeature(props.feature)
      }} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     name: state.name,
//     price: state.price
//   }
// }


export default connect(null, {displayFeature})(AdditionalFeature)

// export default AdditionalFeature;
