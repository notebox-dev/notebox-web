import queryString from 'query-string'

export type Request = {
  path: string
  method: 'GET' | 'POST'
  body?: Record<string, any>
  query?: Record<string, string>
  cookies?: string
}

export const API_PREFIX = 'http://localhost:3100/api/v1'

export async function request<T>({ path, method, ...params }: Request): Promise<{ body: T }> {
  const query = queryToString(params.query)
  const body = JSON.stringify(params.body)

  const response = await fetch(`${API_PREFIX}${path}${query}`, {
    method,
    body,
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  })

  const answer = await response.json()

  const responder = {
    ok: response.ok,
    body: answer,
    status: response.status,
  }

  if (response.ok) {
    return responder
  } else {
    throw responder
  }
}

export function queryToString(query: Record<string, string> | undefined): string {
  return query ? `?${queryString.stringify(query)}` : ''
}
