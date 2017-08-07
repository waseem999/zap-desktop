// @flow
import React, { Component } from 'react'
import ReactSVG from 'react-svg'
import { FaCircle } from 'react-icons/lib/fa'
import Peers from './components/peers'
import Channels from './components/channels'
import styles from './Wallet.scss'

class Wallet extends Component {
	componentWillMount() {
		const { fetchInfo, fetchPeers, fetchChannels } = this.props
		
		fetchInfo()
		fetchPeers()
		fetchChannels()
	}

  render() {
  	const {
  		info,
      ticker,
  		peers: { peersLoading, peers, peer, peerForm },
  		channels: { channelsLoading, channels, channel, channelForm },
      setPeer,
      setChannel,
      peerModalOpen,
      channelModalOpen,
      setPeerForm,
      setChannelForm,
      connectRequest,
      disconnectRequest
  	} = this.props

    return (
      <div className={styles.wallet}>
        <section className={styles.header}>
        	<ReactSVG path='../resources/zap_2.svg' />
        	<h1>{info.data.identity_pubkey}</h1>
        </section>
        <section className={styles.walletData}>
          <Peers
            peersLoading={peersLoading}
            peers={peers}
            modalPeer={peer}
            setPeer={setPeer}
            peerModalOpen={peerModalOpen}
            peerForm={peerForm}
            setPeerForm={setPeerForm}
            connect={connectRequest}
            disconnect={disconnectRequest}
          />
          <Channels
            ticker={ticker}
            peers={peers}
            channelsLoading={channelsLoading}
            channels={channels}
            modalChannel={channel}
            setChannel={setChannel}
            channelModalOpen={channelModalOpen}
            channelForm={channelForm}
            setChannelForm={setChannelForm}
          />
        </section>
      </div>
    )
  }
}


export default Wallet