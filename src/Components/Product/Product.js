import React, {Component} from 'react';
import './Product.css';
class Product extends Component{
    render(){
        return(
            <div className='Product'>
                <div className="productImageContainer">
                    <img className="productImage" alt={this.props.name} src={this.props.url}/>
                </div>
                <div className="productTitles">
                    <h5>{this.props.name}</h5>
                    <h5>${this.props.price}</h5>
                </div>
                <div className="productButtons">
                <button onClick={this.props.handleDelete(this.props.name)} >Delete</button>
                <button>Edit</button>
                </div>
            </div>
        )
    }
}

export default Product;