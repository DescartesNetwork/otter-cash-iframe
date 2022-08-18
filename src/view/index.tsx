import { useEffect } from 'react'
import { useUI } from '@sentre/senhub'

import EmbededView from '@sentre/embeded-view'

import configs from 'configs'

const {
  manifest: { appId },
} = configs
const BG_IMG = 'linear-gradient(150deg, #ffcd9e, #e8ffb8)'

const View = () => {
  const { setBackground } = useUI()

  useEffect(() => {
    setBackground({ light: BG_IMG, dark: BG_IMG })
  }, [setBackground])

  return (
    <EmbededView
      appId={appId}
      src={'https://otter.cash/deposit'}
      title="A privacy layer for the Solana ecosystem."
      wallet={window.sentre.wallet}
    />
  )
}

export default View
