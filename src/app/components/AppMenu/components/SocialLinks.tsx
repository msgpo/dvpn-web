import * as React from 'react'
import { MenuItem } from '@material-ui/core'
import trans from '../../../../trans'

const styles = require('./SocialLinks.module.scss')

const SocialLinks = () => (
  <MenuItem button={false} className={styles.followMenuItem}>
    <div className={styles.followList}>
      <p>{trans('app.menu.follow.us')}</p>
      <ul>
        <li>
          <a href="https://t.me/mysterium_network" target="_blank" rel="noopener noreferrer">
            <div className="app-icons telegram" />
          </a>
        </li>
        <li>
          <a href="https://medium.com/mysterium-network" target="_blank" rel="noopener noreferrer">
            <div className="app-icons medium" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/MysteriumNet" target="_blank" rel="noopener noreferrer">
            <div className="app-icons tweeter" />
          </a>
        </li>
        <li>
          <a href="https://www.reddit.com/r/MysteriumNetwork/" target="_blank" rel="noopener noreferrer">
            <div className="app-icons reddit" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/MysteriumNet/" target="_blank" rel="noopener noreferrer">
            <div className="app-icons facebook" />
          </a>
        </li>
        <li>
          <a href="https://github.com/MysteriumNetwork" target="_blank" rel="noopener noreferrer">
            <div className="app-icons github" />
          </a>
        </li>
      </ul>
    </div>
  </MenuItem>
)

export default SocialLinks
