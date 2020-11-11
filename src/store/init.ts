import type { ParameterizedContext } from 'koa'

import cookie from '../utils/cookie'

import * as userStore from './user'

export const initStore = (ctx: ParameterizedContext): void => {
  const userCookie = ctx.cookies.get('user')
  const user = typeof userCookie === 'string' ? cookie.parse<User>(userCookie) : null
  userStore.updateUser(user)
}
