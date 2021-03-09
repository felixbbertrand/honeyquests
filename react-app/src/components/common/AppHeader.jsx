import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Header,
  IconPlus,
  Tag,
  textStyle,
  useLayout,
  useTheme,
  GU,
} from "@1hive/1hive-ui"
import styles from "./AppHeader.module.scss";
import { Link } from "react-router-dom";
import { Account } from "./";


const AppHeader = React.memo(function AppHeader({
  tokenSymbol,
  onAssignHolder,
  address,
  blockExplorer,
  web3Modal,
  price,
  mainnetProvider,
  userProvider,
  localProvider,
  logoutOfWeb3Modal,
  loadWeb3Modal
}) {
  const theme = useTheme()
  const { layoutName } = useLayout()

  return (
    <Header
      primary={
        <div >
          <div className={styles.title}>
            <div className={styles.logo} >
              <img src='logo.png'></img>
            </div>
            <span>Honey Quest</span>
          </div>
          {/* <Menu onClick={(e) => this.props.setRoute(e.key)} selectedKeys={[this.props.route]} mode="horizontal">
            <Menu.Item key="/">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/quests" >
              <Link to="/quests">Your quests</Link>
            </Menu.Item>
            <Menu.Item>
              <a href="https://app.honeyswap.org/#/swap?inputCurrency=0x71850b7e9ee3f13ab46d67167341e4bdc905eef9" target="_blank" rel="noopener noreferrer">
                Get Honey
               </a>
            </Menu.Item>
            <Menu.Item>
              <a href="https://github.com/felixbbertrand/honeyquests/wiki" target="_blank" rel="noopener noreferrer">
                FAQ
               </a>
            </Menu.Item>
            <SubMenu title="Exemples">
              <Menu.Item key="/contract">
                <Link onClick={() => { this.props.setRoute("/contract") }} to="/contract">YourContract</Link>
              </Menu.Item  >
              <Menu.Item key="/hints">
                <Link onClick={() => { this.props.setRoute("/hints") }} to="/hints">Hints</Link>
              </Menu.Item  >
              <Menu.Item key="/exampleui">
                <Link onClick={() => { this.props.setRoute("/exampleui") }} to="/exampleui">ExampleUI</Link>
              </Menu.Item  >
              <Menu.Item key="/subgraph">
                <Link onClick={() => { this.props.setRoute("/subgraph") }} to="/subgraph">Subgraph</Link>
              </Menu.Item  >
            </SubMenu>
          </Menu> */}
        </div>
      }
      secondary={
        <Account
          address={address}
          localProvider={localProvider}
          userProvider={userProvider}
          mainnetProvider={mainnetProvider}
          price={price}
          web3Modal={web3Modal}
          loadWeb3Modal={loadWeb3Modal}
          logoutOfWeb3Modal={logoutOfWeb3Modal}
          blockExplorer={blockExplorer}
        />
      }
    />
  )
})
AppHeader.propTypes = {
  onAssignHolder: PropTypes.func.isRequired,
  tokenSymbol: PropTypes.string,
}

export default AppHeader