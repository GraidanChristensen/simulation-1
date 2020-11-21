import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component{

    handleDelete = (name) => {
        //delete product
        axios.delete(`/api/product/${name}`)
        .then(res => {
            res.status(200);
        }).catch(err => console.log(err));

        //update inventory
        this.props.getInventory();
    }

    render(){
       const mappedInventory=this.props.inventory.map((product, index) => {
            return(
                <div>
                    <Product handleDelete={this.handleDelete} url={product.url} name={product.name} price={product.price}/>
                </div>
            )
        })
        return(
            <div className="inventory">
                {mappedInventory}
            </div>
        )
    }
}

export default Dashboard;