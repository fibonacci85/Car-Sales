import React from 'react';
import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = () => {
  return {
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    }
  }
}

export default connect(mapStateToProps, {})(AddedFeatures)

// export default AddedFeatures;
