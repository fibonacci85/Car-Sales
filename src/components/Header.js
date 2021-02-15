import React from 'react';
import { connect } from 'react-redux';

const Header = props => {

 
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
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

export default connect(mapStateToProps, {})(Header)

// export default Header;
