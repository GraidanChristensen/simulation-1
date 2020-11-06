import React, {Component} from 'react';

class Product extends Component{
    render(){
        return(
            <div>
                <img className="productImage" alt={this.props.name} src={this.props.url}/>
                <h5>{this.props.name}</h5>
                <h5>{this.props.price}</h5>
            </div>
        )
    }
}

export default Product;