import type { ComputedRef } from 'vue'

import { createStore } from './create-store-wrapper'

import { request } from '../services'
import cookie from '../utils/cookie'

interface State {
  user: User | null
}

const STATE: State = {
  user: null,
}

const { getter, mutation } = createStore<State>('user', STATE)

export const user = getter('user', state => state.user)

export const isAuthorized = getter('isAuthorized', () => checkAuthorization(user))

export const checkAuthorization = (user: ComputedRef<User | null>): user is ComputedRef<User> => {
  return user.value !== null
}

export const updateUser = mutation<User | null>('updateUser', (state, userData) => {
  if (userData === undefined || userData === null) {
    cookie.remove('user')
    request.deleteAuthorizationHeader()
    state.user = null
  } else {
    cookie.set('user', userData)
    request.setAuthorizationHeader(userData.token)
    state.user = userData
  }
})
