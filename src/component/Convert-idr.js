import React, { Component } from 'react';
import axios from 'axios';

class Cidr extends Component {
  constructor(){
    super();
    this.state = {
      bitc:'',
      usd: '',
      result: ''
    }
  }
  convertBitcoin()
  {
    var bit = this.refs.angka.value;    
    var res = bit * (this.state.usd) * 14000;
    this.setState({
      bitc: bit,
      result: res
    })

  }

  componentDidMount(){
    var url = `https://blockchain.info/ticker`;
    axios.get(url).then((getData)=>{
      this.setState({
        usd: getData.data.USD.buy
      })
    })
  }
  render() {
    
    console.log(this.state.usd);
    console.log(this.bitc);
    console.log(this.result);
    return (
      <div>
        <center>
          <h1>Konversi Bitcoin ke Rupiah</h1>
          <h3>Kurs 1 USD = 14.000 IDR</h3>
          <div className="form-group" style={{width: '500px'}}>        
            <input type="number" className="form-control" ref="angka" onKeyUp={()=>{this.convertBitcoin()}} placeholder="ketik angka..."/><br/>
          </div>
          <h1>BTC {this.state.bitc} = RP {this.state.result}</h1>
        </center>
      </div>
    )
  }
}

export default Cidr;