import express from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { moviesRouter } from './routes/movies.js'

const app = express()

app.disable('x-powered-by')

app.use(corsMiddleware())

// Usar middleware que obtiene el json en el body de la request.
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Hola mundo' })
})

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
