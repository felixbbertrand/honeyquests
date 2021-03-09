import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Header,
  useLayout,
  useTheme,
  Tabs,
  Split,
  Box
} from "@1hive/1hive-ui"
import styles from "./AppHeader.module.scss";
import { Account } from "./";
import { Spring } from '@1hive/1hive-ui/dist/web-d0294535';


const AppHeader = React.memo(function AppHeader({
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

  const [selected, setSelected] = useState(false);

  const routes = ['Quests', 'Create'];

  return (
    <Box>
      <Header
        primary={
          <div >
            <div className={styles.title}>
              <div className={styles.logo} >
                <img src='logo.png'></img>
              </div>
              <span>Honey Quest</span>
            </div>
            { }
          </div>
        }
        secondary={
          <Split
            primary={<Tabs
              items={routes}
              selected={selected}
              onChange={setSelected}
            />}
            secondary={<Account
              address={address}
              localProvider={localProvider}
              userProvider={userProvider}
              mainnetProvider={mainnetProvider}
              price={price}
              web3Modal={web3Modal}
              loadWeb3Modal={loadWeb3Modal}
              logoutOfWeb3Modal={logoutOfWeb3Modal}
              blockExplorer={blockExplorer}
            />}
          />
        }
      />
    </Box>
  )
})
AppHeader.propTypes = {
  onAssignHolder: PropTypes.func.isRequired,
  tokenSymbol: PropTypes.string,
}

export default AppHeader