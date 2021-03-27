import { request } from '../services'
import storage from '../utils/storage'

export default function (): void {
  const user = storage.get<User>('user')
  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  if (user !== null && user.token !== undefined) request.setAuthorizationHeader(user.token)
}
