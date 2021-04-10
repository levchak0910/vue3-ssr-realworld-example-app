// workaround for harlem's bug: https://github.com/andrewcourtice/harlem/issues/26

import { createStore as harlemCreateStore, Store } from '@harlem/core'

const destroyStoreFunctions: Record<string, () => void> = {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createStore: typeof harlemCreateStore = <T extends Record<string, any> = any>(name: string, data: T): Store<T> => {
  if (name in destroyStoreFunctions) {
    destroyStoreFunctions[name]()
  }

  const store = harlemCreateStore<T>(name, data)

  destroyStoreFunctions[name] = store.destroy

  return store
}
