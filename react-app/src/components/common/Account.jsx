import React from "react";
import Balance from "./Balance";
import Wallet from "./Wallet";
import { Button, IconConnect, IdentityBadge } from "@1hive/1hive-ui";
import { getNetwork } from "../../environment";


const style = {
  btnLogin: {
    background: 'linear-gradient(268.53deg, #aaf5d4 0%, #7ce0d6 100%)',
    margin: 'auto 0'
  }
}

export default class Account extends React.Component {
  render() {
    const network = getNetwork();

    const loginButton = (<Button
      key="loginbutton"
      icon={<IconConnect />}
      label="Connect"
      shape="round"
      size="large"
      onClick={this.props.loadWeb3Modal}
      style={style.btnLogin}
    />);

    const popAccountContent = (
      <>
        <div>
          <Wallet address={this.props.address} provider={this.props.userProvider} ensProvider={this.props.mainnetProvider} price={this.props.price} />
          <Balance address={this.props.address} provider={this.props.localProvider} dollarMultiplier={this.props.price} />
        </div>
        <Button onClick={this.props.logoutOfWeb3Modal} block danger className="mt-8" type="primary">
          Disconnect
      </Button>
        <Button
          key="loginbutton"
          icon={<IconConnect />}
          label="Connect"
          shape="round"
          size="large"
          onClick={this.props.loadWeb3Modal}
          style={style.btnLogin}
        />
      </>
    );


    const display = !this.props.web3Modal?.cachedProvider ? loginButton : (
      this.props.address ?
        (<IdentityBadge
          entity={this.props.address}
          connectedAccount
          networkType={network.type}
        />)
        : "Connecting..."
    );


    return (
      <div>
        {display}
      </div >
    );
  }
}
