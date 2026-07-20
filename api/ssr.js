import { renderPage } from 'vike/server'

export default async function handler(req, res) {
  const pageContext = await renderPage({
    urlOriginal: req.url,
  })

  const { httpResponse } = pageContext

  if (!httpResponse) {
    res.statusCode = 404
    res.end('Not found')
    return
  }

  const { body, statusCode, headers } = httpResponse
  res.statusCode = statusCode
  headers.forEach(([name, value]) => res.setHeader(name, value))
  res.end(body)
}