import EmbededView from '@sentre/embeded-view'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
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
