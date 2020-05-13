import React, { Component } from 'react';
import HomeSlider from './Home_Slider.Component';
import HomePromotion from './Home_Promotions.component'


import { connect } from 'react-redux';


class Home extends Component {

   

    render() {
        return (
            <div>
                <HomeSlider/>
                <HomePromotion/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Home);
