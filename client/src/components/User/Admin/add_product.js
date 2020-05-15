import React, { Component } from 'react';
import UserLayout from '../../../hoc/user';

import FormField from '../../utils/Form/formfield';
import { update, generateData, isFormValid, populateOptionFields,resetFields} from '../../utils/Form/formActions';
import FileUpload from '../../utils/Form/fileupload';

import { connect } from 'react-redux';
import { getBrands, getWoods,addProduct, clearProduct } from '../../../actions/products_actions';


class AddProduct extends Component {

}


export default connect(mapStateToProps)(AddProduct);