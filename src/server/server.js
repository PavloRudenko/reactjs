import express from 'express'
import { renderToString } from 'react-dom/server'

import { Header } from '../shared/Header'
import { indexTemplate } from './indexTemplate'

const app = express()

app.use(express.static('./dist/client'))

app.get('/', (req, res) => {
  res.send(indexTemplate(renderToString(Header())))
})

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000')
})
