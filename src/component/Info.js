import React, { Component } from 'react';
import axios from 'axios';

class Info extends Component {
  constructor(){
    super();
    this.state = {
      info:[],
      audS:'',
      audB:'',
      eurS:'',
      eurB:'',
      gbpS:'',
      gbpB:'',
      jpyS:'',
      jpyB:'',
      usdS:'',
      usdB:''
    }
  }
  
  componentDidMount(){
    var url = `https://blockchain.info/ticker`;
    axios.get(url).then((getData)=>{
      this.setState({
        info: getData.data,
        audS: (getData.data.AUD.sell).toFixed(2),
        audB: (getData.data.AUD.buy).toFixed(2),
        eurS: (getData.data.EUR.sell).toFixed(2),
        eurB: (getData.data.EUR.buy).toFixed(2),
        gbpS: (getData.data.GBP.sell).toFixed(2),
        gbpB: (getData.data.GBP.buy).toFixed(2),
        jpyS: (getData.data.JPY.sell).toFixed(2),
        jpyB: (getData.data.JPY.buy).toFixed(2),
        usdS: (getData.data.USD.sell).toFixed(2),
        usdB: (getData.data.USD.buy).toFixed(2)
      })
    })
  }
  
  render() { 
    console.log(this.state.info) 
    console.log(this.state.audS) 
    return (
      <div>
        <center>
          <h1>Info Bitcoin Hari Ini</h1>
          <table className="table" style={{width: '800px'}}>
            <thead className="thead-dark">
              <tr>
                <th scope="col">Mata Uang</th>
                <th scope="col">Harga Beli</th>
                <th scope="col">Harga Jual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dollar Australia</td>
                <td>{this.state.audB}</td>                
                <td>{this.state.audS}</td>                
              </tr>
              <tr>
                <td>Euro Eropa</td>
                <td>{this.state.eurB}</td>                
                <td>{this.state.eurS}</td> 
              </tr>
              <tr>
                <td>Poundsterling Inggris</td> 
                <td>{this.state.gbpB}</td>                
                <td>{this.state.gbpS}</td>                
              </tr>
              <tr>
                <td>Yen Jepang</td>  
                <td>{this.state.jpyB}</td>                
                <td>{this.state.jpyS}</td>               
              </tr>
              <tr>
                <td>Dollar Amerika</td> 
                <td>{this.state.usdB}</td>                
                <td>{this.state.usdS}</td>              
              </tr>              
            </tbody>
          </table>
        </center>
      </div>
    )
  }
}

export default Info;