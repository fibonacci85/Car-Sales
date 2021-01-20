import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = () => {
    return{
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  }
  }
}

export default connect(mapStateToProps,{})(Total);
// export default Total;
