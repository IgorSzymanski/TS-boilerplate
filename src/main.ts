import express from 'express'
import cors from 'cors'
import { json } from 'body-parser'

const app = express()
const port = Number(process.env.PORT) || 3000

app.use(cors())
app.use(json())

app.get('/', (_request, response) => {
  response.send('Hello World!')
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Application started at http://localhost:${port}/.`)
})
