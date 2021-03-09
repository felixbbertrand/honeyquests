import React, { useState } from 'react'
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
import { Link } from "react-router-dom";
import { Account } from "..";
import { SidePanel } from "@1hive/1hive-ui"


const AppSidepanel = React.memo(function AppHeader({
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
  const [opened, setOpened] = useState(false);

  return (
    <SidePanel title="Panel title" opened={opened} onClose={() => setOpened(false)} blocking>
      <Link to="/">Home</Link>
      <Link to="/quests">Your quests</Link>
      <a href="https://app.honeyswap.org/#/swap?inputCurrency=0x71850b7e9ee3f13ab46d67167341e4bdc905eef9" target="_blank" rel="noopener noreferrer">
        Get Honey
               </a>
      <a href="https://github.com/felixbbertrand/honeyquests/wiki" target="_blank" rel="noopener noreferrer">
        FAQ
               </a>
    </SidePanel>
  )
})

export default AppSidepanel