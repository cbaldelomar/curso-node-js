import 'dotenv/config.js'
import express from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { createMovieRouter } from './routes/movies.js'
import { MovieModel } from './models/mysql/movie.js'
// import { MovieModel } from './models/mongodb/movie.js'
import { Database } from './data/database.js'

const app = express()

app.disable('x-powered-by')

app.use(corsMiddleware())

// Usar middleware que obtiene el json en el body de la request.
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Hola mundo' })
})

const server = {
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  // port: 3306, default port
  password: process.env.DB_PASSWORD
}

const database = new Database(server)
const movieModel = new MovieModel({ database })

app.use('/movies', createMovieRouter({ movieModel }))

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
