import * as React from 'react'
import { ServiceSession } from '../../../../../../api/data/service-session'
import Timer from '../../../../../../ui-kit/components/Timer'
import formatDuration from 'format-duration'
import formatBytes from '../../../../../../utils/formatBytes'

const styles = require('./UserItem.module.scss')

type Props = {
  session: ServiceSession
}

const UserItem = (props: Props) => {
  const { consumerId, id, createdAt, bytesIn, bytesOut } = props.session

  return (
    <tr>
      <td title={consumerId}>
        <div className={styles.ipItem}>
          {/*<div className="flag-icon"/>*/}
          <a target={'_blank'}
             href={`${process.env.REACT_APP_MYSTERIUM_NETWORK}/session/${id}`}>{id}</a>
        </div>
      </td>
      <td>
        <Timer>
          {(value) => formatDuration((value - Date.parse(createdAt)) || 0, { leading: true })}
        </Timer>
      </td>
      <td>{formatBytes(bytesIn)}</td>
      <td>{formatBytes(bytesOut)}</td>
    </tr>
  )
}
export default UserItem
