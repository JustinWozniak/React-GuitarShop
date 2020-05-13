import React, { Component } from 'react';
import PageTop from '../utils/page_top';

import { frets,price } from '../utils/Form/fixed_categories';

import { connect } from 'react-redux';
import { getBrands, getWoods } from '../../actions/products_actions';

import CollapseCheckbox from '../utils/collapseCheckbox';





class Shop extends Component {

    state = {
        grid:'',
        limit:6,
        skip:0,
        filters:{
            brand:[],
            frets:[],
            wood:[],
            price:[]
        }
    }

    componentDidMount(){
        this.props.dispatch(getBrands());
        this.props.dispatch(getWoods());

    }

    handlePrice = (value) => {
        const data = price;
        let array = [];

        for(let key in data){
            if(data[key]._id === parseInt(value,10)){
                array = data[key].array
            }
        }
        return array;
    }


    handleFilters = (filters,category) => {
        console.log(filters)
       const newFilters = {...this.state.filters}
       newFilters[category] = filters;

        if(category === "price"){
            let priceValues = this.handlePrice(filters);
            newFilters[category] = priceValues
        }

       this.showFilteredResults(newFilters)
       this.setState({
           filters: newFilters
       })
    }

    showFilteredResults = (filters) =>{
     
    }

    loadMoreCards = () => {
       
    }

    handleGrid= () =>{
        this.setState({
            grid: !this.state.grid ? 'grid_bars':''
        })
    }


    render() {
        const products = this.props.products;
        return (
            <div>
                <PageTop
                    title="Browse Products"
                />
                <div className="container">
                    <div className="shop_wrapper">
                        <div className="left">
                            <CollapseCheckbox
                                initState={true}
                                title="Brands"
                                list={products.brands}
                                handleFilters={(filters)=> this.handleFilters(filters,'brand')}
                            />
                             <CollapseCheckbox
                                initState={false}
                                title="Frets"
                                list={frets}
                                handleFilters={(filters)=> this.handleFilters(filters,'frets')}
                            />
                            <CollapseCheckbox
                                initState={false}
                                title="Wood"
                                list={products.woods}
                                handleFilters={(filters)=> this.handleFilters(filters,'wood')}
                            />
                            
                           
                        </div>
                        <div className="right">
                            <div className="shop_options">
                                <div className="shop_grids clear">
                                    <div
                                        className={`grid_btn ${this.state.grid?'':'active'}`}
                                        onClick={()=> this.handleGrid()}
                                    >
                                       
                                    </div>
                                    <div
                                        className={`grid_btn ${!this.state.grid?'':'active'}`}
                                        onClick={()=> this.handleGrid()}
                                    >
                                     
                                    </div>
                                </div>
                            </div>
                            <div style={{clear:'both'}}>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Shop);