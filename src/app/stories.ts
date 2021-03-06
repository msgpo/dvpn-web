import { Dispatch, Store } from 'redux'
import { RootState } from '../rootState.type'
import _ from 'lodash'
import { initAppFetchStory, initServerEventsStory } from '../provider/stories'
import {
  authAuthLoginAction,
  getDefaultConfigAction,
  getUserConfigAction,
  healthCheckAction,
  sendReportIssueAction
} from './actions'

export const initAppStory = (store: Store<RootState>) => {
  startAppStory(store.dispatch, _.get(store.getState(), 'provider.startedServices'))
    .catch((e) => (process.env.NODE_ENV !== 'production') && console.error(e))
}

export const loginStory = async (dispatch: Dispatch, value: any, services: any) => {
  await dispatch(authAuthLoginAction(value))
  await startAppStory(dispatch, services)
}

export const healthCheckStory = (dispatch: Dispatch) => {
  return Promise.resolve(dispatch(healthCheckAction()))
    .catch((e) => (process.env.NODE_ENV !== 'production') && console.error(e))
}

export const defaultConfigStory = (dispatch: Dispatch) => {
  return Promise.resolve(dispatch(getDefaultConfigAction()))
    .catch((e) => (process.env.NODE_ENV !== 'production') && console.error(e))
}

export const userConfigStory = (dispatch: Dispatch) => {
  return Promise.resolve(dispatch(getUserConfigAction()))
    .catch((e) => (process.env.NODE_ENV !== 'production') && console.error(e))
}

const startAppStory = (dispatch: Dispatch, services: any) => Promise.all([
  healthCheckStory(dispatch),
  defaultConfigStory(dispatch),
  userConfigStory(dispatch),
  initAppFetchStory(dispatch),
  initServerEventsStory(dispatch, services)
])

export const sendReportIssueStory = async (dispatch: Dispatch, formData: any) => {
  await dispatch(sendReportIssueAction(formData))
}

