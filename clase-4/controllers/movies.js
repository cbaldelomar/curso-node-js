import { MovieModel } from '../models/database/movie.js'
import { validateMovie, validatePartialMovie } from '../schemas/movies.js'

export class MovieController {
  static async getAll (req, res) {
    const { genre } = req.query

    const movies = await MovieModel.getAll({ genre })

    res.json(movies)
  }

  static async getById (req, res) {
    const { id } = req.params

    const movie = await MovieModel.getById({ id })

    if (movie) return res.json(movie)

    res.status(404).json({ message: 'Movie not found' })
  }

  static async create (req, res) {
    const validationResult = validateMovie(req.body)

    if (!validationResult.success) {
    // return res.status(400).json({ error: JSON.parse(result.error.message) })
      return res.status(400).json(validationResult.error.flatten())
    }

    const newMovie = await MovieModel.create({ movie: validationResult.data })

    res.status(201).json(newMovie)
  }

  static async update (req, res) {
    const validationResult = validatePartialMovie(req.body)

    if (!validationResult.success) {
      return res.status(400).json({ error: JSON.parse(validationResult.error.message) })
    }

    const { id } = req.params

    const updatedMovie = await MovieModel.update({ id, movie: validationResult.data })

    if (updatedMovie === false) return res.status(404).json({ message: 'Movie not found' })

    res.json(updatedMovie)
  }

  static async delete (req, res) {
    const { id } = req.params

    const result = await MovieModel.delete({ id })

    if (result === false) return res.status(404).json({ message: 'Movie not found' })

    res.json({ message: 'Movie deleted' })
  }
}
