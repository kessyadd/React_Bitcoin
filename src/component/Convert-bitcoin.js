import React, { Component } from 'react';
import axios from 'axios';

class Cusd extends Component {
  constructor(){
    super();
    this.state = {
      usd:'',
      idr: '',
      result: ''
    }
  }
  convertBitcoin()
  {
    var rup = this.refs.angka.value;
    var usd1 = (rup/14000);
    var url = `https://blockchain.info/tobtc?currency=USD&value=${usd1}`  
    axios.get(url).then((getData)=>{
      this.setState({
        idr: rup,
        usd: usd1,
        result: (getData.data).toFixed(8)
      })
    })       

  }

  render() {
    
    console.log(this.state.usd);
    console.log(this.idr);
    console.log(this.result);
    return (
      <div>
        <center>
          <h1>Konversi Rupiah ke Bitcoin</h1>
          <h3>Kurs 1 USD = 14.000 IDR</h3>
          <div className="form-group" style={{width: '500px'}}>        
            <input type="number" className="form-control" ref="angka" onKeyUp={()=>{this.convertBitcoin()}} placeholder="ketik angka..."/><br/>
          </div>
          <h1>RP {this.state.idr} = BTC {this.state.result}</h1> 
        </center>
      </div>
    )
  }
}

export default Cusd;