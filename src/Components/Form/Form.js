import React, {Component} from 'react';

class Form extends Component{
    constructor(){
        super();

        this.state ={
            url: "",
            name: "",
            price: 0
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

    handleCancel = () => {

    }

    render(){
        return(
            <div>
                <h1>Form</h1>
                <input value={this.state.url} onChange={this.handleURL} placeholder="URL..."/>
                <input value={this.state.name} onChange={this.handleName} placeholder="Name..."/>
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
                    <button>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;