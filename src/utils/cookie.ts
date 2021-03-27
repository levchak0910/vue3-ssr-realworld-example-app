import Cookies from 'js-cookie'

function get<T = unknown> (key: string): T | null {
  try {
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    const value = Cookies.get(key) || ''
    return JSON.parse(value)
  } catch (e) {
    return null
  }
}

function set (key: string, value: unknown): void {
  const strValue = JSON.stringify(value)
  Cookies.set(key, strValue)
}

function remove (key: string): void {
  Cookies.remove(key)
}

function parse <T> (value: string): T {
  return JSON.parse(decodeURIComponent(value))
}

export default {
  get,
  set,
  remove,
  parse,
}
