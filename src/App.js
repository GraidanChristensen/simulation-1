import React, {Component} from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import "./App.css";
import axios from 'axios';

class App extends Component{
    constructor(){
        super();

        this.state = {
            inventory: []
        }
    }

    getInventory = () => {
        axios.get('/api/inventory')
        .then(res => {
            this.setState({
                inventory: res.data
            })
        }).catch(err => console.log(err));
    }

    componentDidMount(){
        this.getInventory();
    }

    render(){
        return(
            <div>
              <Header/>
              <main className="main">
                 <Dashboard getInventory={this.getInventory} inventory={this.state.inventory}/>
                 <Form getInventory={this.getInventory}/>
              </main>
            </div>
        )
    }
}

export default App;