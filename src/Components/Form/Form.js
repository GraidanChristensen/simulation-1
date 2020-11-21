import axios from 'axios';
import React, {Component} from 'react';
import './Form.css';

class Form extends Component{
    constructor(){
        super();

        this.state ={
            name: "",
            url: "https://img.icons8.com/ios/452/no-image.png",
            price: null
        }
    }

    handleURL = (e) => {
        this.setState({
            url: e.target.value
        })
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handlePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }


    addProduct = () => {
        //add product to inventory
        axios.post('/api/product', this.state)
        .then(res => {
            res.status(200);
        }).catch(err => console.log(err));

        //call get inventory to update it
        this.props.getInventory();

        //clear state
        this.setState({
            name: '',
            url: '',
            price: 0
        });
    }

    componentDidUpdate(){
        if(this.state.url === ""){
            this.setState({
                url:"https://img.icons8.com/ios/452/no-image.png"
            })
        }
    }

    render(){
        return(
            <div className="Form">
                <div className="imageContainer">
                    <img src={this.state.url}/>
                </div>
                <h5>Image URL:</h5>
                <input onChange={this.handleURL} placeholder="URL..."/>
                <h5>Product Name:</h5>
                <input value={this.state.name} onChange={this.handleName} placeholder="Name..."/>
                <h5>Price:</h5>
                <input value={this.state.price} onChange={this.handlePrice} placeholder="Price..."/>
                <div className="buttons">
                    <button onClick={() => {
                        this.setState({
                            url: "",
                            name: "",
                            price: 0
                        })
                    }} >
                        Cancel
                    </button>
                    <button onClick={this.addProduct}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;