import React from "react";
import Address from "../Address";
import Balance from "./Balance";
import Wallet from "./Wallet";
import { Button, Popover } from "@1hive/1hive-ui";
import { useEffect, useState } from 'react';

const style = {
  btnLogin: {
    background: 'linear-gradient(268.53deg, #aaf5d4 0%, #7ce0d6 100%)',
    margin: 'auto 0'
  }
}

export default class Account extends React.Component {

  // parseAddress() {
  //   let addressShort = `${this.props.address.substring(0, 6)}...${this.props.address.substring(this.props.address.length - 4, this.props.address.length)}`;
  //   return (<Text copyable={this.props.address}>{addressShort}</Text>)
  // }

  getAddressComponent(minimized, interactable, showStatus) {
    return this.props.address ?
      (<Address size="short" minimized={minimized} interactable={interactable} showStatus={showStatus} localProvider={this.props.mainnetProvider}
        value={this.props.address} ensProvider={this.props.mainnetProvider} blockExplorer={this.props.blockExplorer} />)
      : "Connecting...";
  }

  render() {
    const loginButton = (<Button
      key="loginbutton"
      mode="strong"
      shape="round"
      size="large"
      onClick={this.props.loadWeb3Modal}
      style={style.btnLogin}
    >
      Connect
    </Button>);

    const popAccountContent = (
      <>
        {this.getAddressComponent(false, true, true)}
        <div>
          <Wallet address={this.props.address} provider={this.props.userProvider} ensProvider={this.props.mainnetProvider} price={this.props.price} />
          <Balance address={this.props.address} provider={this.props.localProvider} dollarMultiplier={this.props.price} />
        </div>
        <Button onClick={this.props.logoutOfWeb3Modal} block danger className="mt-8" type="primary">
          Disconnect
      </Button>
      </ >
    );

    const display = !this.props.web3Modal?.cachedProvider ? loginButton : (
      <div>
        <Button onClick={() => setVisible(true)} ref={opener}>
          Show
      </Button>
        <Popover
          visible={visible}
          opener={opener.current}
          onClose={() => setVisible(false)}
        >
          Popover
      </Popover>
      </div>
    );

    return (
      <div>
        {display}
      </div >
    );
  }
}
