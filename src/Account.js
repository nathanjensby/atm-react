import React, { Component } from 'react';

export default class Account extends Component {
  constructor() {
    super();
    this.state = {
      balance:0
    }
  }

  _handleDeposit() {
    let amount = this.refs.amt.value;
    let newAmount = parseInt(amount, 10) + parseInt(this.state.balance, 10);
    this.setState({
      balance: newAmount
    })
  }

  _handleWithdrawal() {
    
  }

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">$0</div>
        <input type="text" placeholder="enter an amount" ref="amt"/>
        <input type="button" value="Deposit" ref="deposit" onClick={this._handleDeposit.bind(this)}/>
        <input type="button" value="Withdraw" ref="withdraw" onClick={this._handleWithdrawal.bind(this)}/>
      </div>
    )
  }
}
