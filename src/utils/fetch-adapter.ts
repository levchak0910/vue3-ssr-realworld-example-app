type Fetch = (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>
let fetch: Fetch

if (typeof window !== 'undefined') {
  fetch = window.fetch
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  fetch = require('node-fetch')
}

export default fetch
