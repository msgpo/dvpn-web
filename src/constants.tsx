import { HTTP_API_URL, HTTP_API_PORT } from './api/http'

export const HTTP_NOT_FOUND = 404
export const NAT_FIX_URL = process.env.REACT_APP_FIX_NAT_URL
export const getHttpApiUrl = () => Boolean(process.env.REACT_APP_HTTP_API_USE_LOCATION)
  ? `${window.location.protocol}//${window.location.hostname}:${HTTP_API_PORT}`
  : HTTP_API_URL

export const NODE_TYPE = {
  RESIDENTIAL: 'residential',
  DATA_CENTER: 'data_center'
}
